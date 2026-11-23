import { createRequire } from 'node:module';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

/*
 * Картинка для превью ссылки в мессенджерах: 1200×630, как просят Telegram, Slack и VK.
 * Рисуем SVG руками и переводим в PNG при сборке. Шрифт моноширинный, поэтому ширина строки
 * считается по числу знаков, и для переноса заголовка не нужен движок вёрстки.
 */

const require = createRequire(import.meta.url);
const fontDir = path.dirname(require.resolve('@expo-google-fonts/jetbrains-mono/package.json'));
const fontFiles = [
  path.join(fontDir, '400Regular', 'JetBrainsMono_400Regular.ttf'),
  path.join(fontDir, '700Bold', 'JetBrainsMono_700Bold.ttf'),
];

const W = 1200;
const H = 630;
const PAD = 80;
const ADVANCE = 0.6; // ширина знака JetBrains Mono в долях кегля

// Цвета Night из DESIGN.md: фон, заголовок, приглушённый текст и акцент Original
const BG = '#13171f';
const INK = '#f0f1f3';
const MUTED = '#7b8495';
const ACCENT = '#95d600';

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text: string, maxChars: number, maxLines: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (next.length <= maxChars) { line = next; continue; }
    if (line) lines.push(line);
    line = word.length > maxChars ? word.slice(0, maxChars - 1) + '…' : word;
  }
  if (line) lines.push(line);
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  kept[maxLines - 1] = kept[maxLines - 1].replace(/\s*\S*$/, '') + '…';
  return kept;
}

/** Самый крупный кегль, при котором заголовок помещается в четыре строки. */
function fitTitle(title: string): { size: number; lines: string[] } {
  for (const size of [68, 60, 52, 46]) {
    const maxChars = Math.floor((W - PAD * 2) / (size * ADVANCE));
    const lines = wrap(title, maxChars, 4);
    if (!lines.at(-1)!.endsWith('…') || size === 46) return { size, lines };
  }
  return { size: 46, lines: wrap(title, Math.floor((W - PAD * 2) / (46 * ADVANCE)), 4) };
}

export function renderOgImage({ title, section }: { title: string; section?: string }): Buffer {
  const { size, lines } = fitTitle(title);
  const lineHeight = Math.round(size * 1.22);
  // Заголовок растёт вниз от строки разделов: если центровать его, три строки налезали на разделы
  const titleTop = 200;
  const sectionLine = section ? wrap(section, Math.floor((W - PAD * 2) / (26 * ADVANCE)), 1)[0] : '';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <text x="${PAD}" y="${PAD + 24}" font-family="JetBrains Mono" font-size="30" fill="${ACCENT}">[<tspan fill="${INK}">blinov.monster</tspan>]</text>
  ${sectionLine ? `<text x="${PAD}" y="${PAD + 80}" font-family="JetBrains Mono" font-size="26" fill="${MUTED}">${escape(sectionLine)}</text>` : ''}
  ${lines.map((l, i) => `<text x="${PAD}" y="${titleTop + i * lineHeight + size}" font-family="JetBrains Mono" font-weight="700" font-size="${size}" fill="${INK}">${escape(l)}</text>`).join('\n  ')}
  <text x="${PAD}" y="${H - PAD + 6}" font-family="JetBrains Mono" font-size="26" fill="${MUTED}">Александр Блинов</text>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="${ACCENT}"/>
</svg>`;

  return new Resvg(svg, {
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'JetBrains Mono' },
    fitTo: { mode: 'width', value: W },
  }).render().asPng();
}

(() => {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const chromaLight = document.getElementById("chroma-light");
  const chromaDark = document.getElementById("chroma-dark");

  const storedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (systemDark ? "dark" : "light");
  
  const applyThemeUi = (theme) => {
    root.dataset.theme = theme;
    if (chromaLight && chromaDark) {
      const isDark = theme === "dark";
      chromaDark.disabled = !isDark;
      chromaLight.disabled = isDark;
    }
  };

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  const enhanceCodeBlocks = () => {
    const preBlocks = document.querySelectorAll("pre");

    preBlocks.forEach((pre) => {
      // 1. Avoid duplicate buttons
      if (pre.dataset.hasCopyButton === "true") return;

      // 2. Create a stable container for the button
      // We wrap EVERY pre in a dedicated container to ensure consistent positioning
      const container = document.createElement("div");
      container.className = "code-block-container";
      
      // Insert container before pre, then move pre into container
      pre.parentNode.insertBefore(container, pre);
      container.appendChild(pre);

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "code-copy-btn";
      copyBtn.textContent = "Copy";
      copyBtn.setAttribute("aria-label", "Скопировать код");

      copyBtn.addEventListener("click", async () => {
        const codeText = pre.innerText.trimEnd();
        try {
          await navigator.clipboard.writeText(codeText);
          copyBtn.textContent = "Copied";
          copyBtn.classList.add("copied");
          
          window.setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
          }, 2000);
        } catch (_) {
          copyBtn.textContent = "Error";
          window.setTimeout(() => {
            copyBtn.textContent = "Copy";
          }, 2000);
        }
      });

      container.appendChild(copyBtn);
      pre.dataset.hasCopyButton = "true";
    });
  };

  // removed duplicate theme block

  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyThemeUi(next);
    });
  }

  // === Font Size Logic ===
  const fontBtn = document.getElementById("font-toggle");
  const fontSizes = ["sm", "md", "lg"];
  
  // Default to 'md' if nothing is stored
  const storedFont = localStorage.getItem("font-size");
  const initialFont = fontSizes.includes(storedFont) ? storedFont : "md";
  
  const applyFontUi = (size) => {
    root.dataset.font = size;
  };

  applyFontUi(initialFont);

  if (fontBtn) {
    fontBtn.addEventListener("click", () => {
      const currentSize = root.dataset.font || "md";
      const currentIndex = fontSizes.indexOf(currentSize);
      const nextIndex = (currentIndex + 1) % fontSizes.length;
      const nextSize = fontSizes[nextIndex];
      
      localStorage.setItem("font-size", nextSize);
      applyFontUi(nextSize);
    });
  }

  // === Code Blocks Logic ===
  enhanceCodeBlocks();
})();

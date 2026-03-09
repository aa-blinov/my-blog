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
      // 1. Avoid duplicate buttons and skip mermaid blocks
      if (pre.dataset.hasCopyButton === "true") return;
      if (pre.getAttribute("data-language") === "mermaid") return;

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
      copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" /></svg>`;
      copyBtn.setAttribute("aria-label", "Copy code");
      copyBtn.title = "Copy";

      copyBtn.addEventListener("click", async () => {
        const codeText = pre.innerText.trimEnd();
        try {
          await navigator.clipboard.writeText(codeText);
          copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`;
          copyBtn.classList.add("copied");
          
          window.setTimeout(() => {
            copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" /></svg>`;
            copyBtn.classList.remove("copied");
          }, 2000);
        } catch (_) {
          // keep as is or can add an error icon
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
  const fontIncreaseBtn = document.getElementById("font-increase");
  const fontDecreaseBtn = document.getElementById("font-decrease");
  const fontSizes = ["xs", "sm", "md", "lg", "xl"];
  
  // Default to 'md' if nothing is stored
  const storedFont = localStorage.getItem("font-size");
  const initialFont = fontSizes.includes(storedFont) ? storedFont : "md";
  
  const applyFontUi = (size) => {
    root.dataset.font = size;
    const index = fontSizes.indexOf(size);
    
    // Update button states (optional: visual feedback when limits reached)
    if (fontDecreaseBtn) fontDecreaseBtn.style.opacity = index === 0 ? "0.3" : "0.7";
    if (fontIncreaseBtn) fontIncreaseBtn.style.opacity = index === fontSizes.length - 1 ? "0.3" : "0.7";
  };

  applyFontUi(initialFont);

  if (fontIncreaseBtn) {
    fontIncreaseBtn.addEventListener("click", () => {
      const currentSize = root.dataset.font || "md";
      const currentIndex = fontSizes.indexOf(currentSize);
      if (currentIndex < fontSizes.length - 1) {
        const nextSize = fontSizes[currentIndex + 1];
        localStorage.setItem("font-size", nextSize);
        applyFontUi(nextSize);
      }
    });
  }

  if (fontDecreaseBtn) {
    fontDecreaseBtn.addEventListener("click", () => {
      const currentSize = root.dataset.font || "md";
      const currentIndex = fontSizes.indexOf(currentSize);
      if (currentIndex > 0) {
        const nextSize = fontSizes[currentIndex - 1];
        localStorage.setItem("font-size", nextSize);
        applyFontUi(nextSize);
      }
    });
  }

  // === Code Blocks Logic ===
  enhanceCodeBlocks();

  // === Mermaid Logic ===
  const renderMermaid = async () => {
    const mermaidPres = document.querySelectorAll('pre[data-language="mermaid"], .language-mermaid');
    if (mermaidPres.length === 0) return;

    try {
      const { default: mermaid } = await import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs");

      mermaid.initialize({
        startOnLoad: false,
        theme: "forest",
        fontFamily: "var(--font-family)",
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true
        }
      });

      mermaidPres.forEach((el, index) => {
        const pre = el.tagName === "PRE" ? el : el.closest("pre");
        if (!pre) return;

        if (pre.dataset.mermaidProcessed) return;
        pre.dataset.mermaidProcessed = "true";

        const existingContainer = pre.closest(".code-block-container");
        const nodeToWrap = existingContainer || pre;
        
        const toggleWrapper = document.createElement("div");
        toggleWrapper.className = "mermaid-toggle-wrapper";
        
        nodeToWrap.parentNode.insertBefore(toggleWrapper, nodeToWrap);
        
        const diagramWrapper = document.createElement("div");
        diagramWrapper.className = "mermaid-wrapper highlight";
        diagramWrapper.style.display = "flex";
        diagramWrapper.style.justifyContent = "center";
        diagramWrapper.style.alignItems = "center";
        diagramWrapper.style.margin = "2rem 0";
        diagramWrapper.style.overflowX = "auto";
        diagramWrapper.style.cursor = "pointer";
        // Force dark background to match Astro Shiki dark theme
        diagramWrapper.style.backgroundColor = "#24292e";
        diagramWrapper.style.padding = "1rem";
        diagramWrapper.style.borderRadius = "var(--pico-border-radius)";
        diagramWrapper.title = "Нажмите, чтобы увидеть код исходника";
        
        // Add code button on Mermaid wrapper
        const diagramToggleBtn = document.createElement("button");
        diagramToggleBtn.type = "button";
        diagramToggleBtn.className = "code-copy-btn";
        diagramToggleBtn.textContent = "Code";
        diagramToggleBtn.setAttribute("aria-label", "Показать код");
        diagramToggleBtn.title = "Показать код";
        diagramToggleBtn.style.right = "0.5rem"; // Use same offset as usual since there is no copy button here
        
        diagramWrapper.appendChild(diagramToggleBtn);
        
        const div = document.createElement("div");
        div.className = "mermaid";
        div.textContent = el.textContent;
        div.id = `mermaid-${index}`;
        diagramWrapper.appendChild(div);
        
        const codeWrapper = document.createElement("div");
        codeWrapper.className = "code-block-container mermaid-code-wrapper"; // reuse styles
        codeWrapper.style.display = "none";
        
        codeWrapper.appendChild(nodeToWrap);
        
        // Add the toggle back button
        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.className = "code-copy-btn";
        toggleBtn.textContent = "Diagram";
        toggleBtn.setAttribute("aria-label", "Back to diagram");
        toggleBtn.title = "Back to diagram";
        toggleBtn.style.right = "3.5rem"; // Offset from copy button
        
        // Add a copy button since we skipped it in enhanceCodeBlocks
        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "code-copy-btn";
        copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" /></svg>`;
        copyBtn.setAttribute("aria-label", "Скопировать код");
        copyBtn.title = "Скопировать";
        
        copyBtn.addEventListener("click", async () => {
          const codeText = pre.innerText.trimEnd();
          try {
            await navigator.clipboard.writeText(codeText);
            copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`;
            copyBtn.classList.add("copied");
            window.setTimeout(() => {
              copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" /></svg>`;
              copyBtn.classList.remove("copied");
            }, 2000);
          } catch (_) {}
        });
        
        codeWrapper.appendChild(toggleBtn);
        codeWrapper.appendChild(copyBtn);
        
        toggleWrapper.appendChild(diagramWrapper);
        toggleWrapper.appendChild(codeWrapper);

        diagramWrapper.addEventListener("click", () => {
          diagramWrapper.style.display = "none";
          codeWrapper.style.display = "block";
        });

        toggleBtn.addEventListener("click", () => {
          codeWrapper.style.display = "none";
          diagramWrapper.style.display = "flex";
        });
      });

      await mermaid.run({ querySelector: ".mermaid" });
    } catch (err) {
      console.error("Failed to render Mermaid diagrams", err);
    }
  };

  renderMermaid();
})();

(() => {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const surfaceSelect = document.getElementById("surface-select");
  const chromaLight = document.getElementById("chroma-light");
  const chromaDark = document.getElementById("chroma-dark");

  const SURFACES = {
    light: [
      { value: "paper", label: "Paper" },
      { value: "warm", label: "Warm" },
      { value: "mist", label: "Mist" }
    ],
    dark: [
      { value: "slate", label: "Slate" },
      { value: "graphite", label: "Graphite" },
      { value: "midnight", label: "Midnight" },
      { value: "oled", label: "OLED" }
    ]
  };

  const storedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (systemDark ? "dark" : "light");
  root.dataset.theme = initialTheme;

  const getSurfaceKey = (theme) => `surface_${theme}`;

  const applySurfaceForTheme = (theme) => {
    const available = SURFACES[theme];
    const fallback = available[0].value;
    const stored = localStorage.getItem(getSurfaceKey(theme));
    const selected = available.some((item) => item.value === stored) ? stored : fallback;

    if (surfaceSelect) {
      surfaceSelect.innerHTML = available
        .map((item) => `<option value="${item.value}">${item.label}</option>`)
        .join("");
      surfaceSelect.value = selected;
    }

    root.dataset.surface = selected;
    localStorage.setItem(getSurfaceKey(theme), selected);
  };

  const applyThemeUi = (theme) => {
    root.dataset.theme = theme;
    if (chromaLight && chromaDark) {
      const isDark = theme === "dark";
      chromaDark.disabled = !isDark;
      chromaLight.disabled = isDark;
    }
    if (btn) {
      btn.textContent = theme === "dark" ? "Dark" : "Light";
    }
    applySurfaceForTheme(theme);
  };

  const copyToClipboard = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const enhanceCodeBlocks = () => {
    const blocks = document.querySelectorAll(".highlight");

    blocks.forEach((block) => {
      if (block.querySelector(".code-copy-btn")) return;

      const codeElement = block.querySelector("pre code");
      if (!codeElement) return;

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "code-copy-btn";
      copyBtn.textContent = "Copy";
      copyBtn.setAttribute("aria-label", "Скопировать код");

      copyBtn.addEventListener("click", async () => {
        try {
          await copyToClipboard(codeElement.innerText.trimEnd());
          copyBtn.textContent = "Copied";
          copyBtn.classList.add("copied");
          window.setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
          }, 1500);
        } catch (_) {
          copyBtn.textContent = "Error";
          window.setTimeout(() => {
            copyBtn.textContent = "Copy";
          }, 1500);
        }
      });

      block.appendChild(copyBtn);
    });
  };

  const enhanceExplorerSearch = () => {
    const explorers = document.querySelectorAll(".fs-explorer");

    explorers.forEach((explorer, explorerIndex) => {
      const search = explorer.querySelector(".fs-search");
      const sort = explorer.querySelector(".fs-sort");
      const rootNode = explorer.querySelector(".fs-tree > li");
      const empty = explorer.querySelector(".fs-empty");
      if (!search || !rootNode) return;
      const sortKey = "explorer_sort";
      const collapsedKey = `explorer_collapsed_${explorerIndex}`;

      let collapsedState = {};
      try {
        collapsedState = JSON.parse(localStorage.getItem(collapsedKey) || "{}");
      } catch (_) {
        collapsedState = {};
      }

      const sectionNodes = Array.from(explorer.querySelectorAll(".fs-section"));

      const persistCollapsed = () => {
        localStorage.setItem(collapsedKey, JSON.stringify(collapsedState));
      };

      const getOwnLabel = (node) => {
        const own = node.querySelector(":scope > .fs-folder, :scope > .fs-folder-link, :scope > .fs-file-link");
        return own ? own.textContent.trim().toLowerCase() : "";
      };

      const filterNode = (node, query) => {
        const children = node.querySelectorAll(":scope > ul > li");
        let childVisible = false;
        children.forEach((child) => {
          if (filterNode(child, query)) childVisible = true;
        });

        const ownMatch = query.length === 0 || getOwnLabel(node).includes(query);
        const visible = query.length === 0 || ownMatch || childVisible;
        node.hidden = !visible;
        return visible;
      };

      const syncSectionCollapseUi = (query) => {
        const hasQuery = query.length > 0;
        sectionNodes.forEach((section) => {
          const sectionId = section.dataset.section || "";
          const files = section.querySelector(":scope > .fs-files");
          const toggle = section.querySelector(":scope > .fs-toggle");
          const collapsed = Boolean(collapsedState[sectionId]);
          const shouldCollapse = collapsed && !hasQuery;

          if (files) files.hidden = shouldCollapse;
          section.classList.toggle("is-collapsed", shouldCollapse);

          if (toggle) {
            toggle.textContent = shouldCollapse ? "▸" : "▾";
            toggle.setAttribute("aria-expanded", String(!shouldCollapse));
          }
        });
      };

      const runFilter = () => {
        const query = search.value.trim().toLowerCase();
        const hasMatches = filterNode(rootNode, query);
        if (empty) empty.hidden = hasMatches;
        syncSectionCollapseUi(query);
      };

      const sortDirectoryFiles = (mode) => {
        const fileLists = explorer.querySelectorAll(".fs-files");
        fileLists.forEach((list) => {
          const items = Array.from(list.querySelectorAll(":scope > .fs-file-item"));
          items.sort((a, b) => {
            if (mode === "name_asc") {
              return (a.dataset.name || "").localeCompare(b.dataset.name || "", "ru");
            }

            const dateA = Number(a.dataset.date || 0);
            const dateB = Number(b.dataset.date || 0);
            if (dateA === dateB) {
              return (a.dataset.name || "").localeCompare(b.dataset.name || "", "ru");
            }
            return dateB - dateA;
          });

          items.forEach((item) => list.appendChild(item));
        });
      };

      sectionNodes.forEach((section) => {
        const sectionId = section.dataset.section || "";
        if (!(sectionId in collapsedState)) {
          collapsedState[sectionId] = false;
        }

        const toggle = section.querySelector(":scope > .fs-toggle");
        if (!toggle) return;

        toggle.addEventListener("click", () => {
          collapsedState[sectionId] = !Boolean(collapsedState[sectionId]);
          persistCollapsed();
          runFilter();
        });
      });

      if (sort) {
        const storedSort = localStorage.getItem(sortKey);
        const initialSort = storedSort === "name_asc" ? "name_asc" : "date_desc";
        sort.value = initialSort;
        sortDirectoryFiles(initialSort);

        sort.addEventListener("change", () => {
          const mode = sort.value === "name_asc" ? "name_asc" : "date_desc";
          localStorage.setItem(sortKey, mode);
          sortDirectoryFiles(mode);
          runFilter();
        });
      }

      search.addEventListener("input", runFilter);
      runFilter();
    });
  };

  applyThemeUi(initialTheme);
  enhanceCodeBlocks();
  enhanceExplorerSearch();

  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyThemeUi(next);
    });
  }

  if (surfaceSelect) {
    surfaceSelect.addEventListener("change", (event) => {
      const activeTheme = root.dataset.theme === "dark" ? "dark" : "light";
      const selected = event.target.value;
      localStorage.setItem(getSurfaceKey(activeTheme), selected);
      root.dataset.surface = selected;
    });
  }
})();

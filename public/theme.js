(() => {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const chromaLight = document.getElementById("chroma-light");
  const chromaDark = document.getElementById("chroma-dark");
  const fontDecrease = document.getElementById("font-size-decrease");
  const fontIncrease = document.getElementById("font-size-increase");
  const navMenuBtn = document.getElementById("nav-menu-btn");
  const layoutSidebar = document.getElementById("layout-sidebar");

  const FONT_SIZES = ["s", "m", "l"];
  const getFontSize = () => (root.dataset.fontSize === "s" || root.dataset.fontSize === "l" ? root.dataset.fontSize : "m");
  const setFontSize = (v) => {
    root.dataset.fontSize = v;
    try {
      localStorage.setItem("fontSize", v);
    } catch (_) {}
  };

  const storedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (systemDark ? "dark" : "light");
  root.dataset.theme = initialTheme;

  if (!root.dataset.fontSize) {
    try {
      const stored = localStorage.getItem("fontSize");
      root.dataset.fontSize = FONT_SIZES.includes(stored) ? stored : "m";
    } catch (_) {
      root.dataset.fontSize = "m";
    }
  }

  const applyThemeUi = (theme) => {
    root.dataset.theme = theme;
    if (chromaLight && chromaDark) {
      const isDark = theme === "dark";
      chromaDark.disabled = !isDark;
      chromaLight.disabled = isDark;
    }
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
      const rootNode = explorer.querySelector(".fs-tree");
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
        const children = node.tagName === 'UL'
          ? node.querySelectorAll(":scope > li")
          : node.querySelectorAll(":scope > ul > li");
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
          const toggle = section.querySelector(".fs-toggle");
          const collapsed = Boolean(collapsedState[sectionId]);
          const shouldCollapse = collapsed && !hasQuery;

          if (files) files.hidden = shouldCollapse;
          section.classList.toggle("is-collapsed", shouldCollapse);

          if (toggle) {
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
          const items = Array.from(list.children).filter((el) => el.classList.contains("fs-file-item"));
          if (items.length === 0) return;
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

        const toggle = section.querySelector(".fs-toggle");
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

  /* Подсветка текущего файла/папки в сайдбаре как в VS Code */
  const sidebar = document.getElementById("layout-sidebar");
  if (sidebar) {
    const pathname = window.location.pathname.replace(/\/$/, "") || "/";
    sidebar.querySelectorAll(".fs-file-link, .fs-folder-link").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const linkPath = href.replace(/\/$/, "") || "/";
      const isFolder = link.classList.contains("fs-folder-link");
      const isActive = isFolder ? pathname === linkPath || pathname.startsWith(linkPath + "/") : pathname === linkPath;
      if (isActive) link.classList.add("is-active");
    });
  }

  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyThemeUi(next);
    });
  }

  if (fontDecrease) {
    fontDecrease.addEventListener("click", () => {
      const cur = getFontSize();
      const idx = FONT_SIZES.indexOf(cur);
      if (idx <= 0) return;
      setFontSize(FONT_SIZES[idx - 1]);
    });
  }
  if (fontIncrease) {
    fontIncrease.addEventListener("click", () => {
      const cur = getFontSize();
      const idx = FONT_SIZES.indexOf(cur);
      if (idx >= FONT_SIZES.length - 1) return;
      setFontSize(FONT_SIZES[idx + 1]);
    });
  }

  const closeNavMenu = () => {
    document.body.classList.remove("nav-open");
    if (navMenuBtn) navMenuBtn.setAttribute("aria-expanded", "false");
  };

  const openNavMenu = () => {
    document.body.classList.add("nav-open");
    if (navMenuBtn) navMenuBtn.setAttribute("aria-expanded", "true");
  };

  if (navMenuBtn) {
    navMenuBtn.addEventListener("click", () => {
      const isOpen = document.body.classList.contains("nav-open");
      if (isOpen) closeNavMenu();
      else openNavMenu();
    });
  }

  if (layoutSidebar) {
    const navLinks = layoutSidebar.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", closeNavMenu);
    });
  }

  document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("nav-open")) return;
    const sidebar = document.getElementById("layout-sidebar");
    const btn = document.getElementById("nav-menu-btn");
    if (sidebar && btn && !sidebar.contains(e.target) && !btn.contains(e.target)) {
      closeNavMenu();
    }
  });

})();

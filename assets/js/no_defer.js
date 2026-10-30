// Keep the site theme strictly two-state: light or dark.
determineThemeSetting = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  const prefersDark = typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

toggleThemeSetting = () => {
  const nextTheme = determineComputedTheme() === "dark" ? "light" : "dark";
  setThemeSetting(nextTheme);
};

// Convert an existing `system` preference to its current concrete theme.
setThemeSetting(determineThemeSetting());

document.addEventListener("DOMContentLoaded", () => {
  const compatBootstrap = Boolean(window.alFolio && window.alFolio.compatBootstrap);
  const computedTheme =
    typeof window.determineComputedTheme === "function" ? window.determineComputedTheme() : document.documentElement.dataset.theme || "light";

  document.querySelectorAll("table").forEach((table) => {
    if (computedTheme === "dark") {
      table.classList.add("table-dark");
    } else {
      table.classList.remove("table-dark");
    }

    const insideExcludedParent =
      table.closest('[class*="news"]') ||
      table.closest('[class*="card"]') ||
      table.closest('[class*="archive"]') ||
      table.closest("pre") ||
      table.closest("code");

    if (!insideExcludedParent) {
      table.classList.add("table", "table-hover");
      table.parentElement?.classList.add("table-responsive");

      if (compatBootstrap) {
        table.setAttribute("data-toggle", "table");
      }
    }
  });
});

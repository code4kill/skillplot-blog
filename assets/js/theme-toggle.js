// Theme toggle script
const themeToggle = document.getElementById("theme-toggle");
const themeIconDark = document.getElementById("theme-icon-dark");
const themeIconLight = document.getElementById("theme-icon-light");
const html = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIconDark.classList.remove("hidden");
    themeIconLight.classList.add("hidden");
  } else {
    themeIconDark.classList.add("hidden");
    themeIconLight.classList.remove("hidden");
  }
}

// Respect system preference if no saved theme
if (!localStorage.getItem("theme")) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = prefersDark ? "dark" : "light";
  html.setAttribute("data-theme", theme);
  updateThemeIcon(theme);
}

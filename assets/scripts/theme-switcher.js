const userPrefers = getComputedStyle(document.documentElement).getPropertyValue("content");

if (theme === "dark") {
  document.querySelector("#theme-toggle").textContent = "Light Mode";
}
else if (theme === "light") {
  document.querySelector("#theme-toggle").textContent = "Dark Mode";
}
else if (userPrefers === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  window.localStorage.setItem("theme", "dark");
  document.querySelector("#theme-toggle").textContent = "Light Mode";
} else {
  document.documentElement.setAttribute("data-theme", "light");
  window.localStorage.setItem("theme", "light");
  document.querySelector("#theme-toggle").textContent = "Dark Mode";
}

function modeSwitcher() {
  let currentMode = document.documentElement.getAttribute("data-theme");

  if (currentMode === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    window.localStorage.setItem("theme", "light");
    document.querySelector("#theme-toggle").textContent = "Dark Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.setItem("theme", "dark");
    document.querySelector("#theme-toggle").textContent = "Light Mode";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  function switchToDarkMode() {
    document.documentElement.setAttribute("data-theme", "dark")
    window.localStorage.setItem("theme", "dark")
    document.querySelector("#theme-toggle").textContent = "Light Mode"
  }

  function switchToLightMode() {
    document.documentElement.setAttribute("data-theme", "light")
    window.localStorage.setItem("theme", "light")
    document.querySelector("#theme-toggle").textContent = "Dark Mode"
  }

  function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute("data-theme")

    if (currentMode === "dark") {
      switchToLightMode()
    }
    else {
      switchToDarkMode()
    }
  }

  function setInitialColorMode() {
    // if theme is set that means the user has made a concious decision regarding the color mode
    if (theme === "dark") {
      return switchToDarkMode();
    }

    if (theme === "light") {
      return switchToLightMode()
    }

    const userPreference = getComputedStyle(document.documentElement).getPropertyValue("content")

    if (userPreference === "dark") {
      return switchToDarkMode()
    }

    return switchToLightMode()
  }

  setInitialColorMode()

  const themeToggleTrigger = document.querySelector("#theme-toggle")
  if (themeToggleTrigger) {
    themeToggleTrigger.addEventListener("click", modeSwitcher)
  }
})

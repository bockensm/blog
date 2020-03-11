document.addEventListener("DOMContentLoaded", () => {
  function setThemeModeText(text) {
    const themeToggleTriggers = document.querySelectorAll(".theme-toggle")
    themeToggleTriggers.forEach(trigger => {
      trigger.textContent = text
    })
  }

  function switchToDarkMode() {
    document.documentElement.setAttribute("data-theme", "dark")
    window.localStorage.setItem("theme", "dark")
    setThemeModeText("Light Mode")
  }

  function switchToLightMode() {
    document.documentElement.setAttribute("data-theme", "light")
    window.localStorage.setItem("theme", "light")
    setThemeModeText("Dark Mode")
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

  const themeToggleTriggers = document.querySelectorAll(".theme-toggle")
  themeToggleTriggers.forEach(trigger => {
    trigger.addEventListener("click", modeSwitcher)
  })
})

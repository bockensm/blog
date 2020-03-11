(function() {
	const hamburger = {
		navToggle: document.querySelector(".nav-toggle"),
		nav: document.querySelector("nav"),

		doToggle: e => {
      e.preventDefault()

      document.querySelector("body").classList.toggle("menu-open")
		}
	}

	hamburger.navToggle.addEventListener("click", e => {
    hamburger.doToggle(e)
  })

  hamburger.nav.addEventListener("click", e => {
    hamburger.doToggle(e)
  })
}())

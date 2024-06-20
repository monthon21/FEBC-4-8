function changeElement() {
      let titleElement = document.getElementById('title')
      if (titleElement.classList.contains("hidden")) {
            titleElement.classList.remove("hidden")
      } else {
            titleElement.classList.add("hidden")
      }
}
const allRecordButtons = document.querySelectorAll(".record button")

function handleButtonClick(event) {
  const el = event.target
  const isSaved = el.getAttribute("data-saved")

  if (isSaved) {
    el.removeAttribute("data-saved")
    el.innerText = "Merken"
  } else {
    el.setAttribute("data-saved", true)
    el.innerText = "Gemerkt ✔️"
  }
}

function setYear() {
  const yearPlaceholder = document.querySelector(".current-year")
  yearPlaceholder.innerText = new Date().getFullYear()
}

setYear()

allRecordButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick)
})

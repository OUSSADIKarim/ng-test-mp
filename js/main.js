const menu = document.querySelector(".menu")
const menuBar = document.querySelector(".nav")
const close = document.querySelector(".close")

menu.addEventListener("click", () => {
    menuBar.classList.remove("hide")
    menuBar.classList.add("visible")
})

close.addEventListener("click", () => {
    menuBar.classList.add("hide")
})
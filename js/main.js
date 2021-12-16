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


let current = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].id = 'current';
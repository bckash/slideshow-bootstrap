
const
    menuItem1 = document.getElementById("mi1"),
    menuItem2 = document.getElementById("mi2"),
    slideshowContainer = document.getElementById("carouselExampleIndicators")

menuItem2.addEventListener("click", visHide)
menuItem1.addEventListener("click", visShow)

function visHide () {
    slideshowContainer.style.display = "none"
}

function visShow () {
    slideshowContainer.style.display = "block"
}
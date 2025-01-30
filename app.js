const circle = document.querySelector(".circle")
const slider = document.querySelector(".slider")
const list = document.querySelector(".list")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const items = document.querySelectorAll(".item");
let count = items.length;
let active = 1;
let leftTransform = 0;
let widthItem = items[active].offsetWidth;

next.onclick = () => {
    active = active >= count - 1 ?
        count - 1 : active + 1;
    runCarousel();
}

prev.onclick = () => {
    active = active <= 0 ?
        0 : active - 1;
    runCarousel();
}

function runCarousel() {
    prev.style.display = active == 0 ?
        "none" : "block";

    next.style.display = active == count - 1 ? "none" : "block";

    const oldActive = document.querySelector(".item.active");

    if (oldActive) oldActive.classList.remove("active");

    items[active].classList.add("active");
    leftTransform = widthItem * (active - 1) * -1;
    list.style.transform = `translateX(${leftTransform}px)`
}
runCarousel();

const textCircle = circle.innerText.split("");
circle.innerText = "";

textCircle.forEach((letter, index) => {
    const newSpan = document.createElement("span");
    newSpan.innerText = letter;

    const rotateThisSpan = (360 / textCircle.length) * index;

    newSpan.style.setProperty("--rotate", rotateThisSpan + "deg");

    circle.appendChild(newSpan);
});
const carousel = document.querySelector(".rec-courses-holder");
const arrowBtns = document.querySelectorAll(".rec-courses i");
const firstCardwidth = carousel.querySelector(".course").offsetWidth;
const isMobile = window.matchMedia("(max-width: 800px)").matches;
let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardwidth : firstCardwidth;
    })
})

if (isMobile) {

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
}

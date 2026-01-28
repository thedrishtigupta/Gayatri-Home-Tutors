const images = document.querySelectorAll(".hero-img");
const dots = document.querySelectorAll(".hero-scroll-circle");


let current = 0;


function updateSlider(index) {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));


    images[index].classList.add("active");
    dots[index].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        current = index;
        updateSlider(current);
    });
});



setInterval(() => {
    current = (current + 1) % images.length;
    updateSlider(current);
}, 3000);
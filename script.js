const leftMenu = () => {
    // targetting the entire menu-links element
    const left = document.querySelector(".menu-links1");

    // adds or removes that open class 
    left.classList.toggle("open");
}
const rightMenu = () => {
    const right = document.querySelector(".menu-links2");

    right.classList.toggle("open");
}




// the start of the slideshow. Sets everything up. Basically default.
const initializeSlider = () => {
    if(slides.length > 0) {
        // call class from css when called
        slides[slideIndex].classList.add("displaySlide");
        // after 5 seconds go to next slide
        intervalId = setInterval(nextSlide, 5000);
    }
}


const showSlide = (index) => {

    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

const prevSlide = () => {
    slideIndex--;
    showSlide(slideIndex);
}

const nextSlide = () => {
    // increment slide Index by 1 when button clicked
    slideIndex++;
    showSlide(slideIndex);
}

// MAIN 
// node list of all images
const slides = document.querySelectorAll(".slides img");
// start at first image 
let slideIndex = 0;
// will be equal to an id. set to null for now
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider());
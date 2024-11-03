function redirectInicio() {
    window.location.href = "../index.html";
}

function redirectSemestreI_II() {
    window.location.href = "../SemestreI_II";
}

function redirectSemestreIII() {
    window.location.href = "../SemestreIII";
}
/*codigo carrusel*/
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrusel-item');
    const totalSlides = slides.length;
    
    currentIndex += direction;
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    
    const carouselSlide = document.querySelector('.carrusel-slide');
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
}
/*codigo carrusel*/

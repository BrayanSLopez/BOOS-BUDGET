function redirectInicio() {
    window.location.href = "./index.html";
}

function redirectSemestreI_II() {
    window.location.href = "./SemestreI_II.html";
}

function redirectSemestreIII() {
    window.location.href = "./SemestreIII.html";
}
/*codigo carrusel*/
let currentIndices = {
    'carrusel-1': 0,
    'carrusel-2': 0
};

function moveSlide(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const slideClass = carouselId === 'carrusel-2' ? '.carrusel-item-2' : '.carrusel-item';
    const slides = carousel.querySelectorAll(slideClass);
    const totalSlides = slides.length;
    
    currentIndices[carouselId] += direction;
    
    if (currentIndices[carouselId] >= totalSlides) {
        currentIndices[carouselId] = 0;
    }
    if (currentIndices[carouselId] < 0) {
        currentIndices[carouselId] = totalSlides - 1;
    }
    
    const carouselSlide = carousel.querySelector('.carrusel-slide');
    carouselSlide.style.transform = `translateX(-${currentIndices[carouselId] * 100}%)`;
}
/*codigo carrusel*/

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.getElementById('navMenu').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    if (!nav.contains(e.target)) {
        document.getElementById('navMenu').classList.remove('active');
    }
});

// Gallery Slider
let currentSlideIndex = 0;

function changeSlide(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n >= slides.length) { currentSlideIndex = 0; }
    if (n < 0) { currentSlideIndex = slides.length - 1; }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Home Gallery Slider
let currentHomeSlideIndex = 0;

function changeHomeSlide(n) {
    showHomeSlide(currentHomeSlideIndex += n);
}

function currentHomeSlide(n) {
    showHomeSlide(currentHomeSlideIndex = n);
}

function showHomeSlide(n) {
    const slides = document.querySelectorAll('.home-slide');
    const dots = document.querySelectorAll('.home-dot');

    if (n >= slides.length) { currentHomeSlideIndex = 0; }
    if (n < 0) { currentHomeSlideIndex = slides.length - 1; }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentHomeSlideIndex].classList.add('active');
    dots[currentHomeSlideIndex].classList.add('active');
}

// Work Gallery Slider
let currentWorkSlideIndex = 0;

function changeWorkSlide(n) {
    showWorkSlide(currentWorkSlideIndex += n);
}

function currentWorkSlide(n) {
    showWorkSlide(currentWorkSlideIndex = n);
}

function showWorkSlide(n) {
    const slides = document.querySelectorAll('.work-slide');
    const dots = document.querySelectorAll('.work-dot');

    if (n >= slides.length) { currentWorkSlideIndex = 0; }
    if (n < 0) { currentWorkSlideIndex = slides.length - 1; }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentWorkSlideIndex].classList.add('active');
    dots[currentWorkSlideIndex].classList.add('active');
}

let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slides').length;

    function updateSlider() {
        const slider = document.getElementById('slider-card');
        const slideWidth = document.querySelector('.slides').offsetWidth;
        slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
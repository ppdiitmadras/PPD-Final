document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll('.animate-card');

    if (window.innerWidth > 1024) {
        console.log("on PC/Tablet");
        window.addEventListener('scroll', function () {
            elements.forEach(function (element) {
                if (isElementInViewport(element)) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        });
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= -100 &&
                rect.left >= -50 &&
                rect.bottom <= (window.innerHeight + 250 || document.documentElement.clientHeight + 250) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }
    else {
        console.log("On Mobile");
        var all_elem = document.querySelectorAll(".card-temp");
        all_elem.forEach(function (element) {
            element.classList.remove("even");
        });

        window.addEventListener('scroll', function () {
            elements.forEach(function (element) {
                if (isElementInViewport(element)) {
                    element.classList.add('visible');
                } else {

                    element.classList.remove('visible');
                }
            });
        });
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= -150 &&
                // rect.left >= 0 &&
                rect.bottom <= (window.innerHeight + 250 || document.documentElement.clientHeight + 250)
                // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }

});
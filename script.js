const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonials = document.querySelectorAll('.testimonial');
const step = testimonials[0].offsetWidth;
let currentPosition = 0;

function scrollTestimonials(direction) {
    currentPosition += step * direction * 1;
    if (currentPosition > testimonialsContainer.scrollWidth - testimonialsContainer.offsetWidth) {
        currentPosition = 0;
    } else if (currentPosition < 0) {
        currentPosition = testimonialsContainer.scrollWidth - testimonialsContainer.offsetWidth;
    }
    testimonialsContainer.scrollTo({
        left: currentPosition,
        behavior: 'smooth'
    });
}


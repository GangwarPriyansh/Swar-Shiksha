// Add this function to scroll to the right when "More" is clicked
function scrollRight(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollLeft += 400; // Adjust the scroll distance as needed
}


// new //

// JavaScript for adding animations

// Function to animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate'); // Elements to animate

    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
            element.classList.add('fadeIn'); // Apply animation class
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', animateOnScroll);


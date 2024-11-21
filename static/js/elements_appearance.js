document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case elements are already in view
});
document.addEventListener("DOMContentLoaded", () => {
    let sections = document.querySelectorAll(".fade-in-effect");
    
    function revealSections() {
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].offsetTop < window.scrollY + window.innerHeight * 0.8) {
                sections[i].classList.add("visible");
            }
        }
    }
    
    window.addEventListener("scroll", revealSections);
    revealSections();
});
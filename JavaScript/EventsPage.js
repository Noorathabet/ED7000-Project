document.addEventListener("DOMContentLoaded", () => {
    // Counter functionality
    const counters = document.querySelectorAll(".counter");
    const options = {
        threshold: 0.5
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute("data-target");
                let count = 0;
                const increment = target / 100;

                const updateCounter = () => {
                    if (count < target) {
                        count += increment;
                        counter.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    counters.forEach(counter => observer.observe(counter));

    // Registration functionality
    document.querySelectorAll('.register-btn').forEach(button => {
        button.addEventListener('click', function() {
            const form = this.nextElementSibling; // Get the form next to the button
            form.style.display = form.style.display === 'flex' ? 'none' : 'flex'; // Toggle form visibility
        });
    });

    document.querySelectorAll('.registration-form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            const confirmationMessage = this.nextElementSibling; // Get the confirmation message
            confirmationMessage.style.display = 'block'; // Show confirmation message
            this.style.display = 'none'; // Hide the form
        });
    });
});
// ===== Mobile Menu Toggle =====
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks")?.querySelector("ul");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });

        document.querySelectorAll("#navLinks a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
            });
        });
    }

    // ===== Ripple Effect =====
    document.querySelectorAll(".ripple").forEach(btn => {
        btn.addEventListener("click", function (e) {
            let ripple = document.createElement("span");
            ripple.classList.add("ripple-effect");
            this.appendChild(ripple);

            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});


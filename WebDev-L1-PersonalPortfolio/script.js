document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id]");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const revealItems = document.querySelectorAll(".reveal");
    const contactForm = document.querySelector(".contact-form");
    const year = document.getElementById("year");

    // Current year
    if (year) year.textContent = new Date().getFullYear();

    // Mobile menu
    menuBtn?.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    // Close mobile menu after clicking a link
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtn?.setAttribute("aria-expanded", "false");
            if (menuBtn) {
                menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    });

    // Header appearance on scroll
    const updateHeader = () => {
        header?.classList.toggle("scrolled", window.scrollY > 30);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    // Active navigation link
    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navItems.forEach(link => link.classList.remove("active"));
                    const active = document.querySelector(
                        `.nav-link[href="#${entry.target.id}"]`
                    );
                    active?.classList.add("active");
                }
            });
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0
        }
    );

    sections.forEach(section => sectionObserver.observe(section));

    // Project filters
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            projectCards.forEach(card => {
                const category = card.dataset.category;
                const shouldShow = filter === "all" || category === filter;

                card.classList.toggle("hidden", !shouldShow);
            });
        });
    });

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealItems.forEach(item => revealObserver.observe(item));

    // Contact form demo
    contactForm?.addEventListener("submit", event => {
        event.preventDefault();

        const button = contactForm.querySelector("button");
        if (!button) return;

        const original = button.innerHTML;
        button.innerHTML = 'Message Ready <i class="fa-solid fa-check"></i>';

        setTimeout(() => {
            button.innerHTML = original;
            contactForm.reset();
        }, 1800);
    });
});

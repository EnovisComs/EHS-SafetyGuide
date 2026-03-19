document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(Draggable, ScrollTrigger, SplitText, DrawSVGPlugin);

    /* ============================================================
       UTILS
    ============================================================ */
    const isDesktop = () => window.innerWidth >= 1024;


    /* ============================================================
       MENÚ HAMBURGUESA
    ============================================================ */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const lines = hamburger.querySelectorAll(".line");
    const navLinks = navMenu.querySelectorAll(".nav-link");

    gsap.set(navMenu, { yPercent: -100, opacity: 0, pointerEvents: "none" });

    navLinks.forEach(link => {
        new SplitText(link, { type: "lines", linesClass: "menu-line" });
    });

    const menuTl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
        onStart: () => {
            document.body.style.overflow = "hidden";
            hamburger.setAttribute("aria-expanded", "true");
        },
        onReverseComplete: () => {
            document.body.style.overflow = "";
            hamburger.setAttribute("aria-expanded", "false");
            gsap.set(navMenu, { pointerEvents: "none" });
        }
    });

    menuTl
        .to(lines[0], { y: 10.5, rotation: 45, duration: 0.3 }, 0)
        .to(lines[1], { opacity: 0, duration: 0.2 }, 0)
        .to(lines[2], { y: -10.5, rotation: -45, duration: 0.3 }, 0)
        .to(navMenu, { yPercent: 0, opacity: 1, pointerEvents: "auto", duration: 0.45 }, 0)
        .from(".menu-line", {
            y: 30, opacity: 0, stagger: 0.08, duration: 0.45, ease: "circ.out"
        }, 0.25);

    hamburger.addEventListener("click", () => {
        menuTl.reversed() ? menuTl.play() : menuTl.reverse();
    });

    navLinks.forEach(link => link.addEventListener("click", () => menuTl.reverse()));

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") menuTl.reverse();
    });

    document.querySelectorAll(".menu-line").forEach(line => {
        const quickY = gsap.quickTo(line, "y", { duration: 0.25, ease: "circ.out" });
        line.addEventListener("mouseenter", () => quickY(-6));
        line.addEventListener("mouseleave", () => quickY(0));
    });


    /* ============================================================
       DRAGGABLE
    ============================================================ */
    Draggable.create(".draggable", {
        type: "x,y",
        inertia: true,
        bounds: ".hero",
        onPress() { this.target.style.zIndex = 10; },
        onRelease() { this.target.style.zIndex = ""; }
    });


    /* ============================================================
       HERO — entrada
    ============================================================ */
    gsap.timeline()
        .to(".hero-title, .hero-subtitle", {
            opacity: 1, y: 0, duration: 1, ease: "power3.out"
        })
        .from(".helmet", { x: -60, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".shield", { x: 60, opacity: 0, duration: 0.8 }, "-=0.6");


    /* ============================================================
       INTRO — scroll word reveal
    ============================================================ */
    const introSection = document.querySelector(".section-intro");
    const introWords   = gsap.utils.toArray(".intro-word");
    const totalWords   = introWords.length;

    if (introSection) {
        introSection.style.height = `${Math.max(250, totalWords * 18)}vh`;
    }

    ScrollTrigger.create({
        trigger: introSection,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate(self) {
            const litCount = Math.round(self.progress * totalWords);
            introWords.forEach((word, i) => {
                word.classList.toggle("is-lit", i < litCount);
            });
        }
    });


    /* ============================================================
       NORMAS — HEADING con video (aparece a los 12 s)
    ============================================================ */
    const visualTitle = document.querySelector(".visual-title");

    if (visualTitle) {
        const splitTitle = new SplitText(visualTitle, { type: "words" });
        gsap.set(splitTitle.words, { y: 100, opacity: 0 });
        gsap.set(visualTitle, { opacity: 1 }); // el wrapper ya es visible; las palabras no

        let timerStarted = false;

        ScrollTrigger.create({
            trigger: ".visual-title-wrapper",
            start: "top 90%",
            onEnter: () => {
                if (timerStarted) return;
                timerStarted = true;

                setTimeout(() => {
                    gsap.to(splitTitle.words, {
                        y: 0,
                        opacity: 1,
                        duration: 0.75,
                        ease: "circ.out",
                        stagger: 0.06
                    });
                }, 1000);
            },
            onLeaveBack: () => {
                // Solo revierte si el timer ya disparó la animación
                gsap.to(splitTitle.words, {
                    y: 100,
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.in",
                    stagger: 0.02
                });
            }
        });
    }


    /* ============================================================
       NORMAS — tarjetas: título (SplitText) + lista (slide-up)
    ============================================================ */
    gsap.utils.toArray(".parallax-card").forEach(card => {
        const title = card.querySelector(".norms-title");
        const items = gsap.utils.toArray(card.querySelectorAll("li"));

        /* Título palabra a palabra */
        if (title) {
            const split = new SplitText(title, { type: "words" });
            gsap.set(split.words, { y: 70, opacity: 0 });

            ScrollTrigger.create({
                trigger: card,
                start: "top 80%",
                end:   "top 30%",
                toggleActions: "play none none reverse",
                onEnter: () => gsap.to(split.words, {
                    y: 0, opacity: 1, duration: 0.55,
                    ease: "circ.out", stagger: 0.04, overwrite: "auto"
                }),
                onLeaveBack: () => gsap.to(split.words, {
                    y: 70, opacity: 0, duration: 0.35,
                    ease: "power2.in", stagger: 0.02, overwrite: "auto"
                })
            });
        }

        /* Lista staggered */
        if (items.length) {
            gsap.set(items, { y: 30, opacity: 0 });

            ScrollTrigger.create({
                trigger: card,
                start: "top 75%",
                end:   "top 25%",
                toggleActions: "play none none reverse",
                onEnter: () => gsap.to(items, {
                    y: 0, opacity: 1, duration: 0.45,
                    ease: "power3.out", stagger: 0.07,
                    delay: 0.18, overwrite: "auto"
                }),
                onLeaveBack: () => gsap.to(items, {
                    y: 30, opacity: 0, duration: 0.25,
                    ease: "power2.in", stagger: 0.03, overwrite: "auto"
                })
            });
        }
    });


    /* ============================================================
       NORMAS — foto sticky desktop (crossfade entre visuals)
       Se inicializa solo en desktop y se re-monta en resize.
    ============================================================ */
    let desktopParallaxInit = false;

    const setupDesktopParallax = () => {
        // Matar triggers previos de esta sección para evitar duplicados
        ScrollTrigger.getAll()
            .filter(t => t._normsTrigger)
            .forEach(t => t.kill());

        const cards   = gsap.utils.toArray(".parallax-card");
        const visuals = gsap.utils.toArray(".visual");
        if (!visuals.length || !cards.length) return;

        // Primera foto visible, resto invisibles
        visuals.forEach((v, i) => {
            gsap.set(v, {
                opacity: i === 0 ? 1 : 0,
                scale:   i === 0 ? 1 : 1.04
            });
        });

        let currentIndex = 0;

        const goTo = (idx) => {
            if (idx === currentIndex) return;

            gsap.to(visuals[currentIndex], {
                opacity: 0, scale: 0.97,
                duration: 0.7, ease: "power2.inOut"
            });
            gsap.fromTo(visuals[idx],
                { opacity: 0, scale: 1.04 },
                { opacity: 1, scale: 1, duration: 0.7, ease: "power2.inOut" }
            );

            currentIndex = idx;
        };

        cards.forEach((card, idx) => {
            const st = ScrollTrigger.create({
                trigger: card,
                start: "top center",
                end:   "bottom center",
                onEnter:     () => goTo(idx),
                onEnterBack: () => goTo(idx)
            });
            st._normsTrigger = true; // marca para poder matarlos después
        });

        desktopParallaxInit = true;
    };

    const teardownDesktopParallax = () => {
        ScrollTrigger.getAll()
            .filter(t => t._normsTrigger)
            .forEach(t => t.kill());

        // En mobile todas las fotos invisibles (no se usan)
        gsap.utils.toArray(".visual").forEach(v => gsap.set(v, { opacity: 0, scale: 1 }));
        desktopParallaxInit = false;
    };

    // Inicialización según tamaño actual
    if (isDesktop()) {
        setupDesktopParallax();
    }

    // Resize: montar / desmontar según breakpoint
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
            if (isDesktop() && !desktopParallaxInit) {
                setupDesktopParallax();
            } else if (!isDesktop() && desktopParallaxInit) {
                teardownDesktopParallax();
            }
        }, 200);
    });


    /* ============================================================
       SEGURIDAD ES PRIMERO
    ============================================================ */
    gsap.from(".seguridad-image .cone", {
        scrollTrigger: { trigger: ".section-seguridad", start: "top 70%" },
        scale: 0, opacity: 0, stagger: 0.2, duration: 0.6, ease: "back.out(1.7)"
    });

    gsap.from(".seguridad-image", {
        scrollTrigger: { trigger: ".section-seguridad", start: "top 75%" },
        x: 80, opacity: 0, duration: 1, ease: "power3.out"
    });

    const seguridadTitle = document.querySelector(".seguridad-text h2");
    if (seguridadTitle) {
        const split = new SplitText(seguridadTitle, { type: "lines" });
        gsap.from(split.lines, {
            scrollTrigger: { trigger: ".section-seguridad", start: "top 75%", once: true },
            y: 80, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12
        });
    }


    /* ============================================================
       LINEAMIENTOS — MODALES
    ============================================================ */
    const openModal = (id) => {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.removeAttribute("hidden");
        requestAnimationFrame(() => modal.querySelector(".modal-box")?.focus?.());
        document.body.style.overflow = "hidden";
    };

    const closeModal = (modal) => {
        modal.setAttribute("hidden", "");
        document.body.style.overflow = "";
    };

    document.querySelectorAll("[data-modal]").forEach(btn => {
        btn.addEventListener("click", () => openModal(btn.dataset.modal));
    });

    document.querySelectorAll("[data-close-modal]").forEach(el => {
        el.addEventListener("click", () => {
            const modal = el.closest(".modal");
            if (modal) closeModal(modal);
        });
    });

    document.addEventListener("keydown", e => {
        if (e.key !== "Escape") return;
        document.querySelectorAll(".modal:not([hidden])").forEach(m => closeModal(m));
    });


    /* ============================================================
       EMERGENCIAS — ACORDEÓN
    ============================================================ */
    document.querySelectorAll(".emergencia-item").forEach(item => {
        const btn     = item.querySelector(".emergencia-header");
        const content = item.querySelector(".emergencia-content");
        const toggle  = item.querySelector(".emergencia-toggle");
        const fullH   = content.scrollHeight;

        gsap.set(content, { height: 0, overflow: "hidden" });
        item._open = false;

        btn.addEventListener("click", () => {
            // Cerrar los demás
            document.querySelectorAll(".emergencia-item").forEach(other => {
                if (other !== item && other._open) {
                    gsap.to(other.querySelector(".emergencia-content"), {
                        height: 0, duration: 0.4, ease: "power2.inOut"
                    });
                    gsap.to(other.querySelector(".emergencia-toggle"), {
                        rotation: 0, duration: 0.3, ease: "back.out(2)"
                    });
                    other.classList.remove("open");
                    other._open = false;
                    other.querySelector(".emergencia-header").setAttribute("aria-expanded", "false");
                }
            });

            if (!item._open) {
                gsap.to(content, { height: fullH, duration: 0.5, ease: "power3.out" });
                gsap.to(toggle,  { rotation: 45,   duration: 0.35, ease: "back.out(2)" });
                item.classList.add("open");
                btn.setAttribute("aria-expanded", "true");
            } else {
                gsap.to(content, { height: 0, duration: 0.4, ease: "power2.inOut" });
                gsap.to(toggle,  { rotation: 0,  duration: 0.3, ease: "back.out(2)" });
                item.classList.remove("open");
                btn.setAttribute("aria-expanded", "false");
            }

            item._open = !item._open;
        });
    });


    /* ============================================================
       MEDIO AMBIENTE — entrada
    ============================================================ */
    gsap.set(".planeta path", { drawSVG: "0%" });

    gsap.timeline({
        scrollTrigger: { trigger: ".section-ambiente", start: "top 70%", once: true }
    }).from(".ambiente-card", {
        y: 60, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.1
    });


    /* ============================================================
       DESCARGAS — entrada
    ============================================================ */
    gsap.from(".descarga-card", {
        scrollTrigger: { trigger: ".section-descargas", start: "top 80%", once: true },
        y: 40, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.15
    });


    /* ============================================================
       REFRESH SCROLLTRIGGER en resize
    ============================================================ */
    window.addEventListener("resize", () => ScrollTrigger.refresh());

});
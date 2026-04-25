window.addEventListener("load", () => {
  if (typeof gsap === "undefined") return;

  gsap.from("header", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(".hero", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".card", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.4,
    ease: "power2.out"
  });

  gsap.from(".link-card", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.4,
    ease: "power2.out"
  });

  gsap.from(".premium-link", {
    x: -25,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.6,
    ease: "power2.out"
  });
});
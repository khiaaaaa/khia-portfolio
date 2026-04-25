window.addEventListener("load", () => {

  // safety: make everything visible first
  if (typeof gsap !== "undefined") {
    gsap.set(".card, .premium-link, .link-card, .hero", {
      opacity: 1,
      visibility: "visible"
    });

    // header animation
    gsap.from("header", {
      y: -40,
      opacity: 0,
      duration: 0.8
    });

    // hero animation
    gsap.from(".hero", {
      y: 30,
      opacity: 0,
      duration: 0.9,
      delay: 0.2
    });

    // cards animation
    gsap.from(".card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.4
    });

    // links animation
    gsap.from(".premium-link", {
      x: -25,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.6
    });
  }

});
window.addEventListener("load", () => {
  if (typeof gsap === "undefined") return;

  gsap.set(".premium-link", {
    opacity: 1,
    visibility: "visible"
  });

  gsap.from("header", {
    y: -40,
    opacity: 0,
    duration: 0.8
  });

  gsap.from(".hero", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    delay: 0.2
  });

  gsap.from(".card, .link-card", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.4
  });
});
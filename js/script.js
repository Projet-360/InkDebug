gsap.registerPlugin(ScrollTrigger, EasePack);

gsap.config({force3D: false});

let tl = gsap.timeline({
  scrollTrigger: {
    start: 0,
    end: "max",
    scrub: 2
  }
});

gsap.utils.toArray("section").forEach((section, i) => {
  if (i) {
    tl.fromTo(section, {scale: 0}, {
      scale: 1,
      ease: "none" // or "expoScale(0.01, 1)" but that didn't seem quite as nice because it takes a while to become visible.
    }, "<") // completely overlap with the previous tween
  }
  tl.to(section, {
    scale: 200,
    ease: "expoScale(1, 200)"
  });
});
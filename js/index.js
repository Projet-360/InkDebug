gsap.registerPlugin(ScrollTrigger)
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function (e) {

        gsap.timeline({
                scrollTrigger: {
                    trigger: ".ink-a-js",
                    pin: true,
                    scrub: 1,
                    start: "top",
                    end: "bottom",
                    markers: true
                }
            })
            .fromTo(".ink-a-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 130,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 130)",
                force3D: false
            }, 0);

        gsap.timeline({
                scrollTrigger: {
                    trigger: ".ink-b-js",
                    pin: true,
                    scrub: 1,
                    start: "top",
                    end: "bottom",
                    markers: true
                }
            })
            .fromTo(".ink-b-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 130,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 130)",
                force3D: false
            }, 0);

        gsap.timeline({
                scrollTrigger: {
                    trigger: ".ink-c-js",
                    pin: true,
                    scrub: 1,
                    start: "top",
                    end: "bottom",
                    markers: true
                }
            })
            .fromTo(".ink-c-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 130,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 130)",
                force3D: false
            }, 0);

        gsap.timeline({
                scrollTrigger: {
                    trigger: ".ink-d-js",
                    pin: true,
                    scrub: 1,
                    start: "top",
                    end: "bottom",
                    markers: true
                }
            })
            .fromTo(".ink-d-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 130,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 130)",
                force3D: false
            }, 0);

        gsap.timeline({
                scrollTrigger: {
                    trigger: ".ink-e-js",
                    pin: true,
                    scrub: 1,
                    start: "top",
                    end: "bottom",
                    markers: true
                }
            })
            .fromTo(".ink-e-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 130,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 130)",
                force3D: false
            }, 0);

    });

})

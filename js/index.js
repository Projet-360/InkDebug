gsap.registerPlugin(ScrollTrigger)
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function (e) {

        const A = gsap.timeline({
            scrollTrigger: {
                trigger: ".ink-a-js",                    
                pin: true,
                scrub: .7,
                start: "top-=50%",
                end: "+=" + (window.innerHeight),
            }
        })
        
        const B = gsap.timeline({
            scrollTrigger: {
                trigger: ".ink-b-js",
                pin: true,
                scrub: .7,                    
                start: "top-=50%",
                end: "+=" + (window.innerHeight),
            }
        })
        
        const C = gsap.timeline({
            scrollTrigger: {
                trigger: ".ink-c-js",
                pin: true,
                scrub: .7,
                start: "top-=50%",
                end: "+=" + (window.innerHeight),
            }
        })
        
        const D = gsap.timeline({
            scrollTrigger: {
                trigger: ".ink-d-js",
                pin: true,
                scrub: .7,
                start: "top-=50%",
                end: "+=" + (window.innerHeight),
            }
        })
        
        const E = gsap.timeline({
            scrollTrigger: {
                trigger: ".ink-e-js",
                pin: true,
                scrub: .7,
                start: "top-=50%",
                end: "+=" + (window.innerHeight),
            }
        })

        const F = gsap.timeline({
            scrollTrigger: {
                trigger: ".ink-f-js",
                pin: true,
                scrub: .7,
                start: "top-=50%",
                end: "+=100%",
            }
        })


            A.fromTo(".ink-a-js",{
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false,                
            }, {
                scale: 200,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 200)",
                force3D: false,                
            }, 0);

            A.fromTo(".ink-b-js", {
                scale: 0.005,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 1,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0.2, 1)",
                force3D: false,
            }, 0);

            A.fromTo(".ink-c-js", {
                scale: 0,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 0.005,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0, 0)",
                force3D: false,
            }, 0);

            A.fromTo(".ink-d-js", {
                scale: 0,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 0,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0, 0)",
                force3D: false,
            }, 0);

            A.fromTo(".ink-e-js", {
                scale: 0,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 0,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0, 0)",
                force3D: false,
            }, 0);

            A.fromTo(".ink-f-js", {
                scale: 0,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 0,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0, 0)",
                force3D: false,
            }, 0);










            B.fromTo(".ink-b-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false,                
            }, {
                scale: 200,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 200)",
                force3D: false,                
            }, 0);

            B.fromTo(".ink-c-js", {
                scale: 0.005,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 1,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0.2, 1)",
                force3D: false
            }, 0);

            B.fromTo(".ink-d-js", {
                scale: 0,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 0.005,
                y: "0%",
                position: "fixed",                
                force3D: false,
            }, 0);

            B.fromTo(".ink-e-js", {
                scale: 0,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 0,
                y: "0%",
                position: "fixed",                
                force3D: false,
            }, 0);














            C.fromTo(".ink-c-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false,                
            }, {
                scale: 200,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 200)",
                force3D: false,                
            }, 0);

            C.fromTo(".ink-d-js", {
                scale: 0.005,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 1,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0.2, 1)",
                force3D: false
            }, 0);

            C.fromTo(".ink-e-js", {
                scale: 0,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 0.005,
                y: "0%",
                position: "fixed",                
                force3D: false,
            }, 0);






            D.fromTo(".ink-d-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false,                
            }, {
                scale: 200,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 200)",
                force3D: false,                
            }, 0);
            D.fromTo(".ink-e-js", {
                scale: 0.005,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 1,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0.2, 1)",
                force3D: false
            }, 0);

            D.fromTo(".ink-f-js", {
                scale: 0,
                y: "0%",
                position: "fixed",
                force3D: false,
            }, {
                scale: 0.005,
                y: "0%",
                position: "fixed",                
                force3D: false,
            }, 0);

            










            E.fromTo(".ink-e-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false,                
            }, {
                scale: 200,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 200)",
                force3D: false,                
            }, 0);
            E.fromTo(".ink-f-js", {
                scale: 0.005,
                y: "0%",
                position: "fixed",
                force3D: false
            }, {
                scale: 1,
                y: "0%",
                position: "fixed",
                ease: "expoScale(0.2, 1)",
                force3D: false
            }, 0);
          


            F.fromTo(".ink-f-js", {
                scale: 1,
                y: "0%",
                position: "fixed",
                force3D: false,                
            }, {
                scale: 1,
                y: "0%",
                position: "fixed",
                ease: "expoScale(1, 200)",
                force3D: false,                
            }, 0);

    });

})

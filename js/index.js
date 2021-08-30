// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
    // wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function (e) {

        const arraySection = document.querySelectorAll('.content')

        gsap.utils.toArray(arraySection).forEach(function (obj, number) {        
            let next = arraySection[number+1];
            console.log(next)

            const tr = gsap.timeline({
                scrollTrigger: {
                    trigger: obj,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: "bottom top",
                    markers: true
                }
            })

            tr.fromTo(obj, {
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
            })


            // tr.fromTo(next, {
            //      scale: 0,
            //      y: "0%",
            //      position: "fixed",
            //      force3D: false
            //  }, {
            //      scale: 1,
            //      y: "0%",
            //      position: "fixed",
            //      ease: "expoScale(0, 1)",
            //      force3D: false
            //  }, 0);
        });

    });
});
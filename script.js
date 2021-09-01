gsap.registerPlugin(ScrollTrigger, EasePack)

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
    // wait until images, links, fonts, stylesheets, and js is loaded
        window.addEventListener("load", function (e) {

            gsap.utils.toArray(".section").forEach((item, index, arr) => {
                let next = ((arr.length - 1 === index)? "END" : arr[index+1]);

                const A = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top-=1000%",
                        end: "bottom",
                        pin: true,
                        scrub: 2,                        
                        //snap: arr.length / arr.length,
                         markers: {startColor: "green", endColor: "green", fontSize: "12px"},
                    }
                })    


                A.set( item,{
                    scale: 0,
                    y: 0,
                    position: "fixed",
                    force3D: false,                                    
                })

                A.fromTo( item,{
                    scale: 0,
                    y: 0,
                    position: "fixed",
                    force3D: false,                                    
                }, {
                    scale: 250,
                    y: 0,
                    position: "fixed",
                    ease: "expoScale(1, 15400000000000)",
                    force3D: false,                                    
                }, 0)
            });
    })
})
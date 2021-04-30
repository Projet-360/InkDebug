

window.onload = function () {


  // FIN DES SETS DES ANIMATIONS


  // CHANGEMENT DE LA COULEUR DU BODY

  const GeneralSM = new ScrollMagic.Controller();

  







    
  // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  // ZOOM a
  var aTM = new TimelineMax();

  aTM.add([
    TweenMax.fromTo(".ink-a-js", 1, {
      scale: 1,
      y: "0%",
      position: "fixed",
      force3D: false,
    }, {
      scale: 130,
      y: "0%",
      position: "fixed",
      ease: "expoScale(1, 130)",
      force3D: false
    }),
  ]);

  var aTM = new ScrollMagic.Scene({
      duration: '100%',
      triggerHook: 0,
    })
    .setTween(aTM)
    .addTo(GeneralSM)

// FIN AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA




// BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
var bTM = new TimelineMax();

bTM.add([
  TweenMax.from(".ink-b-js", 1, {
    scale: 0,
    y: "-100%",
    position: "fixed",
    ease: Linear.easeNone,
    display: "none",
    force3D: false
  }),

  TweenMax.fromTo(".ink-b-js", 1, {
    scale: 0,
    position: "fixed",
    opacity: 0,
    force3D: false
  }, {
    scale: 1,
    y: "-100%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 1)",
    force3D: false
  }),
]);

var bTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerHook: 0,
  })

  .setTween(bTM)
  .addTo(GeneralSM)
  
var bOutTM = new TimelineMax();

bOutTM.add([
  TweenMax.fromTo(".ink-b-js", 1, {
    scale: 1,
    y: "-100%",
    position: "fixed",
    opacity: 1,
    force3D: false
  }, {
    scale: 130,
    y: "-100%",
    position: "fixed",
    opacity: 1,
    force3D: false,
    opacity: 1,ease: "expoScale(0, 130)",
  }),
]);

var bOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-b',
    triggerHook: 0,
  })

  .setTween(bOutTM)
  .addTo(GeneralSM)

// FIN BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB




// CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC


var cStartTM = new TimelineMax();
var cInTM = new TimelineMax();
var cTM = new TimelineMax();
var cOutTM = new TimelineMax();

cStartTM.add([
  TweenMax.fromTo(".ink-c-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-200%",
    position: "fixed",
    force3D: false
  }, {
    scale: 0,
    opacity: 1,
    y: "-200%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 0)",
    force3D: false
  }),
]);

var cStartTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-a',
    triggerHook: 1,
  })

  .setTween(cStartTM)
  .addTo(GeneralSM)

cInTM.add([
  TweenMax.fromTo(".ink-c-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-200%",
    position: "fixed",
    force3D: false
  }, {
    scale: 0.02,
    opacity: 1,
    y: "-200%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 0.02)",
    force3D: false
  }),
]);

var cInTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-a',
    triggerHook: -1,
  })

  .setTween(cInTM)
  .addTo(GeneralSM)

cTM.add([
  TweenMax.fromTo(".ink-c-js", 1, {
    scale: 0.02,
    y: "-200%",
    position: "fixed",
    force3D: false
  }, {
    scale: 1,
    y: "-200%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0.02, 1)",
    force3D: false
  }),
]);

var cTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-b',
    triggerHook: 0,
  })

  .setTween(cTM)
  .addTo(GeneralSM)

cOutTM.add([
  TweenMax.fromTo(".ink-c-js", 1, {
    scale: 1,
    y: "-200%",
    position: "fixed",
    opacity: 1,
    force3D: false
  }, {
    scale: 130,
    y: "-200%",
    opacity: 1,
    force3D: false,
    opacity: 1,ease: "expoScale(1, 130)",
  }),
]);

var cOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-c',
    triggerHook: 0,
  })

  .setTween(cOutTM)
  .addTo(GeneralSM)


// FIN CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC







// DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD


var cStartTM = new TimelineMax();
var cInTM = new TimelineMax();
var cTM = new TimelineMax();
var cOutTM = new TimelineMax();

cStartTM.add([
  TweenMax.fromTo(".ink-d-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-300%",
    position: "fixed",
    force3D: false
  }, {
    scale: 0,
    opacity: 1,
    y: "-300%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 0)",
    force3D: false
  }),
]);
var cStartTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-b',
    triggerHook: 1,
  })

  .setTween(cStartTM)
  .addTo(GeneralSM)

cInTM.add([
  TweenMax.fromTo(".ink-d-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-300%",
    position: "fixed",
    force3D: false
  }, {
    scale: 0.02,
    opacity: 1,
    y: "-300%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 0.02)",
    force3D: false
  }),
]);

var cInTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-b',
    triggerHook: -1,
  })

  .setTween(cInTM)
  .addTo(GeneralSM)

cTM.add([
  TweenMax.fromTo(".ink-d-js", 1, {
    scale: 0.02,
    y: "-300%",
    position: "fixed",
    force3D: false
  }, {
    scale: 1,
    y: "-300%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0.02, 1)",
    force3D: false
  }),
]);

var cTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-c',
    triggerHook: 0,
  })

  .setTween(cTM)
  .addTo(GeneralSM)

cOutTM.add([
  TweenMax.fromTo(".ink-d-js", 1, {
    scale: 1,
    y: "-300%",
    position: "fixed",
    opacity: 1,
    force3D: false
  }, {
    scale: 130,
    y: "-300%",
    opacity: 1,
    force3D: false,
    opacity: 1,ease: "expoScale(1, 130)",
  }),
]);

var cOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-d',
    triggerHook: 0,
  })

  .setTween(cOutTM)
  .addTo(GeneralSM)


// FIN DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD






// EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE


var cStartTM = new TimelineMax();
var cInTM = new TimelineMax();
var cTM = new TimelineMax();
var cOutTM = new TimelineMax();

cStartTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-400%",
    position: "fixed",
    force3D: false
  }, {
    scale: 0,
    opacity: 1,
    y: "-400%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 0)",
    force3D: false
  }),
]);
var cStartTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-c',
    triggerHook: 1,
  })

  .setTween(cStartTM)
  .addTo(GeneralSM)

cInTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-400%",
    position: "fixed",
    force3D: false
  }, {
    scale: 0.02,
    opacity: 1,
    y: "-400%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 0.02)",
    force3D: false
  }),
]);

var cInTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-c',
    triggerHook: -1,
  })

  .setTween(cInTM)
  .addTo(GeneralSM)

cTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    scale: 0.02,
    y: "-400%",
    position: "fixed",
    force3D: false
  }, {
    scale: 1,
    y: "-400%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0.02, 1)",
    force3D: false
  }),
]);

var cTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-d',
    triggerHook: 0,
  })

  .setTween(cTM)
  .addTo(GeneralSM)

cOutTM.add([
  TweenMax.fromTo(".ink-e-js", 1, {
    scale: 1,
    y: "-400%",
    position: "fixed",
    opacity: 1,
    force3D: false
  }, {
    scale: 130,
    y: "-400%",
    opacity: 1,
    force3D: false,
    opacity: 1,ease: "expoScale(1, 130)",
  }),
]);

var cOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-e',
    triggerHook: 0,
  })

  .setTween(cOutTM)
  .addTo(GeneralSM)


// FIN EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE




// EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE


var cStartTM = new TimelineMax();
var cInTM = new TimelineMax();
var cTM = new TimelineMax();
var cOutTM = new TimelineMax();

cStartTM.add([
  TweenMax.fromTo(".ink-f-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-500%",
    position: "fixed",
    force3D: false
  }, {
    scale: 0,
    opacity: 1,
    y: "-500%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 0)",
    force3D: false
  }),
]);
var cStartTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-d',
    triggerHook: 1,
  })

  .setTween(cStartTM)
  .addTo(GeneralSM)

cInTM.add([
  TweenMax.fromTo(".ink-f-js", 1, {
    scale: 0,
    opacity: -0.5,
    y: "-500%",
    position: "fixed",
    force3D: false
  }, {
    scale: 0.02,
    opacity: 1,
    y: "-500%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0, 0.02)",
    force3D: false
  }),
]);

var cInTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-d',
    triggerHook: -1,
  })

  .setTween(cInTM)
  .addTo(GeneralSM)

cTM.add([
  TweenMax.fromTo(".ink-f-js", 1, {
    scale: 0.02,
    y: "-500%",
    position: "fixed",
    force3D: false
  }, {
    scale: 1,
    y: "-500%",
    position: "fixed",
    opacity: 1,ease: "expoScale(0.02, 1)",
    force3D: false
  }),
]);

var cTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-e',
    triggerHook: 0,
  })

  .setTween(cTM)
  .addTo(GeneralSM)

cOutTM.add([
  TweenMax.fromTo(".ink-f-js", 1, {
    scale: 1,
    y: "-500%",
    position: "fixed",
    opacity: 1,
    force3D: false
  }, {
    scale: 130,
    y: "-500%",
    opacity: 1,
    force3D: false,
    opacity: 1,
    ease: "expoScale(1, 130)",
  }),
]);

var cOutTM = new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.ink-f',
    triggerHook: 0,
  })

  .setTween(cOutTM)
  .addTo(GeneralSM)


// FIN EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
}
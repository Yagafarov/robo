// typed text header section
let options = {
    strings: [" veb-dasturlashni" , "o'yin yaratishni"," dasturiy ta'minot ishlab chiqishni ", "Frontendni" , "Backendni","Dasturlash texnologiyalarini"],
    typeSpeed: 60,
    startDelay: 200,
    backSpeed: 60,
    backDelay: 200,
    loop: true,
    loopCount: Infinity
  };
  let typed = new Typed(".element", options);
  



// card animation
VanillaTilt.init(document.querySelectorAll(".vanil"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,

});

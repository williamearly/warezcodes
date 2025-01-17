gsap.registerPlugin(ScrollTrigger);

// gsap.from("#logo", {duration: 1, y: '-150%', ease: 'bounce', opacity: 0});
// gsap.from(".fab", {duration: 1, y: -100, opacity: 0, delay: 1.5});

//Start a timeline

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from("#logo", {
    duration: 1,
    y: "-150%",
    ease: "bounce",
    opacity: 0,
  })
  .from(".intro", {
    duration: 1,
    x: "-100%",
    y: "-100%",
    opacity: 0,
  })
  .from(".html5", {
    scrollTrigger: {
      trigger: ".html5",
      start: "top center",
      // markers: true,
      id: "html5",
    },
    duration: 1,
    y: "-100%",
    opacity: 0,
    ease: "power4.out",
  })
  .from(".css3", {
    scrollTrigger: {
      trigger: ".css3",
      start: "top center",
      //   markers: true,
      // id: "css3",
    },
    duration: 1,
    y: "-100%",
    opacity: 0,
    ease: "power4.out",
  })
  .from(".jScript", {
    scrollTrigger: {
      trigger: ".jScript",
      start: "top center",
      //   markers: true,
      // id: "jScript",
    },
    duration: 1,
    y: "-100%",
    opacity: 0,
    ease: "power4.out",
  });

// click div to do and reverse animation
// console.clear();
let targets = gsap.utils.toArray("#logo");

targets.forEach((obj) => {
  obj.anim = gsap.to(obj, { x: 300 }).reversed(true);
  obj.addEventListener("click", doCoolStuff);
});

function doCoolStuff() {
  this.anim.reversed(!this.anim.reversed());
}

gsap.from(".portfolio", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top center",
    //   markers: true,
    id: "portfolio",
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top center",
    //   markers: true,
    id: "contact",
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

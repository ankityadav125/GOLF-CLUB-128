function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotive();

var tl = gsap.timeline();
tl.from(".nav-part1 img", {
  y: -50,
  opacity: 0,
  duration: 0.6,
});

tl.from(".nav-part2 a", {
  y: -50,
  opacity: 0,
  delay: 0.2,
  duration: 0.3,
  stagger: 0.3,
});

tl.from(".nav-part3 i", {
  y: -50,
  opacity: 0,
  duration: 0.3,
  stagger: 0.3,
});

tl.from(".nav-part3 button", {
  y: -50,
  opacity: 0,
  delay: 0.2,
  duration: 0.3,
  stagger: 0.3,
});

gsap.from(".page-1-container", {
  y: 50,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page-1-container",
    scroller: ".main",
    // markers:true,
    start: "top 15%",
    end: "top 0%",
    scrub: true,
  },
});

gsap.from(".page-2-container-left", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  scale: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page-2-container",
    scroller: ".main",
    // markers:true,
    start: "top 60%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page-2-container-right h1", {
  y: 40,
  // opacity:0,
  duration: 0.6,
  scale: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page-2-container",
    scroller: ".main",
    // markers:true,
    start: "top 45%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page-2-container-right p", {
  y: 50,
  // opacity:0,
  duration: 0.6,
  scale: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page-2-container",
    scroller: ".main",
    // markers:true,
    start: "top 45%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page-2-container-right button", {
  y: 50,
  // opacity:0,
  duration: 0.6,
  scale: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page-2-container",
    scroller: ".main",
    // markers:true,
    start: "top 40%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page-3-container-items", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  scale: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-3-container",
    scroller: ".main",
    // markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".page-4 h6", {
  y: 30,
  opacity: 0,
  duration: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers:true,
    start: "top 45%",
    end: "top 0%",
    scrub: true,
  },
});

gsap.from(".page-4 h2", {
  y: 35,
  opacity: 0,
  duration: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers:true,
    start: "top 43%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page-4 h6", {
  y: 37,
  opacity: 0,
  duration: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers:true,
    start: "top 40%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page-4 p", {
  y: 40,
  opacity: 0,
  duration: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers:true,
    start: "top 37%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page-4 button", {
  y: 43,
  opacity: 0,
  duration: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers:true,
    start: "top 35%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page-5-text h6", {
  y: 30,
  opacity: 0,
  duration: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-5",
    scroller: ".main",
    // markers:true,
    start: "top 75%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from(".page-5-text h2", {
  y: 35,
  opacity: 0,
  duration: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-5",
    scroller: ".main",
    // markers:true,
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from(".page-5-text p", {
  y: 30,
  opacity: 0,
  duration: 1,
  // delay:.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-5",
    scroller: ".main",
    // markers:true,
    start: "top 70 %",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from(".page-5-container-items1", {
  y: 50,
  opacity: 0,
  duration: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".page-5-container",
    scroller: ".main",
    // markers:true,
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page-5-container-items2", {
  y: 50,
  opacity: 0,
  duration: 1,
  // scale:1,
  scrollTrigger: {
    trigger: ".page-5-container",
    scroller: ".main",
    // markers:true,
    start: "top 57%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page-5-container-items3", {
  y: 50,
  opacity: 0,
  duration: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".page-5-container",
    scroller: ".main",
    // markers:true,
    start: "top 54%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page-6-container-left", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0,
  scrollTrigger: {
    trigger: ".page-6-container",
    scroller: ".main",
    // markers:true,
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page-6-container-right", {
  y: 50,
  opacity: 0,
  duration: 1,
  scale: 0,
  scrollTrigger: {
    trigger: ".page-6-container",
    scroller: ".main",
    // markers:true,
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page-7-container-items1", {
  y: 60,
  opacity: 0,
  duration: 1,
  // scale:0,
  scrollTrigger: {
    trigger: ".page-7",
    scroller: ".main",
    // markers:true,
    start: "top 65%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page-7-container-items2", {
  y: 60,
  opacity: 0,
  duration: 1,
  // scale:0,
  scrollTrigger: {
    trigger: ".page-7",
    scroller: ".main",
    // markers:true,
    start: "top 55%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page-7-container-items3", {
  y: 60,
  opacity: 0,
  duration: 1,
  // scale:0,
  scrollTrigger: {
    trigger: ".page-7",
    scroller: ".main",
    // markers:true,
    start: "top 45%",
    end: "top 20%",
    scrub: true,
  },
});

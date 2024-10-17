document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll(".toggle-answer");
  const bottle = document.querySelector("#bottle");


  const scroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  };

  const sheryAnim = () => {
    Shery.mouseFollower({});
    Shery.makeMagnet("a", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.makeMagnet(".card h1", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.imageEffect(".img", {
      style: 1,
      config: {
        a: { value: 2, range: [0, 30] },
        b: { value: 0.7, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.7666526861631143 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 0 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
      },
    });
  };

  const ganim = () => {
    const tl = gsap.timeline();
    tl.to(".loader-content", { opacity: 1, duration: 0.5 })
      .to(".progress-bar", { width: "100%", duration: 2 })
      .to(".loader", { y: -300, opacity: 0, duration: 1 });

    tl.to(bottle, {
      scrollTrigger: {
        trigger: bottle,
        scroller: "#main",
        pin: true,
        start: "10% 0%",
        end: "top -205%",
        scrub: 1,
      },
      rotate: 0,
      scale: 0.3,
      zIndex: 100
    })
    tl.to(".scroll", {
      x: "-90%",
      scrollTrigger: {
        scroller: "#main",
        trigger: ".section5",
        start: "top 0",
        end: "top -100%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to(".container", {
      y: "-100%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const faq = button.closest(".faq");
        faq.classList.toggle("open");
      });
    });
  };

  scroll();
  sheryAnim();
  ganim();
});

(function init() {
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
  })();
  
  
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var tl = gsap.timeline();
  tl.from("#page1 svg", {
    y: -40,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
  })
    .from("#page1 img", {
      scale: 0.5,
      delay: -0.1,
      duration: 1.2,
      
      ease: Power4.easeOut,
      borderRadius: "10px",
    })
    .from("#nav", {
      y: -50,
      opacity: 0,
      delay: -0.4,
      duration: 0.5,
    });
  
  var h2data = document.querySelectorAll("#page2 h2");
  h2data.forEach(function (elem) {
    var textData = elem.textContent;
    var splitedText = textData.split("");
    var clutter = "";
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  
  gsap.to("#page2 h2 span", {
    color: "#e3e3c4",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page2 h2 span",
      scroller: "#main",
      start: "top 55%",
      end: "top -5%",
      scrub: 2,
    },
  });
  
  gsap.to("#page2 #svg2,#page2 #svg3", {
    left: "-100vw",
    scrollTrigger: {
      trigger: "#page2 #svg2",
      scroller: "#main",
      scrub: 2,
    },
  });
  
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      markers: true,
      start: "top 60%",
      end: "top 40%",
      scrub: 3,
    },
  });
  tl2.to("#page5-left", {
    transform: `translateX(-50%)`,
    duration: 1,
  },"page5-anim");
  tl2.to("#page5-right", {
    transform: `translateX(50%)`,
    duration: 1,
  },"page5-anim");
  tl2.from("#page5-center", {
    transform: `translateY(10%)`,
    duration: 1,
    opacity:0,
  },"page5-anim");
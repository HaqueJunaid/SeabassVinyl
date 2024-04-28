const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 500)
})

gsap.ticker.lagSmoothing(0)

gsap.to(".image img", {
    rotate: "360",
    repeat: -1,
    duration: 5,
    ease: "linear",
    transformOrigin: "center"
})

gsap.to("nav", {
    backgroundColor: "#FFF",
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".page1",
        start: "1300vw center",
        end: "1300vw center",
        scrub: 1,
    }
})

gsap.to(".image", {
    scrollTrigger: {
        trigger: ".image",
        start: "12% center",
        end: "35% center",
        scrub: true
    },
    ease: "linear.out",
    width: "80%",
    transformOrigin: "center",
    top: "20%",
})

gsap.from(".overlay", {
    top: "50px",
    stagger: 0.1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".overlay",
        start: "top 80%",
        end: "top 50%",
    }
})

gsap.from(".page4 .content h1 span h1", {
    top: "3vw",
    stagger: 0.1,
    ease: "Power2.out",
    scrollTrigger: {
        trigger: ".page4 .content h1 span h1",
        start: "top 80%",
        end: "top 80%",
    }
})

gsap.from(".page5 .container .left .top h1", {
    top: "10vw",
    opacity: 0,
    scrollTrigger: {
        trigger: ".page5 .container .left .top h1",
        start: "top 80%",
        end: "top 80%",
    }
})

    gsap.from(".page6 .container .left .wrapper .top span h1", {
        top: "10vw",
    opacity: 0,
    scrollTrigger: {
        trigger: ".page6 .container .left .top span h1",
        start: "top 80%",
        end: "top 80%",
    }
})

gsap.from(".page7 .m h1 span .down", {
    top: "5vw",
    stagger: .2,
    scrollTrigger: {
        trigger: ".page7 .m h1 span .down",
        // markers: "true",
        start: "top 90%",
        end: "top 90%"
    }
})

gsap.to("footer", {
    transform: "translateY(-100%)",
    ease: "linear.out",
    scrollTrigger: {
        trigger: ".page7",
        scroller: "body",
        // markers: "true",
        start: "top 3%",
        end: "top -100%",
        pin: true,
        scrub: 1
    }
})


let color = ["#E3D6C9", "#ECFB5C", "#4DABC4", "#EC673D", "#1E4857", "#F3F2EF"]
let arr = document.querySelectorAll('.swiper-slide');

arr.forEach(function(elem,index) {
    elem.style.backgroundColor = color[index];
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.3,
    spaceBetween: 30,
    freeMode: true,
  });

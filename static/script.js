
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var tl1 = gsap.timeline()

tl1.from(".logo",{
  y:-20,
  opacity:0,
  duration:1,
  delay:0.3

})

tl1.from(".navbar-nav .nav-item",{
  y:-20,
  opacity:0,
  duration:1,
  stagger:0.3
})

var tl2 = gsap.timeline()
tl2.from(".first_wrapper h1",{
  y:20,
  opacity:0,
  duration:1,
  delay:0.7,
})


function textSolutions(){
  var h2 = document.querySelector(".first_wrapper h2")
  var h2Text = h2.textContent

  var splittedtext = h2Text.split("")
 

  var clutter = ""

  splittedtext.forEach(function(elem){
  
      clutter +=`<span>${elem}</span>`
    
  })
  h2.innerHTML = clutter
}
textSolutions()

gsap.from("h2 span",{
  y:80,
  duration:1,
  delay:0.5,
  stagger:0.15,
  opacity:0,

})

gsap.from(".first_wrapper p",{
  y:80,
  duration:1,
  delay:1,
  opacity:0,
})



//  gsap.to(".third_wrapper",{

//   backgroundColor: 'red',
//   scrollTrigger: {
//     trigger:".third_wrapper",
//     scroller:"body",
//     markers:true,
//     start:"top 10%"
//   },

//  })

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function () {
    var nav = document.querySelector(".navbar");
    if (nav) {
      var scrolled = window.scrollY > nav.offsetHeight;
      nav.classList.toggle("scrolled", scrolled);
    }
  });
});



const items = document.querySelectorAll('.item')

items.forEach((el) => {
  const image = el.querySelector('img')
  
  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1 })
  })
  
   el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0 })
  })
  
  el.addEventListener('mousemove', (e) => {
    gsap.set(image, { x: e.offsetX - 800 })
  })
})




gsap.set(".photo:not(:first-child)", {opacity:0, scale:0.5})

const animation = gsap.to(".photo:not(:first-child)", {
	opacity:1, scale:1, duration:1, stagger:1
})

ScrollTrigger.create({
	trigger:".project_gallery",
	start:"top 20%",
	end:"bottom 100%",
	pin:".photos",
	animation: animation,
	scrub:true,
	markers:true
})




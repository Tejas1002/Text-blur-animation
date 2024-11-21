const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.page-two',
      pin: true,
      start: '50% 50%', 
      end: '200% 50%', 
      scrub: 1,
  }
});

tl.to("#web-devlopment", {
   opacity: 1,
   filter: "blur(0px)",
})

  .to("#figma",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.3
})
.to("#wordpress",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.3
})
.to("#uxui-design",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#awards",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#php",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#new-website",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#react",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#illustratot",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#photoshop",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#illustrator",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#js",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#html",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#css",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#laraval",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#graphic-design",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
.to("#graphic-design",{
  opacity: 1,
  filter: "blur(0px)",
  deley: -0.2
})
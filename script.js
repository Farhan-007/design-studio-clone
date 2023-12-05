const container = document.querySelector('.container')
const cards = gsap.utils.toArray('.container .card')

let scrollTween = gsap.to(cards, {
    xPercent: -100 * (cards.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        scrub: 1,
        end: "+=2200"
    }
})
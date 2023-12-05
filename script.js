const container = document.querySelector('.container')
const cards = gsap.utils.toArray('.container .card')


//loader

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },1000);
    }
  }

//horizontal scroll cards
let scrollTween = gsap.to(cards, {
    xPercent: -100 * (cards.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        scrub: 1,
        end: "+=2200"
    }
})
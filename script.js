const container = document.querySelector('.container')
const cards = gsap.utils.toArray('.container .card')


//loader

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.opacity = "0";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.opacity = "0";
            document.getElementById('load').style.display = "none";
            document.getElementById('contents').style.opacity = "1";

        }, 1000);
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
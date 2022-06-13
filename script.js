let ul=document.querySelectorAll('ul')[0]
let menu=document.querySelectorAll('.menu')[0]
let button=document.querySelectorAll('.btn')[0]

// function for the hamburger menu
menu.addEventListener('click',function menu(){
   ul.classList.toggle('hmaburgermenu')
})
function none(params) {
   ul.classList.remove('hmaburgermenu')

}

//forgsap
const tl=gsap.timeline()
gsap.registerPlugin('scrollTrigger');
// for navigation
gsap.from('nav',{
    scrollTrigger:{
        trigger:'nav',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    y:-100,
    duration:1,
});
// for the info section
gsap.from('.info',{
    scrollTrigger:{
        trigger:'.info',
        toogleActions:'restart none none none',
        // scrub:1
    },
    opacity:0,
    delay:.4,
    y:50,
    duration:1.1,
});
// for the facilities heading
gsap.from('.service > h1',{
    scrollTrigger:{
        trigger:'.service > h1',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    delay:.4,
    opacity:0,
    y:50,
    duration:1.1,
});
// for the first cards
gsap.from('.card1',{
    scrollTrigger:{
        trigger:'.card1',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    opacity:0,
    x:-30,
    duration:.83,
});

// for the second cards
gsap.from('.card2',{
   scrollTrigger:{
       trigger:'.card2',
       toogleActions:'restart none restart none',
       // scrub:3
   },
   opacity:0,
   x:30,
   duration:.83,
});

// for the third cards
gsap.from('.card3',{
    scrollTrigger:{
        trigger:'.card3',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    opacity:0,
    x:-30,
    duration:.83,
});
// for the fourth cards
gsap.from('.card4',{
   scrollTrigger:{
       trigger:'.card4',
       toogleActions:'restart none restart none',
       // scrub:3
   },
   opacity:0,
   x:30,
   duration:.83,
});
// for the fifth cards
gsap.from('.card5',{
    scrollTrigger:{
        trigger:'.card5',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    opacity:0,
    x:-30,
    duration:.83,
});

// for the sixth cards
gsap.from('.card6',{
   scrollTrigger:{
       trigger:'.card6',
       toogleActions:'restart none restart none',
       // scrub:3
   },
   opacity:0,
   x:30,
   duration:.83,
});
// for the contact section
gsap.from('.contact',{
    scrollTrigger:{
        trigger:'.contact',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    opacity:0,
    y:60,
    duration:1,
});

// for the gallery section
gsap.from('.galleryWrapper',{
    scrollTrigger:{
        trigger:'.galleryWrapper',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    x:-50,
    opacity:0,
    duration:1,
});

// for the testimonial section
gsap.from('.testimonial',{
    scrollTrigger:{
        trigger:'.testimonial',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    opacity:0,
    scale:.7,
    duration:.9,
});

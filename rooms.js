//forgsap
gsap.registerPlugin('scrollTrigger');
const tl=gsap.timeline()
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
// for the first room container
gsap.from('.container1',{
    scrollTrigger:{
        trigger:'.container1',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    y:50,
    duration:1.3,
});
// for the second room container
gsap.from('.container2',{
    scrollTrigger:{
        trigger:'.container2',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    y:50,
    duration:1.3,
});
// for the third room container
gsap.from('.container3',{
    scrollTrigger:{
        trigger:'.container3',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    y:50,
    duration:1.3,
});
// for the fourth room container
gsap.from('.container4',{
    scrollTrigger:{
        trigger:'.container4',
        toogleActions:'restart none restart none',
        // scrub:3
    },
    y:50,
    duration:1.3,
});
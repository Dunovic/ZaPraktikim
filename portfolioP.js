'USE STRICT'

const desno = document.querySelector('.desno');
const naslov = document.querySelector('.hi');

const tl = new TimelineMax();

tl.fromTo(desno,1,{width: "0%"},{width:"100%",ease:Power2.easeInOut})
.fromTo(naslov,1.2,{x:"-220%"},{x:'0%',ease:Power2.easeInOuts});

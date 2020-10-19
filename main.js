'USE STRICT'
let slideI = 0; // indeks
const naslov = document.querySelector('.naslov');
const desno = document.querySelector('.desno');
const me = document.querySelector('.me');
const tl = new TimelineMax();

tl.fromTo(naslov,1.2,{x:"-100%"},{x:'0%',ease:Power2.easeInOuts}) 
.fromTo(desno,1.2,{width:"220%"},{width:"30%"}) 
.fromTo(me,1.2,{x:"-200%"},{x:'0%',ease:Power2.easeInOuts});

function otvori(){
    document.getElementById("navi").style.width = "20%"; 
}


function zatvori(){
    document.getElementById("navi").style.width = "0%"; 
}



$(document).ready(function(){
    
    $("a").on('click', function(event) {
      
      if (this.hash !== "") {
        
        event.preventDefault();
        
        let hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){ 
          window.location.hash = hash;
        });
      }
    });
  });
  showSlides();


  function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for(i = 0;i<slides.length; i++){ 
     slides[i].style.display = "none";  
     }
     slideI++;
     if(slideI > slides.length){slideI = 1 } 

     slides[slideI-1].style.display = "block";
     setTimeout(showSlides,3000); 
  }


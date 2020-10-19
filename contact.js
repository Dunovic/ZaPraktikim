'USE STRICT'

const forma = document.getElementById('form');
const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const email = document.getElementById('email');
const txtB = document.getElementById('txtA');
const eror = document.getElementById('eror');

const desno = document.querySelector('.desno');


const tl = new TimelineMax();

tl.fromTo(desno,1,{width: "0%"},{width:"98%",ease:Power2.easeInOut});






function sacuvaj(){

  
    localStorage._prezime  = document.getElementById("prezime").value;
    localStorage._ime = document.getElementById("ime").value;
    localStorage._email  = document.getElementById("email").value;

}

/*function ucitaj(){
    //uzimamo sve iz local storidza
document.getElementById("ime").value = localStorage._user;
document.getElementById("prezime").value = localStorage._user;
document.getElementById("email").value = localStorage._user;
}*/






try{


forma.addEventListener('submit',(e)=> {


    let poruke=[];
    
    if(ime.value == '' ||  ime.value== null ){
        alert('Potrebno je da unesete vase ime');
    }
    else if(ime.value <1){
        alert('Ponovite unos imena');
    }


   if(prezime.value == '' ||  prezime.value== null){
        alert('Potrebno je da unesete vase prezime');
    }
     

    if( email.value == '' || email.value== null){
        alert('Potrebno je da unesete vase email');
    }
    
   

    if(txtB.value == '' || txtB.value==null){
        alert('Potrebno je da unesete vasu poruku');

    }else if(txtB.value < 1){
        alert('Molimo vas unesite poruku ponovo');
    }



    if(poruke.length > 0 ){ 
        e.preventDefault();
       errorElement.innerText = poruke.join(',');
        
    }

    e.preventDefault() 
})
}
catch(err){
    alert('Greska! ' + err);
}



forma.addEventListener('submit')
function otvori(){
    document.getElementById("navi").style.width = "20%"; 
}


function zatvori(){
    document.getElementById("navi").style.width = "0%"; 
}






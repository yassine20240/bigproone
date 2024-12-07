// /*--------------------------------------------------------------
  
// -------------------------------------------------------------- -->*/

 

const menu = document.getElementById('menu');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

 
openButton.addEventListener('click', () => {
  menu.classList.remove('open');  
});

 
closeButton.addEventListener('click', () => {
  menu.classList.add('open');  
});



/*--------------------------------------------------------------
    function one
-------------------------------------------------------------- -->*/

let ZoOm = document.getElementById("ZoOm");

function zoomImage(src) {
  let imgPrincipale = document.getElementById("imgPrincipale");

  imgPrincipale.src = src;
  ZoOm.style.display = "flex";
}

ZoOm.onclick = function () {
  this.style.display = "none";
};

/*--------------------------------------------------------------
  
-------------------------------------------------------------- -->*/

console.log(imgtwo);

function zoomimg(src) {
  let zoomdeux = document.getElementById("zoomdeux");
  let imgtwo = document.getElementById("imgtwo");

  imgtwo.src = src;
  zoomdeux.style.display = "flex";
}
let zoomdeux = document.getElementById("zoomdeux");

zoomdeux.onclick = function () {
  zoomdeux.style.display = "none";
};

/*-------------------------------------------------------------- finish the function two of zoomm-------------------------------------------------------------- -->*/

 

// 

let SelectMenu = (category) => {
  let meales = document.querySelectorAll(".first-item");
 

  meales.forEach((meale) => {
    if (
      category === "all" ||
     meale.getAttribute("data-category")  ===  category
    ) {
      meale.style.display = 'block';
    }else{
      meale.style.display = 'none';
    }
  });
};



/*-------------------------------------------------------------- finish the function of filter the meales -------------------------------------------------------------- -->*/

 
  
let divfour = document.getElementById('divfour');
let divone = document.getElementById('divone');
let divtwo = document.getElementById('divtwo');
let divthree = document.getElementById('divthree');
let div  = document.getElementById('div');

let currentDiv = 0;  
let divs = [divone, divtwo, divthree,divfour];  


function showNextDiv() {

   
 div.style.display='none'
divone.style.display = 'none';
divtwo.style.display = 'none';
divthree.style.display = 'none';
divfour.style.display='none'

  div.innerHTML = divs[currentDiv].innerHTML ;
  divs[currentDiv].style.display='block';

if(currentDiv < divs.length-1){
    currentDiv++
}
else{
    currentDiv =0 ; 
}
 
}

setInterval(showNextDiv, 2000);
 

/*--------------------------------------------------------------  -------------------------------------------------------------- -->*/

 
// }
let imgHover = document.getElementById('imgHover');
let infochefs = document.getElementById('infOchef');

imgHover.addEventListener('mouseover', function() {
  
  infochefs.classList.remove('ShowInfo');
});

imgHover.addEventListener('mouseout', function() {
  infochefs.classList.add('ShowInfo');
  
});










let imgHover1 = document.getElementById('imgHover1');
let infochefs1 = document.getElementById('infOchef1');

imgHover1.addEventListener('mouseover', function() {
  
  infochefs1.classList.remove('ShowInfo');
});

imgHover1.addEventListener('mouseout', function() {
  infochefs1.classList.add('ShowInfo');
  
});







let imgHover2 = document.getElementById('imgHover2');
let infochefs2 = document.getElementById('infOchef2');

imgHover2.addEventListener('mouseover', function() {
  
  infochefs2.classList.remove('ShowInfo');
});

imgHover2.addEventListener('mouseout', function() {
  infochefs2.classList.add('ShowInfo');
  
});





 


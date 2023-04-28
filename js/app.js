//VARIABLES ----


const allImgs = Array.from(document.querySelectorAll('.imges img'));

const nextBtn = document.getElementById('next');
const prevtBtn = document.getElementById('previous');

const pagesSlider = document.getElementById('bullets')

let slideNum = document.getElementById('slidenum');
let currentSlider = 1 ; 

const imgNum = allImgs.length 

// EVENTS --
nextBtn.onclick = nextImg;

prevtBtn.onclick = prevImg;


// ---- 



// CREATING PAGES -- 

function createPages(){
    let bullets = document.createElement('ul');

    bullets.setAttribute('id' , 'bulletsParent')
// let bulletsNum = document.createTextNode
for (let i =1 ; i<imgNum +1  ; i++){
    let bulletsLi = document.createElement('li');
    bulletsLi.innerHTML = i
    bulletsLi.setAttribute('data-index', i) 
    bullets.appendChild(bulletsLi)
    
}



pagesSlider.appendChild(bullets)
}
createPages()

const bulletsParent = document.getElementById('bulletsParent')

const pages = Array.from(document.querySelectorAll('.slider-controle #bullets  ul li '))

// -- 


// MAIN LOGiC --
function nextImg(){


    if (nextBtn.classList.contains('disabled')){
        return false ;
    }else{
        currentSlider++ ;
        console.log(currentSlider)
        console.log(imgNum)
        checker()

    }
    
}

function prevImg(){
    if(prevtBtn.classList.contains('disabled')){
        return false 
    }else {

        currentSlider-- ;
        checker()

    }
}

function bulletsClick(){
    for (let x =0 ; x< pages.length ; x++){
        pages[x].onclick = function() {
            currentSlider = parseInt(this.getAttribute('data-index'))
            checker()
        }
    }
}

console.log(pages)

bulletsClick()

// -- 






//CHECKER ---------

function checker(){

// REMOVE ACTIVE CLASS --

function removeActive(){
    allImgs.forEach( img => {
        img.classList.remove('active')
    } )

    pages.forEach( page =>{
        page.classList.remove('active')
    } )
}

removeActive()

// -- 


// ACTIVATE THE CLASSES 
    function activate(){
        slideNum.innerHTML = `Slide # ${ currentSlider} of ${imgNum}` ;
        allImgs[currentSlider -1 ].classList.add('active')
        bulletsParent.children[currentSlider -1].classList.add('active');
    }

    activate()
// --

//CHECK ON NEXT AND PREV IMAG --

function disanleBtn(){
    if (currentSlider === 1){
        prevtBtn.classList.add('disabled')
     } else{
        prevtBtn.classList.remove('disabled')
     }
    
    
     if (currentSlider ==  imgNum){
        nextBtn.classList.add('disabled')
     } else{
        nextBtn.classList.remove('disabled')
     }
    
}
disanleBtn()
// -- 
}

// ---------






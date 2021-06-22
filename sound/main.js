//inicio pagina
alert("Aperte ENTER para pular os cactus!");

//var globais
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let inicialPosition = 0;

//dinossauro
function handleKeyUp(event) {
    if (event.keyCode === 13) {
        if(!isJumping) {
            
        jump();
       
        }
    }   
}

function jump() {
 
   isJumping = true;

    let upInterval = setInterval(() => {

        if(inicialPosition >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {

                if (inicialPosition <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }else {
                    
                    inicialPosition -= 20;
                    dino.style.bottom = inicialPosition + 'px';
                }              

            }, 20);
        }else {

        inicialPosition += 20;
        dino.style.bottom = inicialPosition + 'px';
        }

    }, 20);    
}

//cactus
function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomCactus = Math.random() + 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval (() => {
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60 && inicialPosition < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class = "game-over"> GAME OVER </h1>'; 
            
                      
        }else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 30);

    setTimeout(createCactus, randomCactus);

}

createCactus();
document.addEventListener('keyup', handleKeyUp);


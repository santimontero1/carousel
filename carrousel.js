const fila = document.querySelector('.contenedor-carousel');
const slide = document.querySelector('.carousel');
const flechaIzquierda= document.getElementById('flecha-izquierda');
const flechaDerecha= document.getElementById('flecha-derecha');
const clones = []

console.log(slide.offsetWidth)
flechaIzquierda.addEventListener("click", moverIzquierda);
flechaDerecha.addEventListener("click", moverDerecha);

function moverIzquierda() {
    transicionL()
}

function moverDerecha() {
    transicionR()
}

const space = 15
let cards = [...document.querySelectorAll('.card')];
let cantidad_card = cards.length
let cantidad_card_vista = 3

let aux = cantidad_card / cantidad_card_vista
console.log(aux)

let ancho_card = 0
cards.forEach(card => ancho_card += card.offsetWidth)

let mov = cantidad_card - cantidad_card_vista





let ancho_card_total = ancho_card / cantidad_card_vista + space
let cuanto = 0


function transicionR (){
    cuanto += -ancho_card_total
    cards.map(card => card.style.transform = `translateX(${cuanto}px)`)
    console.log(-ancho_card_total * mov);
    if(cuanto < -ancho_card_total * mov ){
        cards.map(card => card.style.transform = `translateX(${0}px)`)
        cuanto = 0
    }    
}
function transicionL (){
    cuanto += ancho_card_total
    cards.map(card => card.style.transform = `translateX(${cuanto}px)`)
    if(cuanto == ancho_card_total){
        cards.map(card => card.style.transform = `translateX(${cuanto * -1.42}px)`)
        cuanto -= ancho_card_total * mov
    }    
}

// 6 cards 1.42
// 5 cards 1.1
// 4 cards 0.6
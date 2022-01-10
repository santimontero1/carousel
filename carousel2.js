const fila = document.querySelector('.contenedor-carousel');
const slider = document.querySelector('.carousel');
const flechaIzquierda= document.getElementById('flecha-izquierda');
const flechaDerecha= document.getElementById('flecha-derecha');
const cards = [...document.querySelectorAll('.card')];
const cards_quantity = cards.length; 
const card_width = cards[0].offsetWidth; //342
const slider_width = slider.offsetWidth; //1178
const cards_in_view = 3; // la cantidad q se quiere pasar 
const clones = []
console.log(1178/card_width); // cantidad de cards q se muestran en la vista 

flechaIzquierda.addEventListener("click", transicionL);
flechaDerecha.addEventListener("click", transicionR);

cards.forEach(item =>{
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
});
let cuanto = 0

function transicionR (){
    cuanto += -card_width * cards_in_view
    if (cuanto  < slider_width * -1){
    cards.forEach(item =>{
            let clone = item.cloneNode(true);
            clone.classList.add('clone');
            slider.appendChild(clone);
            clones.push(clone);
        });
    }
        clones.map(card => card.style.transform = `translateX(${cuanto}px)`)
        cards.map(card => card.style.transform = `translateX(${cuanto}px)`)
    //else cards.map(card => card.style.transform = `translateX(${cuanto}px)`)
    
}
function transicionL (){
    cuanto += card_width * cards_in_view
    if (cuanto >= 1026){
        cuanto = 0
    }else {
        cards.map(card => card.style.transform = `translateX(${cuanto}px)`)
        clones.map(card => card.style.transform = `translateX(${cuanto}px)`)
    }
    
}

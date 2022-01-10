/* 
const fila = document.querySelector('.contenedor-carousel-' + nombre_slider);
    const slide = document.querySelector('.carousel-' + nombre_slider);
    const flechaIzquierda= document.getElementById('flecha-izquierda-' + nombre_slider);
    const flechaDerecha= document.getElementById('flecha-derecha-' + nombre_slider);

    
    No borres este 
    let cantidadDesplazamiento = 0;
        if(viewportWidth > 800) {
            cantidadDesplazamiento = cantidadDesplazamientoEnDesktop;
        }else if(viewportWidth > 400 && viewportWidth < 799) {
            cantidadDesplazamiento = cantidadDesplazamientoEnCelusMediano;
        }else {
            cantidadDesplazamiento = cantidadDesplazamientoEnCelusPequeño;
        }

    let cantidadDesplazamientoEnCelusPequeño = 1;
    let cantidadDesplazamientoEnCelusMediano = 1.5;
    let cantidadDesplazamientoEnDesktop = 3;
    let viewportWidth = window.innerWidth;
    
    flechaIzquierda.addEventListener("click", () => moverIzquierda());
    flechaDerecha.addEventListener("click", () => moverDerecha());

    function moverIzquierda() {
        transicionL()
    }

    function moverDerecha() {
        transicionR()
    }

    let cards = [...document.querySelectorAll('.card-' + nombre_slider)];
    let ancho_card = 0
    cards.forEach(card => ancho_card += card.offsetWidth)
    let space = 15 
    let ancho_card_total = ancho_card / 3 + space
    let cuanto = 0
    function transicionR (){
        cuanto += -ancho_card_total
        cards.map(card => card.style.transform = `translateX(${cuanto}px)`)
        if(cuanto <= -ancho_card_total * 3 ){
            console.log(ancho_card_total * 3);
            cards.map(card => card.style.transform = `translateX(${0}px)`)
            cuanto = 0
        }    
    }
    function transicionL (){
        cuanto += ancho_card_total
        cards.map(card => card.style.transform = `translateX(${cuanto}px)`)
        if(cuanto == ancho_card_total){
            cards.map(card => card.style.transform = `translateX(${ancho_card_total * -2}px)`)
            cuanto -= ancho_card_total * 3
        }    
    }
    */
import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
/**
 * 
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {HTMLElement}puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement}divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,deck = []) => {
    if(!puntosMinimos)
        throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML)
        throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;
        

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerHTML= puntosComputadora;
        
        const imgCarta= crearCartaHTML(carta)
        divCartasComputadora.append(imgCarta);

        
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 620 );
}
import React from 'react'
import { MDBContainer, MDBRow } from 'mdbreact'
import './Reglas.css'
/**
 * Componente estático que muestra las reglas de juego, es un
 * contenedor en el que se muestran las reglas del juego
 * estructuradas en parrafos.
 * Las reglas están basadas en las del juego de mesa "Risk"
 * y han sido adaptadas al formato que se pretende diseñar
 * de forma que faciliten la jugabilidad en un entorno
 * virtual (web y movil).
 */
export const Reglas = () => {
	return (
		<MDBContainer className="container-fondo-reglas">
			<MDBContainer className="container-reglas">
				<MDBRow>
					<h1 className="font-weight-bold mb-12 p-12">Reglas pixelRISK</h1>
				</MDBRow>
				<h2 className="font-weight-bold mb-12 p-12">Introducción:</h2>
				<p className="text-left">
					El objetivo del juego es conquistar el tablero entero, el cual está
					dividido en 42 territorios. Cada territorio pertenece a un jugador y
					posee un número de tropas. Cada jugador puede controlar las tropas y
					territorios de su color, y juegan por turnos.
				</p>
				<p>Cada turno se divide en tres fases:</p>
				<h2 className="font-weight-bold mb-12 p-12">Fase de Refuerzos:</h2>
				<p>
					Según el número de territorios, continentes controlados por completo y
					territorios conquistados en el turno anterior, el jugador recibe un
					número de refuerzos (tropas), que se pueden colocar en cualquier
					territorio que este controle. Para realizar esto, selecciona un
					territorio, y después, el número de tropas a poner en él.
				</p>
				<h2 className="font-weight-bold mb-12 p-12">Fase de Ataque:</h2>
				<p>
					Tantas veces como quieras en esta fase, puedes atacar a un territorio
					que no te pertenezca desde otro que sí te pertenezca y esté conectado
					al que quieres atacar. Puedes atacar con un máximo de tropas igual al
					de tu territorio menos uno. El atacante tira tantos dados como tropas
					ataquen (Máximo de 3 dados), y el defensor tira tantos dados como
					tropas tiene en su territorio (Máximo 2 dados).
				</p>
				<p>
					Cuantos más dados tengas, más probabilidades tienes de quitarle tropas
					al enemigo, e igual con el enemigo.
				</p>
				<p>
					Cada dado del atacante se compara con un dado del defensor (el mayor
					con el mayor y el segundo mayor con el segundo mayor), y el que menor
					número saca pierde una tropa. En caso de empate, las tropas las pierde
					el atacante.
				</p>
				<p>
					Si el número de tropas en el territorio enemigo llega a 0, se mueven
					todas las tropas que estaban atacando a ese territorio. Para realizar
					esto, selecciona un territorio tuyo desde donde atacar, después un
					territorio enemigo al que atacar, y finalmente el número de tropas que
					quieres que ataquen.
				</p>
				<h2 className="font-weight-bold mb-12 p-12">Fase de Movimiento:</h2>
				<p>
					Una sola vez en esta fase, puedes mover tropas de un territorio a
					otro.
				</p>
				<p>
					Para realizar esto, selecciona un territorio tuyo de origen, después
					un territorio tuyo de destino, y finalmente el número de tropas que
					quieres mover del origen al destino.
				</p>
				<p>
					Para poder mover las tropas entre los territorios, deben poder
					desplazarse entre ellos pasando únicamente por territorios que te
					pertenecen.
				</p>
			</MDBContainer>
		</MDBContainer>
	)
}

export default Reglas

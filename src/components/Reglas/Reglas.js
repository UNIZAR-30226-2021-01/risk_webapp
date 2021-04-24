import React from 'react'
import { MDBContainer, MDBRow } from 'mdbreact'

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
		<MDBContainer>
			<MDBRow>
				<h1>Reglas pixelRISK</h1>
			</MDBRow>
			<h3 className="font-weight-bold mb-12 p-12">
				<strong>Introducción:</strong>
			</h3>
			<p className="text-left">
				En este juego participan entre 3 y 6 jugadores en un mapa global con el
				objetivo de conquistar el mundo entero usando tropas para atacar y
				defender territorios.
			</p>
			<p>Cada jugador tiene su turno, el cual está separado en fases:</p>
			<h2>
				<strong>Fase 1: </strong>
			</h2>
			<p>
				Obtienes un numero de tropas nuevas dependiendo de los territorios que
				tengas conquistados. Estas tropas se deben repartir como refuerzos en
				territorios en los que ya tengas tropas.
			</p>
			<h2>
				<strong>Fase 2: </strong>
			</h2>
			<p>
				Ataca desde un territorio tuyo con un número específico de tropas a un
				territorio enemigo tantas veces como quieras. No puedes atacar desde un
				territorio que sólo tenga una tropa.
			</p>
			<h2>
				<strong>Fase 3: </strong>
			</h2>
			<p>
				Una única vez, mueve un número cualquiera de tropas desde un territorio
				controlado por tí a otro territorio de tu propiedad.
			</p>
		</MDBContainer>
	)
}

export default Reglas

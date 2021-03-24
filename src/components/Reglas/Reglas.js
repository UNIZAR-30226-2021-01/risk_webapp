import React from 'react'
import {MDBBox, MDBContainer, MDBRow} from 'mdbreact';

/**
 * Muestra la lista de amigos recibida como parámetro y da la opción de
 * añadir un amigo.
 * @param {lista_de_usuarios} usuarios Amigos del usuario de la aplicación 
 */
export const Reglas = () => {
	return (
	<MDBContainer>
		<MDBRow>
			<h2>Reglas RISK</h2>
		</MDBRow>
		<h3 className="font-weight-bold mb-12 p-12">
			<strong>Inicio:</strong>
		</h3>
		<p className="text-left">Cada jugador obtiene un número de tropas dependiendo del número de jugadores</p>
		<ul>
			<li>3 Jugadores: 35</li>
			<li>4 Jugadores: 30</li>
			<li>5 Jugadores: 25</li>
			<li>6 Jugadores: 20</li>
		</ul>
		<p>Cada uno tira un dado para obtener orden de turnos (Aleatorio)</p>
		<h3>
		Reglas de posicionamiento de tropas
		</h3>
		<p>
		<strong>Método 1: </strong>
		Ir colocando uno a uno las tropas, hasta que no existan provincias vacías.
		</p>
		<p>
		<strong>Método 2: </strong>
		Aleatorio por cartas, se pone una tropa en cada territorio recibido
		Se refuerzan los territorios con el resto de tropas restantes
		Barajar cartas RISK™
		</p>
		<h3>Cada turno: </h3>
		<p>Calcular el número de tropas que el jugador recibe basado en:</p>
		<ul>
			<li>Número de provincias conquistadas (DIVIDIR ENTRE 3, IGNORAR DECIM.)</li>
			<li>Bono por continente controlado</li>
			<li>
				Canjear un trío de cartas dependiendo de las siguientes reglas:
				<ul>
					<li>
						Un trio de cartas es:
						<ul>
							<li>Tres cartas con el mismo tipo de tropa en ellas</li>
							<li>Tres cartas con los tres tipos de cartas en ellas</li>
						</ul>
					</li>
					<li>El jugador obtiene 4+2x tropas extras, donde x es el número de tríos de cartas que se han canjeado en total en la partida.</li>
				</ul>
			</li>
		</ul>
		<p>Atacar</p>

	</MDBContainer>
	)
}

export default Reglas;
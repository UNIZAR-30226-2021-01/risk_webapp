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
		<p>Atacar: </p>
		<ul>
			<li>Anunciar la provincia desde donde se ataca, a la provincia colindante a la que se ataca.</li>
			<li>Anunciar con cuantas tropas se ataca. (No se puede atacar con todas las tropas)</li>
			<li>El atacante tira un número de dados igual al número de tropas atacantes, máximo 3.</li>
			<li>El defensor tira un número de dados igual al número de tropas en su provincia, máximo 2.</li>
			<li>
				<p>El cálculo de tropas perdidas es el siguiente:</p>
				<ul>
					<li>Comparar los dos dados más altos de cada uno y los dos dados segundos en número. (Dos parejas de dados)</li>
					<li>El defensor pierde una tropa por cada par de dados en el que tiene menos número que el atacante.</li>
					<li>El atacante pierde una tropa por cada par de dados en el que tiene menor o igual número que el defensor</li>
					<li>Si el defensor acaba sin tropas en la provincia a defender, el atacante mueve el número de tropas atacantes a la provincia</li>
				</ul>
			</li>
		</ul>
		<p>Repetir cuantos ataques se deseen</p>
		<p>Si has conquistado un territorio, robar una carta RISK™</p>
		<p>Si has eliminado a un jugador, obtienes todas las cartas RISK™ del eliminado</p>
		<p>Si tienes 6 o más cartas en este momento, hay que canjear cartas hasta tener 4 o menos.</p>
		<p>Reforzar: </p>
		<ul><li>Puedes mover cuantas tropas desees desde una provincia a una colindante.</li></ul>
	</MDBContainer>
	)
}

export default Reglas;
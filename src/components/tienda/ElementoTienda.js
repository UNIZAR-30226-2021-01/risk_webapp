import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import {
	MDBBtn,
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBFooter,
} from 'mdbreact'
import AuthApi from './../../utils/AuthApi'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import { comprarObjeto } from 'utils/restAPI'
import iconos from 'assets/iconos/iconos'
import tropas from 'assets/tropas/tropas'
import { recargarUsuarioServer } from 'utils/AuthServer'
import riskos from '../../assets/UI/moneda.png'
import marcoIcono from '../../assets/UI/avatar_marco.png'
import fondoTropa from '../../assets/UI/avatar_fondo.png'
import { obtenerCredenciales } from 'utils/usuarioVO'

/**
 * Muestra los datos del elemento recibido como parámetro según su tipo.
 */
const ElementoTienda = ({ datos, tipo }) => {
	const Auth = useContext(AuthApi)
	const [serverErrors, setServerErrors] = useState('')
	const [isOpen, setOpen] = useState(false)
	var imagen
	if (tipo === 'Icono') imagen = iconos[datos.id].img
	else imagen = tropas[datos.id].img

	const toggle = () => {
		setOpen(!isOpen)
	}

	const comprarObjetoInterno = () => async () => {
		console.log('Comprar objeto interno')
		setServerErrors('')
		const formData = {
			...obtenerCredenciales(Auth),
			cosmetico: datos.id,
			tipo: tipo,
		}
		const data = await comprarObjeto(formData)

		if (data.code === 0) {
			recargarUsuarioServer(Auth)
			toggle()
		} else {
			setServerErrors(data.err)
		}
	}

	return (
		<>
			<div className="item-tienda">
				<div className="img-item-container">
					<img src={imagen} className="img-item" />
					<img src={marcoIcono} className="img-item-fondo" />
					{tipo === 'Aspecto' && (
						<img src={fondoTropa} className="img-tropas-fondo" />
					)}
				</div>
				<div className="d-flex justify-content-center align-content-center">
					<MDBBtn onClick={toggle}>
						<img src={riskos} className="riskos-img"></img>
						<div className="d-none d-md-inline">{datos.precio}</div>
					</MDBBtn>
				</div>
			</div>
			<MDBModal isOpen={isOpen} toggle={toggle}>
				<MDBModalHeader toggle={toggle}>
					¿Quieres comprar este {tipo} por {datos.precio} riskos?
				</MDBModalHeader>
				<MDBModalBody className="d-flex justify-content-between">
					<ErroresServer serverErrors={serverErrors} />
				</MDBModalBody>
				<MDBFooter className="d-flex justify-content-around">
					<MDBBtn className="cancela-compra" onClick={toggle}>
						{' '}
						Cancelar
					</MDBBtn>
					<MDBBtn className="compra-objeto" onClick={comprarObjetoInterno()}>
						Comprar
					</MDBBtn>
				</MDBFooter>
			</MDBModal>
		</>
	)
}

ElementoTienda.propTypes = {
	datos: PropTypes.shape({
		precio: PropTypes.number,
		id: PropTypes.number,
	}),
	tipo: PropTypes.string,
}

export default ElementoTienda

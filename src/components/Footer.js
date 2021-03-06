import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'
import './Footer.css'

/**
 * Pie de página de la aplicación, muestra el copyright, el
 * nombre del grupo y un enlace a el github de la organización.
 */
const Footer = () => {
	return (
		<MDBFooter fixed="bottom" className="font-small pt-3 footer">
			<MDBContainer fluid className="text-center">
				<h5 className="title">Proyecto software - Risk multiplataforma</h5>
			</MDBContainer>
			<div className="footer-copyright text-center py-2">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{' '}
					<a href="https://github.com/UNIZAR-30226-2021-01">
						{' '}
						Grupo 1: Grace Hopper{' '}
					</a>
				</MDBContainer>
			</div>
		</MDBFooter>
	)
}

export default Footer

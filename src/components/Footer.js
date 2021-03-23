//import { Link } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
/**
 * Pie de página de la aplicación, muestra el copyright y el
 * nombre del grupo. 
 */
const Footer = () => {
	return (
		<MDBFooter color="blue" className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
				<MDBCol md="6">
					<h5 className="title">Proyecto software - Risk multiplataforma</h5>
					<p>

					</p>
				</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
				&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/UNIZAR-30226-2021-01"> Grupo 1: Grace Hopper </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	)
}

export default Footer
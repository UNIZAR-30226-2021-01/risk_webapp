//import { Link } from 'react-router-dom'
import { MDBContainer, MDBFooter } from "mdbreact";
/**
 * Pie de página de la aplicación, muestra el copyright y el
 * nombre del grupo. 
 */
const Footer = () => {
	return (
		<MDBFooter fixed="bottom" color="blue" className="font-small pt-3 mt-4">
			<MDBContainer fluid className="text-center">
				<h5 className="title">Proyecto software - Risk multiplataforma</h5>
			</MDBContainer>
			<div className="footer-copyright text-center py-2">
				<MDBContainer fluid>
				&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/UNIZAR-30226-2021-01"> Grupo 1: Grace Hopper </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	)
}

export default Footer
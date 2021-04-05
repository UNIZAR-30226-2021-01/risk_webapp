import React from 'react'
import AuthApi from 'utils/AuthApi'
import { obtenerAmigos, obtenerNotificaciones } from 'utils/restAPI'
import { obtenerCredenciales } from 'utils/usuarioVO'

export const ListaAmigosSala = ({ ws }) => {
	const Auth = useContext(AuthApi)

	const [amigos, setAmigos] = useState([])

	useEffect(() => {
		const data = fetchAmigos()
		setAmigos(data)
	}, [])

	const fetchAmigos = async () => {
		const nuestraInfo = obtenerCredenciales(Auth)
		const dataAmigos = await obtenerAmigos(nuestraInfo)
		setAmigos(dataAmigos.amigos)
	}

	return (
		<MDBContainer className="mt-9">
			<MDBListGroup style={{ width: '18.5rem' }}>
				{amigos.map((usuario) => (
					<MDBListGroupItem key={usuario.id.toString()}>
						<Amigo datos={usuario} elemento={<InvitarAmigo />} ws={ws} />
					</MDBListGroupItem>
				))}
			</MDBListGroup>
		</MDBContainer>
	)
}

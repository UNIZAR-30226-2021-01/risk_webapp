import React, {useContext} from 'react'
import AuthApi from "./AuthApi"
import {
	Link 
} from "react-router-dom"

/**
 * 
 * @todo Todo
 */
export const InicioSesion = () => {
	const Auth = useContext(AuthApi)

    return (
        <div>
            <h2> Iniciar sesión</h2>
           <Link to='/registro'> Volver al registro </Link>
        </div>
    )
}

export default InicioSesion;

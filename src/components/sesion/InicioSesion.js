import React, {useContext} from 'react';
import AuthApi from "./AuthApi";
import FormInicio from "./FormInicio";
import Cookies from 'js-cookie';
import constants from './../../constants.js';
import qs from 'qs';
import {
	Link 
} from "react-router-dom"
import { MDBContainer } from "mdbreact"

/**
 * Inicio de sesion, si el loggeo es correcto añade las cookies de sesión
 * al cliente y en el contexto de la aplicación
 * @requires FormInicio
 * @todo Gestión de los posibles errores del servidor
 * @todo Comprobar si realmente es necesario añadirlo al contexto de la aplicación
 */
const InicioSesion = () => {
	const Auth = useContext(AuthApi)

    /**
     * Hace una petición al server de inicio de sesión con los datos recibidos como parámetro
     * @param {datos_usuario} formData Contiene los datos necesarios para el inicio de sesión
     * de un usuario en el servidor (nombre o correo del usuario y su clave correspondiente)
     * @returns Respuesta recibida a la petición de inicio de sesión en JSON
     * @todo testear conexion con el servidor
     */
    const iniciarServer = async(formData) =>{
        console.log(formData)
        const url = `${constants.BASE_SERVER_URL}iniciarSesion`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify(formData)
        }
        const res = await fetch(url, options)
        const data = await res.json()
        console.log(data, "JSON recibido de iniciar sesión")
        return data
    }

    /**
     * Realiza la petición al server y en función de los valores obtenidos lo establece
     * en el contexto y las cookies o muestra un mensaje de error.
     * @param {datos_usuario} formData Contiene los datos proporcionados por el servidor
     * de un usuario 
     */
    const iniciar = (formData) =>{
        formData.logged=true
        Auth.setAuth(formData)
        Cookies.set(constants.COOKIE_USER, formData, { expires: 7, sameSite: "lax"})
    }


    return (
        <MDBContainer className="d-flex align-items-center flex-column">
            <h2> Iniciar sesión</h2>
            <FormInicio defaults={constants.NULL_VALUES} submitText='Aceptar' makePetition={iniciarServer} siValido={iniciar} />
            <p>¿No tienes cuenta?<Link to='/registro'> Regístrate </Link></p>
        </MDBContainer>
    )
}

export default InicioSesion;

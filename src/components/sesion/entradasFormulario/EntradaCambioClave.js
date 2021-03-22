import React from 'react'

/**
 * EntradaCambioClave es un campo de formulario para decir que quieres
 * cambiar la clave
 * @param {string} titulo Etiqueta para el cambio
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro 
 */
export const EntradaCambioClave = ({titulo, register, errors}) => {
    return (
        <div className="form-row">
        	<label htmlFor="cambioClave"> {titulo}</label>
        	<input
        	  type="checkbox"
        	  name="cambioClave"
        	  id="cambioClave"
        	  ref={register()}
        	/>
        	{errors.cambioClave ? <div> {errors.cambioClave.message}</div> : null}
        </div>  
    )
}

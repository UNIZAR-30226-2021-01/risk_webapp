import React from 'react'

/**
 * EntradaClave es un campo de formulario para la clave
 * @param {string} titulo Etiqueta para la clave
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro 
 */
export const EntradaClave = ({titulo, register, errors}) => {
    return (
        <div className="form-row">
        	<label htmlFor="clave"> {titulo}</label>
        	<input
        	  type="password"
        	  name="clave"
        	  id="clave"
        	  placeholder="Contraseña"
        	  ref={register({
        	    required: "Este campo no se puede dejar vacío.",
				/*
        	    minLength: {
        	      value: 8,
        	      message: "Tiene que haber mínimo 8 caracteres.",
        	    },
        	    validate: (value) => {
        	      return (
        	        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
        	          pattern.test(value)
        	        ) ||
        	        "La contraseña debe incluir al menos una mayúscula, minúscula, un número y un carácter especial."
        	      );
        	    },
				*/
        	  })}
        	/>
        	{errors.clave ? <div> {errors.clave.message}</div> : null}
        </div>  
    )
}

import React from 'react'

export const EntradaClave = ({titulo, register, errors}) => {
    return (
		<React.Fragment>
        <div className="form-row">
        	<label htmlFor="clave"> {titulo}</label>
        	<input
        	  type="password"
        	  name="clave"
        	  id="clave"
        	  placeholder="Contraseña"
        	  ref={register({
        	    required: "Este campo no se puede dejar vacío.",
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
        	  })}
        	/>
        </div>  
		{errors.clave ? <div className="error"> {errors.clave.message}</div> : null}
		</React.Fragment>
    )
}

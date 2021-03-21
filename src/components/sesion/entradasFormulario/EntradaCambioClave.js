import React from 'react'

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

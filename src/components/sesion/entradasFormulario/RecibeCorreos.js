import React from 'react'

export const RecibeCorreos = ({register, errors}) => {
    return (
		<div className="form-row">
			<label htmlFor="recibeCorreos"> Quiero recibir correo: </label>
			<input
				type="checkbox"
				name="recibeCorreos"
				id="recibeCorreos"
				ref={register()}
			/>
		</div>
    )
}

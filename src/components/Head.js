import React from 'react'

/**
 * Contiene la cabecera html (<head>) de la aplicación, incluye
 * estilos y título de la aplicación.
 * @param {string} title Título de la web que aparecerá en la pestaña.
 */
export const Head = ({title}) => {
	return (
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			{/* Bootstrap core CSS 
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
 			*/}
			 {/* Custom Styles  
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
			*/}
			<title>{title}</title>
		</head>
	)
}

export default Head;

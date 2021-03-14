import React from 'react'
import Button from './Button'
import { useState, useEffect } from 'react'
import qs from 'qs'

export const Form2 = () => {
	const [inputT, setIt] = useState('');
	const [text, setText] = useState('');

	useEffect(() => {
		const getData = async() =>{
			const cosas = await fetchData('')
			setText(cosas)
		}
		getData()
	}, [])

	const fetchData = async(toWrite) =>{
		console.log('?');
		const dataH = {
			"dato": toWrite
		};
		console.log(toWrite);
		const url = 'https://fathomless-ridge-74437.herokuapp.com/pruebaPost';
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: qs.stringify(dataH)
		}
		const res = await fetch(url, options);
		const data = await res.json();
		setText(data.Cadena);
	}

	return (
		<>
		<h1> Valor enviado: </h1>
		<input 
			type='text'
			placeholder='Algo de texto' 
			value={inputT} 
			onChange={(e) => setIt(e.target.value)}/>

      <Button color='red' text='Enviar' onClick = {(inputT) => fetchData(inputT)} ></Button>
		<h1> Valor obtenido: </h1>
		<p>{text}</p>
	</>
	);
}

export default Form2
import React from 'react'
import Button from './Button'
import { useState, useEffect } from 'react'
import qs from 'qs'

export const Form2 = () => {
  const [text, setText] = useState('algo');

  useEffect(() => {
    const getData = async() =>{
      const cosas = await fetchTasks()
      setText(cosas)
    }
    getData()
  }, [])

  const fetchTasks = async() =>{
    const dataH = {
      "dato":  "aaaaaaaa"
    };
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
    return data.Cadena;
  }

  return (
    <>
    <p>{text}</p>
  </>
  );
}

export default Form2
import React, { useState, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'


export default function ItemAdded(props) {

	return (
			<li>{props.item.nome} <button onClick={props.remove}>-</button>{props.item.quantidade}<button onClick={props.add}>+</button> <button id={props.id} onClick={props.onClick}>X</button></li>
	)
}

// <li key={i}>{i}<a onClick={trash}> <span  id={i} role="img" aria-label="botão de retirar item da lista">&#128465;</span></a></li>



const style = StyleSheet.create({
	trash: {
		cursor: 'pointer'
	}
})
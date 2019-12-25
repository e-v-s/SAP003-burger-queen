import React from 'react'


export default function ItemAdded(props) {

	return (
			<li>{props.item.nome} <button type="button" onClick={props.remove}>-</button>{props.item.quantidade}<button type="button" onClick={props.add}>+</button> <button type="button" id={props.id} onClick={props.onClick}>X</button></li>
	)
}
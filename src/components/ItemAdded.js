import React from 'react'
import { StyleSheet, css }  from 'aphrodite'

export default function ItemAdded(props) {
	return (
			<li className={css(style.listItem)}>{props.item.nome} <button type="button" onClick={props.remove}>-</button>{props.item.quantidade}<button type="button" onClick={props.add}>+</button> <button type="button" id={props.id} onClick={props.onClick}>X</button></li>
	)
}

const style = StyleSheet.create({
	listItem: {
		listStyle: 'none',
		fontSize: '30px'
	}
})
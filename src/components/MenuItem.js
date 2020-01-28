import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const style = StyleSheet.create({
	food: {
		cursor: 'pointer',
		margin: '10px',
		border: '1px solid black',
		padding: '20px',
		fontSize: '20px',
		display: 'inline-flex',
	}
})

export default function MenuItem({...props}) {
	return (
		<button {...props} className={css(style.food)}>{props.item.nome} <span role="img" aria-label="emoji de hamburger">&#127828;</span> R$ {props.item.valor},00</button>
	)
}

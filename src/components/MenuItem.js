import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default function MenuItem({...props}) {
	return (
		<a {...props} className={css(style.food)}>{props.title} &#127828; R$ {props.value},00</a>
	)
}

const style = StyleSheet.create({
	food: {
		cursor: 'pointer',
		margin: '10px',
		border: '1px solid black',
		padding: '20px'
	}
})


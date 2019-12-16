import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default function	Button({...props}) {
	return (
		<button {...props} className={css(style.button)}></button>
	)
}

const style = StyleSheet.create({
	button: {
		color: '#000',
		textTransform: 'uppercase',
		textAlign: 'center',
		padding: '30px',
		backgroundColor: '#FEBB3E',
		borderRadius: '4px',
		width: '300px',
		fontWeight: 'bold'
	}
})
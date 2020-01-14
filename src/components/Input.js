import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const style = StyleSheet.create({
	input: {
		border: 'none',
		borderBottom: '1px solid #ed3936',
		margin: '20px',
		fontSize: '22px;',
		outline: 'none',
		width: '300px',
	}
})

export default function Input({...props}) {
	return (
		<input {...props} className={css(style.input)}></input>
	)
}

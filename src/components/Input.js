import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default function Input({...props}) {
	return (
		<input {...props} className={css(style.input)}></input>
	)
}

const style = StyleSheet.create({
	input: {
		border: 'none',
		borderBottom: '1px solid #ed3936',
		margin: '20px',
		fontSize: '22px;',
		outline: 'none',
	}
})


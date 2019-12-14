import React from 'react'
import Button from './Button.js'
import { StyleSheet, css } from 'aphrodite'

export default function Menu({children, ...props}) {
	return (
		<section {...props} className={css(style.menu)}>
			{children}
		</section>
	)
}

const style = StyleSheet.create({
	menu: {
		marginTop: '20px'
	}
})
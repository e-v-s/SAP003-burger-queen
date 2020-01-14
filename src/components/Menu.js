import React from 'react'
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
		display: 'flex',
		flexDirection: 'column',
		width: '300px',
		fontSize: '20px',
		fontWeight: 'bold'
	}
})

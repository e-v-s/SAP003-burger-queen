import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const style = StyleSheet.create({
	menu: {
		display: 'inline-flex',
		flexDirection: 'row',
		width: '100px',
		fontSize: '20px',
		fontWeight: 'bold',
		flexWrap: 'wrap'
	}
})

export default function Menu({children, ...props}) {
	return (
		<section {...props} className={css(style.menu)}>
			{children}
		</section>
	)
}

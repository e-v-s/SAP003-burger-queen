import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default function Header() {
	return (
		<header className={css(style.header)}>
			<img className={css(style.headerImg)} src='logo.png' alt='Logo do estabelecimento, onde está escrito Burger Queen' />
		</header>
	)
}

const style = StyleSheet.create({
	headerImg: {
		height: '200px',
		marginTop: '60px',
		display: 'flex',
		justifyContent: 'center'
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
})

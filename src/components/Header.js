import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
	headerImg: {
		height: '100px',
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

export default function Header() {
	return (
		<header className={css(style.header)}>
			<a href='/'><img className={css(style.headerImg)} src='logo.png' alt='Logo do estabelecimento, onde está escrito Burger Queen' /></a>
		</header>
	)
}

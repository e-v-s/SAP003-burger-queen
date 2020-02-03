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
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid #ED3936',
		width: '500px',
		paddingBottom: '50px',
	},
	center: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '20px',
	}
})

export default function Header() {
	return (
		<div className={css(style.center)}>
			<header className={css(style.header)}>
				<a href='/'><img className={css(style.headerImg)} src='logo.png' alt='Logo do estabelecimento, onde está escrito Burger Queen' /></a>
			</header>
		</div>
	)
}

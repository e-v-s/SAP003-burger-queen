import React, {useEffect, useState} from 'react'
import { db } from '../services/Firebase.js'
import { Link, useHistory } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

export default function MainPage(props) {
	return (
		<div className={css(styles.flex)}>
			<Link to={'/menu'} className={css(styles.link)}>Salão</Link>
			<Link to={'/kitchen'} className={css(styles.link)}>Cozinha</Link>
		</div>
	)
}

const styles = StyleSheet.create({
	link: {
		color: '#000',
		textDecoration: 'none',
		textTransform: 'uppercase',
		width: '300px',
		textAlign: 'center',
		padding: '10px',
		backgroundColor: '#FEBB3E',
		borderRadius: '4px',
		fontSize: '40px',
		marginTop: '20px',
		cursor: 'pointer'
	},
	flex: {
		display: 'flex',
		height: '300px',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}
})
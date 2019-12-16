import React, {useEffect, useState} from 'react'
import { db } from '../services/Firebase.js'
import { StyleSheet, css } from 'aphrodite'

import Button from '../components/Button.js'
import Input from '../components/Input.js'
import Menu from '../components/Menu.js'
import MenuItem from '../components/MenuItem.js'
import ItemAdded from '../components/ItemAdded.js'

export default function MenuPage(props) {

	const [menu, setMenu] = useState([])
	const [tipoDeMenu, setTipoDeMenu] = useState('cafe')
	const [order, setOrder] = useState('')

	useEffect(() => {
		db.collection('menu').get().then(snap => {
			const menu = snap.docs.map(doc => doc.data())
			setMenu(menu)
		}).catch(err => err)
	}, [])
	
	const showMenu = (e) => {
		setTipoDeMenu(e.target.id)
	}

	let listOfItemsOrdered = []
	const addToList = (id) => {
		console.log(id)	
	}

	return (
		<div>
			<form className={css(style.inputSection)}>		
				<Input type='text' id='costumer-name' placeholder='Nome do Cliente' required/>
				<Input type='number' id='costumer-number' placeholder='Número da mesa' required />
			</form>
			<section className={css(style.buttonMenu)}>
				<Button children='Café da Manhã' id='cafe' onClick={showMenu} />
				<Button children='Lanches' id='lanche' onClick={showMenu} />
			</section>
			{['cafe', 'lanche'].filter(m => m === tipoDeMenu).map(categoria => 
					<Menu children={
						menu.filter(i => i.categoria === categoria).map(i => 
							<MenuItem key={'dsadsadas'} onClick={() => addToList(i)}
							title={i.nome} value={i.valor} />
							)
					}/>
				)
			}
		</div>
	)
}

const style = StyleSheet.create({
	inputSection: {
		display: 'flex',
		marginTop: '60px',
		flexDirection: 'column',
		width: '350px',
		margin: '0 auto',
		paddingTop: '50px'
	},
	buttonMenu: {
		display:  'flex',
		justifyContent:  'center',
		marginTop: '30px',
	},
	menuBurgersAndType: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	menuBurgersOnly:{
		display: 'flex',
		flexDirection: 'column'
	},
	menuBurgerTypeOnly: {
	}
})
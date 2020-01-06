import React, { useEffect, useState } from 'react'
import { db } from '../services/Firebase.js'
import { StyleSheet, css } from 'aphrodite'
import firebase from 'firebase'

import Button from '../components/Button.js'
import Input from '../components/Input.js'
import Menu from '../components/Menu.js'
import MenuItem from '../components/MenuItem.js'
import ItemAdded from '../components/ItemAdded.js'

export default function MenuPage(props) {

	const [menu, setMenu] = useState([])
	const [tipoDeMenu, setTipoDeMenu] = useState('cafe')
	const [order, setOrder] = useState([])
	const [name, setName] = useState('')
	const [table, setTable] = useState(0)
	
	
	useEffect(() => {
		db.collection('menu').get().then(snap => {
			const menu = snap.docs.map(doc => doc.data())
			setMenu(menu)
		}).catch(err => err)
	}, [])

	const showMenu = (e) => {
		setTipoDeMenu(e.target.id)
	}

	const addToList = (item) => {	
		const itemIndex = order.findIndex(orderItem => orderItem.nome === item.nome);
		if (itemIndex === -1) {
			setOrder([...order, {...item, quantidade: 1}])
		} else {
			order[itemIndex].quantidade++
			setOrder([...order])
		}
 	}

	const trash = (item) => {
		const itemIndex = order.findIndex(orderItem => orderItem.nome === item.nome);
		order.splice(itemIndex, 1)
		setOrder([...order])
	}

	const adiciona=(item) => {
		const itemIndex = order.findIndex(orderItem => orderItem.nome === item.nome)
		order[itemIndex].quantidade++
		setOrder([...order])
	}

	const remove = (item) => {
		const itemIndex = order.findIndex(orderItem => orderItem.nome === item.nome)
		order[itemIndex].quantidade--
		setOrder([...order])
	}

	const totalValue = order.reduce((acc, cur) => acc + (cur.valor * cur.quantidade), 0)
	
	const sendToFirebase = (e) => {
		e.preventDefault()		
		const pedido = {
			nomeDoCliente: name,
			numeroDaMesa: table,
			pedido: order.map(i => `${i.nome}, quantidade: ${i.quantidade}`)
		}
		if (window.confirm(`Enviar pedido \nCliente ${pedido.nomeDoCliente} \nMesa ${pedido.numeroDaMesa} \nResumo \n${pedido.pedido}?`)) {
			db.collection('pedidos').add({
				nomeDoCliente: name,
				numeroDaMesa: table,
				pedido: order.map(i => `${i.nome}, ${i.quantidade}`),
				hora: firebase.firestore.FieldValue.serverTimestamp(),
				status: 'Pendente'
			}).then(() => window.location.reload())			
		}
	}

	return (
		<div>
		<section className={css(style.exemplo)}>
			<form className={css(style.inputSection)} onSubmit={sendToFirebase}>		
				<Input type='text' id='costumer-name' placeholder='Nome do Cliente' name='client' onChange={(e) => setName(e.target.value)} />
				<Input type='number' id='costumer-number' placeholder='Número da mesa' name='table' onChange={(e) => setTable(e.target.value)} />
				<ul id='order-list'>
					{
						order.map((item, index) => <ItemAdded key={index} item={item} remove={()=> remove(item)} onClick={() => trash(item)} add={()=> adiciona(item)} name='order' />)
					}
				</ul>
				<p className={css(style.total)}>Total: {totalValue}</p>
				<Button children='Enviar pedido' id='enviar-pedido' value='Submit' type='submit' />
			</form>			
			<section className={css(style.buttonMenu)}>
				<Button children='Café da Manhã' id='cafe' onClick={showMenu} />
				<Button children='Lanches' id='lanche' onClick={showMenu} />
				{
					['cafe', 'lanche'].filter(m => m === tipoDeMenu).map(categoria => 
						<Menu key={Math.random()} children={
							menu.filter(i => i.categoria === categoria).map(i => i.nome === 'Burger simples' || i.nome === 'Burger duplo' ? <MenuItem onClick={() => {addToList(i); openExtras()}} item={i} key={i.nome} /> : <MenuItem onClick={() => addToList(i)} item={i} key={i.nome} />
								)
					}/>)
				}
			</section>
		</section>
		</div>
	)
}

const style = StyleSheet.create({
	inputSection: {
		display: 'flex',
		marginTop: '30px',
		flexDirection: 'column',
		width: '400px',
		paddingTop: '50px',
		order: '2',
		marginRight: '60px',
		alignContent: 'flex-start'
	},
	buttonMenu: {
		display:  'flex',
		marginTop: '90px',
		flexDirection: 'column',
		marginLeft:'60px',
		order: '1',
	},
	exemplo: {
		display: 'flex',
		justifyContent: 'space-around',
		'@media (max-width: 900px)': {
			width: '900px',
		}
	},
	total: {
		fontSize: '20px'
	},
	overlay: {
		zIndex: '98',
	  position: 'fixed',
	  top: '0',
	  right: '0',
	  bottom: '0',
	  left: '0',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  height: '100%',
	  width: '100%',
	  backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
	modal: {
		zIndex: '99',
	}
})
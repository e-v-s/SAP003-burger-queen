import React, {useEffect, useState, useRef} from 'react'
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
	const [order, setOrder] = useState([])
	const [price, setPrice] = useState(0)

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
		} else{
			order[itemIndex].quantidade++
			setOrder(order);
		}
		//setOrder([`${item.target.title} R$ ${item.target.id},00`])
 	}

	const trash = (item) => {
		const itemIndex = order.findIndex(orderItem => orderItem.nome === item.nome);
		order.splice(itemIndex, 1);
		setOrder(order)
	}

	const adiciona=(item) => {

		console.log(item)
	}

	const totalValue = order.reduce((acc, cur) => acc + (cur.valor * cur.quantidade), 0);
	return (
		<div>
		<section className={css(style.exemplo)}>
			<form className={css(style.inputSection)}>		
				<Input type='text' id='costumer-name' placeholder='Nome do Cliente' required/>
				<Input type='number' id='costumer-number' placeholder='Número da mesa' required />
				<ul id='order-list'>
					{
						order.map((item, index) => <ItemAdded key={index} item={item} remove={()=> {}}onClick={() => trash(item)} add={()=> adiciona(item)}/>)
					}
				</ul>
				<p>Total: {totalValue}</p>
			</form>			
			<section className={css(style.buttonMenu)}>
				<Button children='Café da Manhã' id='cafe' onClick={showMenu} />
				<Button children='Lanches' id='lanche' onClick={showMenu} />
			</section>
		</section>
			{
				['cafe', 'lanche'].filter(m => m === tipoDeMenu).map(categoria => 
					<Menu key={Math.random()} children={
						menu.filter(i => i.categoria === categoria).map(i => 
							<MenuItem onClick={() => addToList(i)} item={i} key={i.nome} />
							)
				}/>)
			}
		</div>
	)
}

const style = StyleSheet.create({
	divPage: {
	},
	inputSection: {
		display: 'flex',
		marginTop: '30px',
		flexDirection: 'column',
		width: '300px',
		paddingTop: '50px',
		justifyContent: 'flex-end',
		order: '2'
	},
	buttonMenu: {
		display:  'flex',
		marginTop: '30px',
		flexDirection: 'column',
		marginLeft:'60px',
		order: '1'
	},
	exemplo: {
		width: '900px',
		display: 'flex',
		justifyContent: 'space-between',
	}
})
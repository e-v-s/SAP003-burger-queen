import React, { useEffect, useState } from 'react'
import { db } from '../services/Firebase.js'
import { StyleSheet, css } from 'aphrodite'
import firebase from 'firebase'
import alertify from 'alertifyjs'

import Button from '../components/Button.js'
import Input from '../components/Input.js'
import Menu from '../components/Menu.js'
import MenuItem from '../components/MenuItem.js'
import ItemAdded from '../components/ItemAdded.js'
import Modal from '../components/ModalBurger.js'

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
	}, 
	orders: {
		cursor: 'pointer',
		margin: '10px',
		border: '1px solid black',
		padding: '20px',
		background:'#ff4d4d',
		fontSize: '20px',
		width: '120px',
		flexWrap: 'wrap'
	},
	orderSection: {
		display:'flex',
		justifyContent: 'center',
		marginTop: '20px',
	}
})

export default function MenuPage(props) {
	const [menu, setMenu] = useState([])
	const [menuType, setMenuType] = useState('cafe')
	const [order, setOrder] = useState([])
	const [name, setName] = useState('')
	const [table, setTable] = useState(0)
	const [modal, setModal] = useState(false)
	const [extra, setExtra] = useState({})
	const [ordersOk, setOrdersOk] = useState([])
	let totalValue = order.reduce((acc, cur) => acc + (cur.valor * cur.quantidade), 0)
	
	useEffect(() => {
		db.collection('menu').get().then(snap => {
			const menu = snap.docs.map(doc => doc.data())
			setMenu(menu)
		}).catch(err => err)
	}, [])
	useEffect(() => {
		db.collection('extra').get().then(snap => {
			const extra = snap.docs.map(doc => doc.data())
			setExtra(extra)
		}).catch(err => err)
	}, [])
	useEffect(() => {
		db.collection('pedidos').orderBy("hora", "desc").onSnapshot(snap => {
			const ordersOk = snap.docs.map(doc => [doc.id, doc.data()])
			setOrdersOk(ordersOk)
		})
	}, [])

	const showMenu = (e) => {
		setMenuType(e.target.id)
	}
	const addToList = (item) => {	
		const itemIndex = order.findIndex(orderItem => orderItem.nome === item.nome);
		if (itemIndex === -1) {
			setOrder([...order, {...item, quantidade: 1, tipo:'', extra:''}])
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
	const add = (item) => {
		const itemIndex = order.findIndex(orderItem => orderItem.nome === item.nome)
		order[itemIndex].quantidade++
		setOrder([...order])
	}
	const remove = (item) => {
		const itemIndex = order.findIndex(orderItem => orderItem.nome === item.nome)
		order[itemIndex].quantidade--
		setOrder([...order])
	}
	const sendToFirebase = (e) => {
		e.preventDefault()		
		if (alertify.success('Pedido enviado')) {
				db.collection('pedidos').add({
				nomeDoCliente: name,
				numeroDaMesa: table,
				pedido: order.map(i => `${i.nome}, ${i.tipo}, ${i.extra}, ${i.quantidade}`),
				hora: firebase.firestore.FieldValue.serverTimestamp(),
				status: 'Pendente'
				}).then(() => window.location.reload())				
		}
	}
	const updateExtras = (burger, ovoOuQueijo) => {
		setOrder([...order, {nome:'', tipo: burger, extra: `com ${ovoOuQueijo}`, quantidade:1, valor: 1}])
	}
	const orderDelivered = (item) => {
		const update = db.collection('pedidos').doc(`${item}`)
		update.get().then(snap => snap.ref.update({status: 'Entregue'}))
	}

	return (
		<div>
      {
      	modal && (
      	<Modal      		
          option={extra}
          extra={'teste'}
          onClose={(burger, ovoOuQueijo) => {setModal(false); updateExtras(burger, ovoOuQueijo)}}
        />)
      }
      <section className={css(style.orderSection)}>
	      {
	      	ordersOk.map((i, index) => i[1].status === 'Pronto' ? <button className={css(style.orders)} type='button' onClick={() => orderDelivered(i[0])} key={index}>Mesa {i[1].numeroDaMesa}<br/><span>{i[1].nomeDoCliente}</span><br/><span>{i[1].status}</span></button> : null)
	      }
      </section>
			<section className={css(style.exemplo)}>
				<form className={css(style.inputSection)} onSubmit={sendToFirebase}>		
					<Input type='text' id='costumer-name' placeholder='Nome do Cliente' name='client' onChange={(e) => setName(e.target.value)} />
					<Input type='number' id='costumer-number' placeholder='Número da mesa' name='table' onChange={(e) => setTable(e.target.value)} />
					<ul id='order-list'>
						{
							order.map((item, index) => <ItemAdded key={index} item={item} remove={()=> remove(item)} onClick={() => trash(item)} add={()=> add(item)} name='order' />)
						}
					</ul>
					<p className={css(style.total)}>Total: {totalValue}</p>
					<Button children='Enviar pedido' id='enviar-pedido' value='Submit' type='submit' />
				</form>			
				<section className={css(style.buttonMenu)}>
					<Button children='Café da Manhã' id='cafe' onClick={showMenu} />
					<Button children='Lanches' id='lanche' onClick={showMenu} />
					{
						['cafe', 'lanche'].filter(m => m === menuType).map(categoria => 
							<Menu key={Math.random()} children={
								menu.filter(i => i.categoria === categoria).map(i => i.nome === 'Burger simples' || i.nome === 'Burger duplo' ? <MenuItem onClick={() => {addToList(i); setModal(true)}} item={i} key={i.nome} /> : <MenuItem onClick={() => addToList(i)} item={i} key={i.nome} />
									)
						}/>)
					}
				</section>
			</section>
		</div>
	)
}

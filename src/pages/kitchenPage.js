import React, { useEffect, useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { db } from '../services/Firebase.js'
import firebase from 'firebase'

import OrderItem from '../components/OrderItem.js'

export default function KitchenPage() {	
	const [orders, setOrders] = useState([])

	useEffect(() => {
		db.collection('pedidos').orderBy("hora", "desc").onSnapshot(snap => {
			const orders = snap.docs.map(doc => doc.data())
			setOrders(orders)
		})
	}, [])

	const orderOk = (item) => {
		const update = db.collection('pedidos').where('pedido', '==', item.pedido)
		update.onSnapshot(snap => snap.forEach(doc => doc.ref.update({status: 'Pronto', horaQueFicouPronto: firebase.firestore.FieldValue.serverTimestamp()})))
	}

	return (
		<div>
			<h1 className={css(style.size)}>Pedidos</h1>
			<ul className={css(style.listaDePedidos)}>
				{
					orders.map((item, index) => item.status === 'Pendente' ? <OrderItem item={item} key={index} pedido={item} onClick={() => orderOk(item)} /> : null)
				}
			</ul>
		</div>
	)
}

const style = StyleSheet.create({
	listaDePedidos: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly'
	},
	size: {
		textAlign: 'center'
	}
})

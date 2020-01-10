import React, { useEffect, useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { db } from '../services/Firebase.js'

import OrderItem from '../components/OrderItem.js'

export default function KitchenPage() {
	
	const [pedidos, setPedidos] = useState([])

	useEffect(() => {
		db.collection('pedidos').orderBy("hora", "desc").get().then(snap => {
			const pedidos = snap.docs.map(doc => doc.data())
			setPedidos(pedidos)
		}).catch(err => err)
	})

	const pedidoPronto = (item) => {
		const update = db.collection('pedidos').where('pedido', '==', item.pedido)
		update.get().then(snap => snap.forEach(doc => doc.ref.update({status: 'Pronto'})))
		setPedidos([...pedidos])
	}

	return (
		<div>
			<h1 className={css(style.size)}>Pedidos</h1>
			<ul className={css(style.listaDePedidos)}>
				{
					pedidos.map((item, index) => item.status !== 'Pronto' ? <OrderItem item={item} key={index} pedido={item} onClick={() => pedidoPronto(item)} /> : null)
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
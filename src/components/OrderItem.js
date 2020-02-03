import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const style = StyleSheet.create({
	pedido: {
		listStyle: 'none',
		display: 'inline-flex',
		flexDirection: 'column',
		border: '1px solid #000',
		width: '200px',
		padding: '10px',
		margin: '10px',
	},
	size: {
		fontSize: '20px',
		lineHeight: '2px',
		margin: '15px'
	}	
})

const OrderItem = (props) => {
	return (
		<li className={css(style.pedido)} key={props.item.key}>
			<p className={css(style.size)}>Cliente: {props.item.nomeDoCliente}</p>
			<p className={css(style.size)}>Mesa: {props.item.numeroDaMesa}</p>
			{
				props.pedido.pedido.map((item, index) => <p className={css(style.size)} key={index}>{item.replace(/,/g, '')}</p>)
			}
			<button className={props.className} onClick={props.onClick}>{props.item.status}</button>			
		</li>
	)
}

export default OrderItem

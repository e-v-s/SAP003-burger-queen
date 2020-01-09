import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const OrderItem = (props) => {
	return (
		<li className={css(style.pedido)} key={props.item.key}>
			<p className={css(style.size)}>Cliente: {props.item.nomeDoCliente}</p>
			<p className={css(style.size)}>Mesa: {props.item.numeroDaMesa}</p>			
			{
				props.pedido.pedido.map((item, index) => <p className={css(style.size)} key={index}>{item}</p>)
			}
			{
				props.pedido.extra ? props.pedido.extra.map((item) => <p className={css(style.size)}>Extra: {item}</p>) : null
			}
			{
				props.pedido.tipoDeBurger ? props.pedido.tipoDeBurger.map((item) => <p className={css(style.size)}>Tipo de Burger: {item}</p>) : null
			}		
			<button className={css(style.btnPedido)} onClick={props.onClick}>{props.item.status}</button>			
		</li>
	)
}

export default OrderItem

const style = StyleSheet.create({
	pedido: {
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'column',
		border: '1px solid #000',
		width: '300px',
		padding: '10px',
		marginTop: '5px',
	},
	size: {
		fontSize: '20px',
		lineHeight: '2px',
		margin: '15px'
	},
	btnPedido: {
		width: '300px',
		height: '80px',
		fontSize: '30px',
		backgroundColor: '#fff',
		color: 'red',
		fontWeight: 'bold'
	}
})
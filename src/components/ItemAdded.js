import React from 'react'
import { StyleSheet, css }  from 'aphrodite'

const style = StyleSheet.create({
	listItem: {
		listStyle: 'none',
		fontSize: '30px'
	},
	sizeMin: {
		fontSize: '20px',
	}
})

export default function ItemAdded(props) {
	return (			
				props.item.tipo || props.item.extra ? 
				<li className={css(style.listItem)}>
				<p>{props.item.nome}</p>
				<p className={css(style.sizeMin)}>{props.item.tipo}</p>
				<p className={css(style.sizeMin)}>{props.item.extra}</p>
				<button type="button" id={props.id} onClick={props.onClick}>X</button>
			</li> : <li className={css(style.listItem)}>
				<p>{props.item.nome}</p>
				<p className={css(style.sizeMin)}>{props.item.tipo}</p>
				<button type="button" onClick={props.remove}>-</button>  {props.item.quantidade}  <button type="button" onClick={props.add}>+</button> <button type="button" id={props.id} onClick={props.onClick}>X</button>
			</li>			
	)
}

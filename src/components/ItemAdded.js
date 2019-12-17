import React, { useState, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'


export default function ItemAdded({children, ...props}) {

	return (
			<li {...props}>{children} <a className={css(style.trash)} onClick={() => props.onClick}><span  id={props.id} role="img" aria-label="botão de retirar item da lista">&#128465;</span></a></li>
	)
}

// <li key={i}>{i}<a onClick={trash}> <span  id={i} role="img" aria-label="botão de retirar item da lista">&#128465;</span></a></li>

const style = StyleSheet.create({
	trash: {
		cursor: 'pointer'
	}
})
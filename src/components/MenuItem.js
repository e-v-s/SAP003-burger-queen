import React from 'react';

export default function MenuItem({...props}) {
	return (
		<button {...props} className={props.className}>{props.item.nome} <span role="img" aria-label="emoji de hamburger">&#127828;</span> R$ {props.item.valor},00</button>
	)
}

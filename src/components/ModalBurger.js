import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { StyleSheet, css } from 'aphrodite'
import { db } from '../services/Firebase.js'

const Modal = (props) => {
	const [extra, setExtra] = useState({})
	const [extraSelect, setExtraSelect] = useState(false)
	


	useEffect(() => {
		db.collection('extra').get().then(snap => {
			const extra = snap.docs.map(doc => doc.data())
			setExtra(extra)
			console.log(extra[0].carne)
		}).catch(err => err)
	}, [])

	return(
		<div className={css(style.modalOverlay)}>
		<form>
      <div className={css(style.modal)}>
      	<h1>Burger</h1>
      	{props.options}
        <h1>Extras</h1>
        {props.extra}
        <button type="button" onClick={props.onClose}>OK</button>
      </div>
      </form>
    </div>
	)
}

export default Modal

const style = StyleSheet.create({
	modalOverlay: {
		alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: 'rgba(0, 0, 0, 0.65)',
	  display: 'flex',
	  padding: '1em',
	  position: 'fixed',
	  top: '0',
	  left: '0',
	  height: '100%',
	  width: '100%',
	},
	modal: {
		backgroundColor: 'white',
	  borderRadius: '3px',
	  padding: '2rem 3rem',
	  textAlign: 'center',
	}
})
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { StyleSheet, css } from 'aphrodite'

const Modal = ({ title, content, onClose }) => {
	return(
		<div className={css(style.modalOverlay)}>
      <div className={css(style.modal)}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>X</button>
      </div>
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
import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Button, Form } from 'semantic-ui-react'

const Modal = (props) => {
	const [burger, setBurger] = useState('')
	const [ovoOuQueijo, setOvoOuQueijo] = useState('')

	return(
		<div className={css(style.modalOverlay)}>
      <div className={css(style.modal)}>
			<Form>
      	<h1>Burger</h1>
      	{
      		props.option[0].carne.map((item, index) => <Form.Radio label={item} checked={burger === item} key={index} onClick={() => setBurger(item)}  value={item}/>)
      	}
        <h1>Extras</h1>
        {
        	props.option[0].extra.nome.map((item, index) => <Form.Radio label={item} checked={ovoOuQueijo === item} key={index} onClick={() => setOvoOuQueijo(item)}  value={item}/>)
        }
        <br/>
        <Button type="button" onClick={() => burger || ovoOuQueijo ? props.onClose(burger, ovoOuQueijo) : props.onClose()}>OK</Button>
      </Form>
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
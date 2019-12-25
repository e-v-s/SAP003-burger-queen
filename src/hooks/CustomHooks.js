import React, { useState } from 'react'

const useSendOrderForm = (callback) => {
	const [formValues, setFormValues] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault()
		callback()
	}
	
	const handleChange = (e) => {
		e.persist()
		setFormValues(...formValues, e.target.value)
	}

	return {
		handleSubmit,
		handleChange,
		formValues
	}
}

export default useSendOrderForm	
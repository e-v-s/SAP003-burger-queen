import React, { useState, useEffect } from 'react'


export default function ItemAdded({children, ...props}) {

	return (
			<li {...props}>{children}</li>
	)
}

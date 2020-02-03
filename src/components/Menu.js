import React from 'react';

export default function Menu({children, ...props}) {
	return (
		<section {...props} className={props.className}>
			{children}
		</section>
	)
}

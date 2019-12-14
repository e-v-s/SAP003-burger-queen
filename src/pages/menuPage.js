import React, {useEffect, useState} from 'react'
import { db } from '../services/Firebase.js'
import { StyleSheet, css } from 'aphrodite'

import Button from '../components/Button.js'
import Input from '../components/Input.js'
import Menu from '../components/Menu.js'
import MenuItem from '../components/MenuItem.js'

export default function MenuPage(props) {

	const [menu, setMenu] = useState('')
	const [tipoDeMenu, setTipoDeMenu] = useState('menu-cafe')

	useEffect(() => {
		db.collection('menu_cafe').get().then(snap => { snap.forEach(doc => setMenu(doc.data()))}).catch(err => err)
	}, [])
	
	const showMenu = (e) => {
		if (e.target.id === 'breakfast') {
			setTipoDeMenu('menu-cafe')
		} else {
			setTipoDeMenu('menu-dia')
		}
	}

	return (
		<div>
			<section className={css(style.inputSection)}>		
				<Input type='text' id='costumer-name' placeholder='Nome do Cliente' required/>
				<Input type='number' id='costumer-number' placeholder='Número da mesa' required />
			</section>
			<section className={css(style.buttonMenu)}>
				<Button children={'Café da Manhã'} id={'breakfast'} onClick={showMenu} />
				<Button children={'Lanches'} onClick={showMenu} />
			</section>
			{
				tipoDeMenu === 'menu-cafe' ? 
				<Menu children={
					<section className={css(style.menuBreakfast)}>
						<MenuItem onClick={() => console.log('funciona')}
						title={menu.cafe_americano && menu.cafe_americano.nome} value={menu.cafe_americano && menu.cafe_americano.valor} />
						<MenuItem title={menu.cafe_com_leite && menu.cafe_com_leite.nome} value={menu.cafe_com_leite && menu.cafe_com_leite.valor} />
						<MenuItem title={menu.misto && menu.misto.nome} value={menu.misto && menu.misto.valor} />
						<MenuItem title={menu.suco && menu.suco.nome} value={menu.suco && menu.suco.valor} />
					</section>}
				/> : 
				<Menu children={
					<>
						<section className={css(style.menuBurgersAndType)}>
							<section className={css(style.menuBurgersOnly)}>
								<MenuItem title={menu.burger && menu.burger.simples.nome} value={menu.burger && menu.burger.simples.valor} />
								<MenuItem title={menu.burger && menu.burger.duplo.nome} value={menu.burger && menu.burger.duplo.valor} />
							</section>
							<section className={css(style.menuBurgerTypeOnly)}>
								<Input type='radio' value={menu.burger && menu.burger.tipo && menu.burger.tipo.bovino} />
								<label children={menu.burger && menu.burger.tipo && menu.burger.tipo.bovino}/>
								<Input type='radio' value={menu.burger && menu.burger.tipo && menu.burger.tipo.frango} />
								<label children={menu.burger && menu.burger.tipo && menu.burger.tipo.frango}/>
								<Input type='radio' value={menu.burger && menu.burger.tipo && menu.burger.tipo.veggie} />
								<label children={menu.burger && menu.burger.tipo && menu.burger.tipo.veggie}/>
							</section>
						</section>
						<MenuItem title={menu.acompanhamento && menu.acompanhamento.nome} value={menu.acompanhamento && menu.acompanhamento.valor} />
						<Input type='radio' value={menu.acompanhamento && menu.acompanhamento.batata} />
						<label children={menu.acompanhamento && menu.acompanhamento.batata}/>
						<Input type='radio' value={menu.acompanhamento && menu.acompanhamento.cebola} />
						<label children={menu.acompanhamento && menu.acompanhamento.cebola}/>
						<p>{menu.bebidas && menu.bebidas.nome}</p>
					</>} 
				/>
			}
		</div>
	)
}

const style = StyleSheet.create({
	inputSection: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '60px',
	},
	buttonMenu: {
		display:  'flex',
		justifyContent:  'center',
		marginTop: '30px',
	},
	menuBreakfast: {
		display: 'flex',
		flexDirection: 'column',
		width: '300px',
		marginLeft: '60px',
	},
	menuBurgersAndType: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	menuBurgersOnly:{
		display: 'flex',
		flexDirection: 'column'
	},
	menuBurgerTypeOnly: {
	}
})
import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { db } from '../services/Firebase.js';
import firebase from 'firebase';

import OrderItem from '../components/OrderItem.js';
import Button from '../components/Button.js';

const style = StyleSheet.create({
  listaDePedidos: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '650px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  size: {
    textAlign: 'center'
  },
  btnPedido: {
    width: '200px',
    height: '80px',
    fontSize: '30px',
    backgroundColor: '#fff',
    color: 'red',
    fontWeight: 'bold',
  },
  pronto: {
    width: '200px',
    height: '80px',
    fontSize: '30px',
    backgroundColor: '#fff',
    color: 'green',
    fontWeight: 'bold'
  }
});

export default function KitchenPage() { 
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection('pedidos').orderBy("hora", "desc").onSnapshot(snap => {
      const orders = snap.docs.map(doc => doc.data());
      setOrders(orders);
    });
  }, []);

  const orderOk = (item) => {
    const update = db.collection('pedidos').where('pedido', '==', item.pedido);
    update.onSnapshot(snap => snap.forEach(doc => doc.ref.update({status: 'Pronto', horaQueFicouPronto: firebase.firestore.FieldValue.serverTimestamp()})));
  };

  //const [time, setTime] =  useState('')

  const timeD = (item) => {
    // db.collection('pedidos').where('status', '==', 'Entregue').get().then(snap => snap.forEach(doc => {
    //  const hourOrdered = doc.data().hora.toDate()
    //  const hourDelivered = doc.data().horaQueFicouPronto.toDate()
    //  const difference = (hourDelivered - hourOrdered)
    //  const hours = Math.floor((difference / (1000*60*60))%24)
    //  const minutes = Math.floor((difference / (1000*60))%24) 
    //  const seconds = Math.floor((difference / 1000)%60)
    //  const time = `${hours}:${minutes}:${seconds}`
    //  console.log(item)
    //  setTime(time)
    // }))
  };

  const [orderType, setOrderType] = useState('pendente');

  return (
    <>
      <section className={css(style.buttons)}>
        <Button onClick={() => setOrderType('pendente')} children={'Pedidos pendentes'} />
        <Button onClick={() => setOrderType('pronto')} children={'Pedidos prontos'} />
      </section>
      <ul className={css(style.listaDePedidos)}>
        {
         orderType === 'pendente' ? orders.map((item, index) => item.status === 'Pendente' ? <OrderItem className={css(style.btnPedido)} item={item} key={index} pedido={item} onClick={() => {orderOk(item); timeD(item)}} /> : null) : orders.map((item, index) => item.status === 'Pronto' ? <OrderItem className={css(style.pronto)} item={item} key={index} pedido={item} onClick={() => {orderOk(item); timeD(item)}} /> : null)
        }
      </ul>
    </>
  )
};

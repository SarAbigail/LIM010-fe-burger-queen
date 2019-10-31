import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const PedidosCocina = () => {
	const [pedidos, setPedidos] = useState([]);

	const getPedidos = () => {
		firebase.firestore().collection("orden")
			.where('estado', '==', 'pendiente')
			.orderBy('hora', 'asc')
			.get()
			.then(dato => {
				const array = [];
				dato.forEach(doc => {
					array.push({id:doc.id, ...doc.data()});
				});
				setPedidos(array)
			});
	}
	useEffect(getPedidos);
}
export default PedidosCocina;
import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import EstructuraDelPedido from './EstructuraDelPedido';

const EstadoDeLosPedidos = () => {
	const [orden, setOrden] = useState([]);
	const [estado, setEstado] = useState('');

	useEffect(() => {
		firebase
			.firestore()
			.collection("orden")
			.where('estado', '==', estado)
			.orderBy('hora', 'asc')
			.get()
			.then(dato => {
				const array = [];
				dato.forEach(doc => {
					array.push({ id: doc.id, ...doc.data() });
				});
				setOrden(array)
			})
			.catch(error => {
				console.log("Error getting documents: ", error);
			});
	}, [estado]);



	const EntregarAMesa = (id) => {
		firebase
			.firestore()
			.collection("orden")
			.doc(id)
			.update({
				estado: 'entregado',
			});
	}

	return (
		<div className="row">
			{/* <button className="btn" onClick={()=> setEstado('pendiente')}>Pendientes</button> */}
			<button className="btn" onClick={() => setEstado('listo')}>Listos</button>
			<button className="btn" onClick={() => setEstado('entregado')}>Entregados</button>
			<EstructuraDelPedido Entregar={EntregarAMesa} origen={orden}/>
		</div>
	);

}
export default EstadoDeLosPedidos;
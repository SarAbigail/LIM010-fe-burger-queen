import React, { useState, useEffect } from 'react';
import firebase from '../firebase'
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import EstructuraDelPedido from './EstructuraDelPedido';

const Cocina = () => {
	const [orden, setOrden] = useState([]);
	const [estado, setEstado] = useState('pendiente');

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

	const Listo = (id) => {
		firebase
			.firestore()
			.collection("orden")
			.doc(id)
			.update({
				estado: 'listo',
				duración: new Date(),
			});
	}

	return (
		<React.Fragment>
			<Header />
			<div className="Site-content">
				<div className="row center">
					<button className="btn2" onClick={() => setEstado('pendiente')}>Ver Pendientes</button>
					<button className="btn2" onClick={() => setEstado('listo')}>Ver Listos</button>
					<button className="btn2" onClick={() => setEstado('entregado')}>Ver Entregados</button>
				</div>
				{estado === 'pendiente' && (
					<h1>Pedidos Pendientes </h1>
				)}
				{estado === 'listo' && (
					<h1>Pedidos Listos </h1>
				)}
				{estado === 'entregado' && (
					<h1>Pedidos Entregados </h1>
				)}
				<EstructuraDelPedido Entregar={EntregarAMesa} origen={orden} Listo={Listo} />
			</div>
			<Footer />
		</React.Fragment>
	);
}
export default Cocina;
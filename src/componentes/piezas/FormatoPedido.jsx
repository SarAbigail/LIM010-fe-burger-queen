import React from 'react';
import TiempoDePreparacion from '../piezas/TiempoDePreparación';
import firebase from '../firebase';

// const FormatoPedido = ({ origen, CambiarEstado, texto,id }) => {
	const FormatoPedido = ({ origen, texto }) => {

	const CambiarEstado = (id) => {
		firebase.firestore().collection("orden").doc(id).update({
			estado: 'listo',
			preparación: Date.now(),
		});
	}

		return (
			<React.Fragment>
				{origen.map((p) => (
					<div key={p.cliente} className="row center-item">
						<div className="product col" >
							<p>Cliente: {p.cliente}</p>
							<table>
								<thead>
									<tr>
										<th>Producto</th>
										<th>Cantidad</th>
									</tr>
								</thead>
								<tbody>
									{p.productos.map(prod =>
										<tr key={prod.producto}>
											<td>{prod.producto}</td>
											<td>{prod.cantidad}</td>
										</tr>
									)}
								</tbody>
							</table>
							<p>Hora de Pedido: {p.hora.toDate().getHours()}{':'}{p.hora.toDate().getMinutes()}{':'}{p.hora.toDate().getSeconds()}</p>
							<TiempoDePreparacion p = {p}/>
							<p>Total a pagar: {p.total}</p>
						</div>
						<div>
							<button type="button" className="btn col" onClick={() => { CambiarEstado(p.id) }}>{texto}</button>
						</div>
					</div>
				))}
			</React.Fragment>
		);
	}
	export default FormatoPedido;
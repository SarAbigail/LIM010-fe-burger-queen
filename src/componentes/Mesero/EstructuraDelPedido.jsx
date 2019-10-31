import React from 'react';
import TiempoDePreparacion from './TiempoDePreparación'

const EstructuraDelPedido = ({ origen, Entregar, Listo }) => {
	return (
		<React.Fragment>
			{origen.map((p) => (
				<div key={p.id} className="row center-item">
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
						<p>Total a pagar: {p.total}</p>
					</div>
					{p.estado === 'pendiente' && (
						<button type="button" onClick={() => Listo(p.id)}>
							Marcar como pedido LISTO
							</button>
					)}
					{p.estado === 'listo' && (
						<div>
							<button type="button" onClick={() => Entregar(p.id)}>
								Marcar como pedido ENTREGADO
							</button>
							<TiempoDePreparacion p={p} />
						</div>
					)}
					{p.estado === 'entregado' && (
						<p>El pedido se entrego con exito</p>
					)}
				</div>
			))}
		</React.Fragment>
	);
}
export default EstructuraDelPedido;
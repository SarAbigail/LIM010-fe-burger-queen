import React from 'react';
import TiempoDePreparacion from './TiempoDePreparación'

const EstructuraDelPedido = ({ origen, Entregar, Listo }) => {
	return (
		<React.Fragment>
			<div className="row flex-wrap center">
				{origen.map((p) => (
					<div key={p.id} className="product col" >
						<p className="principal">Cliente: {p.cliente}</p>
						<table className="">
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
						<div className="row space-around principal">
							<p>Hora de Pedido:</p>
							<p>{p.hora.toDate().getHours()}{':'}{p.hora.toDate().getMinutes()}{':'}{p.hora.toDate().getSeconds()}</p>
						</div>
						<div className="row space-around bold principal">
							<p>Total a pagar:</p>
							<p> $ {p.total}</p>
						</div>

						{p.estado === 'pendiente' && (
							<button type="button" onClick={() => Listo(p.id)}>
								Marcar como pedido LISTO
							</button>
						)}
						{p.estado === 'listo' && (
							<div>
								<TiempoDePreparacion p={p} />
								<button type="button" onClick={() => Entregar(p.id)}>
									Marcar como pedido ENTREGADO
							</button>

							</div>
						)}
						{p.estado === 'entregado' && (
							<p>El pedido fue entregado con exito</p>
						)}
					</div>
				))}
			</div>
		</React.Fragment>
	);
}
export default EstructuraDelPedido;
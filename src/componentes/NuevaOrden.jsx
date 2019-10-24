import React from 'react';
import TituloPedidos from './TituloPedidos'
import NombreCliente from './nombreCliente';
import BotonOpciones from './BotonOpciones';

const NuevaOrden = ({ name, setName, setTipo, productosDesayuno, seleccionados, setSeleccionados }) => {
	const Agregando = (nuevoproducto) => {
		if (seleccionados.find(element => element.nombre === nuevoproducto.nombre)) {
			const newArray = seleccionados.map((select) => {
				if (select.nombre === nuevoproducto.nombre) {
					select.cantidad = select.cantidad + 1;
					select.total = select.precio * select.cantidad;
					return (
						//console.log({ ...select, cantidad: select.cantidad +1 })
						select
					)
				} else {
					return (
						select
					)
				}
			})
			setSeleccionados(newArray)
		} else {
			setSeleccionados([...seleccionados, { ...nuevoproducto, cantidad: 1, total: nuevoproducto.precio }]);
		}
	}
	// const Eliminar = (seleccionados) => {
	// 	seleccionados.filter(element => element.id!== seleccionados.id )
	// 	console.log(seleccionados)


	// }
	return (
		<div className="col width-50 mg-1 centered">
			<form className="form-box">
				<TituloPedidos texto="NUEVA ORDEN " />
				<NombreCliente name={name} setName={setName} />
				<div className="row centered">
					<BotonOpciones funcionDeSetearTipo={setTipo} texto="DESAYUNO" tipo="desayuno" />
					<BotonOpciones funcionDeSetearTipo={setTipo} texto="ALMUERZO  Y CENA" tipo="almuerzo" />
				</div>
				<div className="row">
					<div className="flex-wrap">
						<div className=" text-center">
							{productosDesayuno.map((p) => (
								<div key={p.nombre} className="product" onClick={() => { Agregando(p) }} >
									<img className="img-card" src={p.url} alt="" />
									<h1 className="text-card border">{p.nombre} &nbsp; ${p.precio}</h1>
								</div>
							))}
						</div>
					</div>

				</div>

			</form>
		</div>
	)
};
export default NuevaOrden;
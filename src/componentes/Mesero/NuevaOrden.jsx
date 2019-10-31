import React from 'react';
import NombreCliente from './NombreCliente';
import BotonOpciones from '../BotonOpciones';

const NuevaOrden = ({ name, setName, setTipo, productos, seleccionados, setSeleccionados }) => {

	const Agregando = (nuevoproducto) => {
		if (seleccionados.find(element => element.id === nuevoproducto.id)) {
			const newArray = seleccionados.map((select) => {
				if (select.id === nuevoproducto.id) {
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
			setSeleccionados(newArray);
		} else {
			setSeleccionados([...seleccionados, { ...nuevoproducto, cantidad: 1, total: nuevoproducto.precio }]);
		}
	}

	return (
		<div className="w-50"> 
			<form className="order-box">
				<h1>Nueva Orden</h1>
				<NombreCliente name={name} setName={setName} />
				<div className="row">
					<BotonOpciones funcionDeSetearTipo={setTipo} texto="DESAYUNO" tipo="desayuno" />
					<BotonOpciones funcionDeSetearTipo={setTipo} texto="ALMUERZO  Y CENA" tipo="almuerzo" />
					<BotonOpciones funcionDeSetearTipo={setTipo} texto="BEBIDAS" tipo="bebidas" />
					<BotonOpciones funcionDeSetearTipo={setTipo} texto="EXTRAS" tipo="extra" />
				</div>
				<div className="row">
					<div className=" text-center">
						{productos.map(p => (
							<div key={p.id} className="product" onClick={() => { Agregando(p) }} >
								<img className="img-card" src={p.url} alt="imagenes de comida" />
								<h1 className="text-card border">{p.nombre} </h1>
								<h1 className="text-card border"> ${p.precio}</h1>
							</div>
						))}
					</div>
				</div>
			</form>
		</div>
	)
};
export default NuevaOrden;
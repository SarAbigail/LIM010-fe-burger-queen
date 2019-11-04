import React from 'react';

const NombreCliente = ({ name, setName }) => {
	
	return (
		<div>
			<label className="">Nombre del Cliente:
              <input  type="text" className="" value={name} onChange={(e) => {setName(e.target.value)}} data-testid="inputNombreCliente"/>
			</label>
		</div>
	)
}

export default NombreCliente;
import React from 'react';

const NombreCliente = ({ name, setName }) => {

	const handleNamChange = (e) => {
		setName(e.target.value);
	}
	return (
		<div>
			<label className="">Nombre del Cliente:
              <input  type="text" className="" value={name} onChange={handleNamChange} />
			</label>
		</div>
	)
}

export default NombreCliente;
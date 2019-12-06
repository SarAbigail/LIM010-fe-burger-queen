import React from 'react';
const NumeroMesa = ({ mesa, setMesa }) => {
	return (
		<div>
			<label >Número de Mesa:
              <input   class="input-mesa"type="number" min="1" max="10" value={mesa} onChange={(e) => {setMesa(e.target.value)}} />
			</label>
		</div>
	)
}

export default NumeroMesa;
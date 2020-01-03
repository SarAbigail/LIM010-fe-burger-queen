import React from 'react';
import { Link } from "react-router-dom";
import '../../css/App.css';

const Opciones = () => {
    return (
        <React.Fragment>
            <div  class="row centered opciones-pedido" >
                <button type="button" className="btn"><Link to="/despacho">Listo para servir</Link></button>
                <button type="button" className="btn"><Link to="/finalizados">Entregados</Link></button>
            </div>
        </React.Fragment>
    );
}
export default Opciones;
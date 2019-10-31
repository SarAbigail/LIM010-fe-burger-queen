import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import '../../css/App.css'
import OrdenDetalles from './OrdenDetalles';
import NuevaOrden from './NuevaOrden';

const Mesero = () => {
  const [tipo, setTipo] = useState('desayuno');
  const [productos, setProductos] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);


  useEffect(() => {
    firebase.firestore().collection("productos").where('tipo', '==', tipo)
      .get()
      .then(dato => {
        const array = [];
        dato.forEach(doc => {
          array.push({ id: doc.id, ...doc.data() });
        });
        setProductos(array)
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }, [tipo]);

  return (
    <React.Fragment>
      <Header />
      <div className="column-pedidos fila Site-content" >
        <NuevaOrden setTipo={setTipo} productos={productos} name={name} setName={setName} seleccionados={seleccionados} setSeleccionados={setSeleccionados} />
        <OrdenDetalles seleccionados={seleccionados} name={name} setName={setName} setSeleccionados={setSeleccionados} setTotal={setTotal} total={total} />
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Mesero;
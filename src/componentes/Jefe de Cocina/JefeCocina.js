import React, {useState,useEffect} from 'react';
import firebase from '../firebase'
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import EstructuraDelPedido from '../Mesero/EstructuraDelPedido';

const Cocina = () => {
  const [orden, setOrden] = useState([]);
  const [estado, setEstado] = useState('');

  // useEffect(() => {
	// 	firebase
	// 		.firestore()
	// 		.collection("orden")
	// 		.where('estado', '==', estado)
	// 		.orderBy('hora', 'asc')
	// 		.get()
	// 		.then(dato => {
	// 			const array = [];
	// 			dato.forEach(doc => {
	// 				array.push({ id: doc.id, ...doc.data() });
	// 			});
	// 			setOrden(array)
	// 		})
	// 		.catch(error => {
	// 			console.log("Error getting documents: ", error);
	// 		});
	// }, [estado]);

  const Listo = (id) => {
		firebase
			.firestore()
			.collection("orden")
			.doc(id)
			.update({
				estado: 'listo',
				duración: new Date(),
			});
	}

  return (
    <React.Fragment>
      <Header />
      <div>
        <h1>Pedidos</h1>
        <button className="btn" onClick={()=> setEstado('pendiente')}>Pendientes</button>
        <EstructuraDelPedido origen={orden} Listo={Listo}/>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Cocina;
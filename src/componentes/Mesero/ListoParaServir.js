// import React, { useEffect, useState } from 'react';
import React from 'react';
// import firebase from '../firebase';
import Header from '../piezas/Header';
import Footer from '../piezas/Footer';
import NavBar from '../piezas/NavBar';
import '../../css/App.css';
import TituloPedidos from '../piezas/TituloPedidos';
import ListoParaEntregar from './ListoparaEntregar';

const ListoParaServir = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <TituloPedidos texto="Listo para servir"/>
      <ListoParaEntregar/>
      <Footer />
    </React.Fragment>
  );
}
export default ListoParaServir;
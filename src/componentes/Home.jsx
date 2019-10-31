import React from 'react';
import Footer from './piezas/Footer';
import Header from './piezas/Header';


const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="bg-home Site-content"></div>
      <Footer />
    </React.Fragment>
  );
}
export default Home;


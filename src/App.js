import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../src/css/App.css'
import Home from './componentes/Home';
import Mesero from './componentes/Mesero/Mesero';
import Cocina from './componentes/Cocina/Cocina';
import EstructuraDelPedido from "./componentes/Cocina/EstructuraDelPedido";
// import ListoParaServir from "./componentes/Mesero/ListoParaServir";
// import Entregados from "./componentes/Mesero/Entregados";

export default function App() {
  return (
    <Router>
      <div className="Site">
        <React.Fragment>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <Mesero />
            </Route>
            <Route path="/cocina">
              <Cocina/>
            </Route>
            {/* <Route path="/despacho">
              <ListoParaServir />
            </Route>
            <Route path="/finalizados">
              <Entregados/>
            </Route> */}
             <Route path="/pendiente">
              <EstructuraDelPedido />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      </div>
    </Router>
  );
}
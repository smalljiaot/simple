import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";

import './App.css';
import CustomerList from './component/Customer-List/CustomerList';
import Header from './component/Header/Header';
import InvoicesList from './component/Invoices-List/InvoicesList';
import PackageList from './component/Package-List/PackageList';

function App() {

  const [appData, setAppData] = useState({ customers: [], packages: [] });

  useEffect(() => {
    fetch("/data.json").then(response => response.json())
      .then(data => { setAppData(data) })
  }, [])

  return (
    <div className="App">
      <Router>
        <Header appData={appData} />
        <Switch>
          <Route exact path="/"> <CustomerList data={appData} /></Route>
          <Route path="/Packeges"> <PackageList data={appData} /></Route>
          <Route path="/Invoice">  <InvoicesList /></Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

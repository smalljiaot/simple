import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        <Header />
        <CustomerList data={appData} />
        <PackageList data={appData} />
        <InvoicesList />
      </Router>
    </div>

  );
}

export default App;

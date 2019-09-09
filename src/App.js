import React from 'react'
import './App.css'
import Header from './Header'
import Balance from './Balance'
import Criptobalance from './Criptobalance';

function App() {
  return (
    <div className="app">
      <Header/>
      <Balance/>
      <Criptobalance coinName="Birita"/>
      <Criptobalance coinName="Bitcoin"/>
    </div>
  );
}

export default App
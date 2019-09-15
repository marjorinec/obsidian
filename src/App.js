import React from 'react'
import Header from './Header'
import Home from './Home'
import Transaction from './Transaction'
import Statement from './Statement'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>  
      <Route path="/" exact component={Home}/>
      <Route path="/transaction/" component={Transaction}/>
      <Route path="/statement/" component={Statement}/>
    </Router>
  )
}

export default App
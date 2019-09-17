import React from 'react'
import Header from './Header'
import Home from './pages/Home'
import Transaction from './pages/Transaction'
import Statement from './pages/Statement'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store/main'

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Header/>  
        <Route path="/" exact component={Home}/>
        <Route path="/transaction/" component={Transaction}/>
        <Route path="/statement/" component={Statement}/>
      </Router>
    </Provider>
  )
}

export default App
import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      // </header>

      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/"> Charter UP </NavbarBrand>
        </div>
        </Navbar>
    </div>
  );
}

export default App;

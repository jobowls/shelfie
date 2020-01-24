import React from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Form className="Form" />
      <Dashboard className="Dashboard" />
    </div>
  );
}

export default App;

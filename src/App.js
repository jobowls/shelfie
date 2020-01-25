import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <Form className="Form" />
        <Dashboard className="Dashboard" />
      </div>
    );
  }
}

export default App;

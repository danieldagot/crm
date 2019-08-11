
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"
import React, { Component } from 'react';
import Clients from "./components/Clients"
import Actions from './components/Actions';
import Analytics from "./components/Analytics"
import Clint from "./components/Client"
class App extends Component {
  constructor() {
    super()
    this.state = {
      clints: [],
      category  : "name"
    }
  }
  compareValues = (key, order='asc') => {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA >= varB) {
        comparison = 1;
      } else if (varA <= varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }

 
    //get data from DB and update the State
  getData = async () => {
    let a = await axios.get("http://localhost:8080/clints")
    this.updateData(a)
    console.log(this.state.clints)
  }
  //update the data in the state 
  updateData = (a) => {
    this.setState(() => ({
      clints: a.data 
    }));
  }
//redder than component have data 
  componentDidMount = () => {
    this.getData()
   
  }

  render() {
    return (
     
      <div className="App">
         <Router>
        <div>
          <div>
          <Link to="/">Clients </Link>
          <Link to="/Actions">Actions </Link>
          <Link to="/Analytics">Analytics </Link>
          </div>
          <Route path="/Actions" exact render={() => <Actions data={this.state.clints} get={this.getData} />} />
          <Route path="/"  exact render={() => <Clients data={this.state.clints} get={this.getData} />} />
          <Route path="/Analytics" exact render={() => <Analytics data = {this.state.clints}/>} />
          <Route path="/clints/:id" exact render={({ match })  => <Clint match={match} data = {this.state.clints}/>} get={this.getTransaction} />
          {/* <Route path="/wizards/:wizard" exact component={<Fentity match = "wizard"  state={this.props.state} />} /> */}
          {/* <Actions data={this.state.clints} get={this.getData} /> */}
        </div>
        </Router>
      </div>
     
    );
  }
}

export default App;

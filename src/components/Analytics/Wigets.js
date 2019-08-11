import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"
import Email from "./EmailsSent "
import Outstanding from "./outstanding"
import NewClients from "./newClients"
import HottestContry from "./HottestContry"
class Wigets extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Wigets : {} , 

            bool : 0

         }
    }

    render() {
        return ( <div>
            
            <Email  data = {this.props.data}/> 
            <Outstanding  data = {this.props.data}/> 
            <NewClients  data = {this.props.data}/>
            <HottestContry  data = {this.props.data}/>
             </div>);
    }
}
 
export default Wigets;


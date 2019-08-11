import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"
import Wigets from "./Analytics/Wigets"
import Charts from './Analytics/charts/chars';
class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          
        }
    }
    
    render() { 
        return (
            <div>

             <div> <Wigets data ={this.props.data} /> </div> 
            <div> <Charts data ={this.props.data} /> </div> 
            </div>
            );
    }
}
 
export default Analytics;
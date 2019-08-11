import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import React, { Component } from 'react';
import TopEmployees from "./topEmployees"
import SalesByCountry from './SalesByCountry';
class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
<TopEmployees data ={this.props.data} />
<SalesByCountry data ={this.props.data} />
</div> 
         );
    }
}
 
export default Charts;
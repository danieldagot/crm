import React, { Component } from 'react';

class Emails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      console.log("cddd");
      
        return ( 
      <span> <i class="far fa-envelope"></i> :
    {this.props.data.filter(c => c.emailType).length}
       </span>
        )
        }
}
 
export default  Emails ;
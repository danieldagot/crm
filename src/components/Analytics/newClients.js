import React, { Component } from 'react';
class NewClients extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
   
    
        return ( <span> <i class="fas fa-user-clock"></i>
        {this.props.data.filter(c=> new Date(c.firstContact).getMonth() ==  new Date().getMonth() &&  new Date(c.firstContact).getFullYear() ==  new Date().getFullYear()).length}
        </span>
        )
    
}
}
 
export default NewClients;
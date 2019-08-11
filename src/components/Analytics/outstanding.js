import React, { Component } from 'react';
class Outstanding extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <span> <i class="fas fa-user-times"></i>:
        {this.props.data.filter(c => !c.sold).length} </span>  );
    }
}
 
export default Outstanding;
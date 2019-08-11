import React, { Component } from 'react';
import { log } from 'util';
class HottestContry extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     occurrence =  (array) => {
        
        let contrys = {} 
       
          array.forEach( c => {
              
              
               contrys[c] ? contrys[c]+=1 : contrys[c] =1
               
        
           });
           console.log( Object.values(contrys) )
           let i = Object.values(contrys).indexOf(Math.max(...Object.values(contrys)))
           let j = Object.keys(contrys)
   console.log( j[i] )
    
    
    return j[i];
    };

     
    render() { 
        
        console.log(this.occurrence( this.props.data.filter(c => c.sold).map(c=> c.country)  ))
        return ( <span> <i class="fab fa-hotjar"></i>
        {this.occurrence( this.props.data.filter(c => c.sold).map(c=> c.country))}
      </span>
    
        )
    
}
}
 

export default HottestContry;
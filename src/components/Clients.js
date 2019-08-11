import React, { Component } from 'react' 
import { async } from 'q';
import Client from "./Client"
import "./stayls/Clients.css"
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Clients extends Component {
constructor(){
  super()
  this.state = {
    page : 1,
    exptation : "",
    category : "name",
    url : "" ,
    pop: false  
  }
}
nextPage = () =>{
  let next  = this.state.page +1 
  this.setState({page : next},function(){
    console.log(this.state.page)
  })
}

minesPage = () =>{
  let next  = this.state.page -1 
  this.setState({page : next},function(){
    console.log(this.state.page)
  })
}
sarchPage = (event) => {
  this.setState({
    exptation: event.target.value
  },function(){})
  console.log(this.state.exptation);
}

ChangeCategory = (event) => {
  this.setState({
    category: event.target.value
  },function(){ console.log(this.state.category)})
 ;
}


popup = async (event) => {
 
await this.setState({
  url : event.target.getAttribute("url"),
  pop : !this.state.pop
}, function () { console.log(this.state.pop);
 })

}
closepop = () =>{
  this.setState({ pop : !this.state.pop},
    function () { console.log(this.state.pop);
    }
    )
  
}
 
render() {
  
 console.log(this.state.category);
 
return (

<div className = "continer"  > 
  {this.state.pop ? <Client id ={this.state.url} get ={this.props.get} closepop ={this.closepop} data = {this.props.data}/> : null}
  <input placeholder = "serch" onChange = {this.sarchPage} ></input>
 <select onChange = {this.ChangeCategory}>
  <option value= "name"> name</option>
  <option value="country">country</option>
  <option value="email">email</option>
  <option value="owner">owner</option>
<option value="sold">sold</option>
</select>
    
    <div className = 'rowClass'>
                    <span className='spanClassMain'>Name</span>
                    <span className='spanClassMain'>E-Mail</span>
                    <span className='spanClassMain'>First Contact</span>
                    <span className='spanClassMain'>Sold</span>
                    <span className='spanClassMain'>Owner</span>
                    <span className='spanClassMain'>Country</span>
                </div>
        { this.props.data.filter(c => c[this.state.category]? c[this.state.category].includes(this.state.exptation) || c[this.state.category].toLowerCase().includes(this.state.exptation)||c[this.state.category] : null
        )
                        .splice(this.state.page, 20).map(u => {
            return (
            <div url = {u._id} className = 'rowClass' onClick= {this.popup}>
                  
                    <span  url = {u._id} className = 'spanClass'>{u.name}</span>
                    <span   url = {u._id}className = 'spanClass'>{u.email}</span>
                    <span   url = {u._id} className = 'spanClass'>{u.firstContact.slice(0,10)}</span>
                    <span  className = 'spanClass'>{u.sold ? 'Yes' : 'No'}</span>
                    <span   url = {u._id} className = 'spanClass'>{u.owner}</span>
                   <span   url = {u._id}className = 'spanClass'>{u.country}</span>
                </div>
                
            )}
        ) }
    
    {this.state.page}
<button onClick = {this.minesPage}>-</button> <button onClick = {this.nextPage}>+</button>
</div>
)}
}

export default Clients
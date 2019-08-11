import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"
import "./stayls/clint.css"
class Client extends React.Component {
  constructor() {

    super()
    this.state = {
    
      update: {
        
      }
    }
  }
//put the data in the DB 
  put = async () => {
    await axios.put("http://localhost:8080/clint", this.state.update)
    this.props.get()
}
 // gets the name from the input and updates it 
  updateName = (event) => {
    if (this.state.update != "") {
      let a = Object.assign({}, this.state.update)
      a.name = event.target.value
      this.setState({
        update: a
      }, function () {
        console.log(this.state.update)
  
      }) 
    }
  else {
     alert("you acsdntly antered an empty name")  
     }
  }
  // gets the country from the input and updates it 
    updateCountry= (event) => 
    {
    

      let data = Object.assign({}, this.state.update)
      data.country = event.target.value
      this.setState({
        update: data
      }, function () {
        console.log(this.state.update)
      })


    }
    componentDidMount()
    {  let id = this.props.id
      let client = this.props.data.find(c => c._id == id)
    this.setState({
      update: client
    }, function () {
      console.log(this.state.update)

    })
    }
    render() {
//Getting the data to display 
      let id = this.props.id
      let client = this.props.data.find(c => c._id == id)
      console.log(client);



      return (
        <div className='popup'>
          update
 {client != undefined ? <div><input type="text" value={this.state.update.name} placeholder={client.name}client onChange={this.updateName} ></input>  <input   value={this.state.update.country} placeholder={client.country} onChange={this.updateCountry} ></input>  </div> : null}


          {/* update name <input placeholder= "name"></input>
update name <input placeholder= "name"></input> */}
          <span>
            <button onClick={this.props.closepop}>close me</button>
            <button onClick={this.put}>update</button>
          </span>
        </div>

      );
    }
  }

  export default Client;
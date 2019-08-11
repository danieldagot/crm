import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"
import "./stayls/Actions.css"

class Actions extends Component {

    constructor() {

        super()
        this.state = {
            oners: [],
            firstName: "",
            serName: "",
            Contry: "",
            Owner: "",
            update:{              
             }
        }
    }
    onerrlist = () => {
        const arr = []
        const obj = {}
        this.props.data.forEach(d => {

            if (obj[d.owner] == null) {

                arr.push(d.owner)
                obj[d.owner] = d.owner
            }
        })
        return arr
    }

    clintlist = () => {
        const arr = []
        const obj = {}
        this.props.data.forEach(d => {

            if (obj[d.name] == null) {
                arr.push(d.name)
                obj[d.name] = d.owner
            }
        })
        return arr
    }
 emillist = () => {
        const arr = []
        const obj = {}
        this.props.data.forEach(d => {

            if (obj[d.emailType] == null) {

                arr.push(d.emailType)
                obj[d.emailType] = d.emailType
            }
        })
        return arr
    }





    addFirst = (event) => {
        this.setState({
            firstName: event.target.value
        }, function () { })
        console.log(this.state.firstName);
    }

    addSir = (event) => {
        this.setState({
            serName: event.target.value
        }, function () { console.log(this.state.serName) })
            ;
    }
    addContry = (event) => {
        this.setState({
            Contry: event.target.value
        }, function () { console.log(this.state.Contry) })
            ;
    }
    addOner = (event) => {
        this.setState({
            Owner: event.target.value
        }, function () { console.log(this.state.Owner) })

    }

    setTransactions = async () => {
        let obj = {
            "name": this.state.firstName + " " + this.state.serName,
            "contry": this.state.Contry,
            "owner": this.state.Owner,
            "firstContact" : new Date()
        }
        await axios.post("http://localhost:8080/clints", obj)
        console.log(obj);
        this.props.get()
    }


findClint = (event) =>{
 let data  = this.props.data.find( c => c.name === event.target.value )
 this.setState({update : data}, function(){
    let a =  Object.keys(this.state.update)
    console.log(this.state.update);
     return a.map(c =>   <input value = {this.state.update[c]}/>)
 })
}


 updateOner = (event) => {
     console.log("sdfs");
      let a = Object.assign({},this.state.update)
      a.owner = event.target.value
        this.setState({
           update:a
        }, function () { console.log(this.state.update)
            this.put()
        })
      
    }
    updateSle = (event) => {
        let a = Object.assign({},this.state.update)
        a.sold = true
          this.setState({
             update:a
          }, function () { console.log(this.state.update)
            this.put()
        })
          

    }




     sendEmail = (event) => {
     console.log("sdfs");
      let a = Object.assign({},this.state.update)
      a.emailType = event.target.value
        this.setState({
           update:a
        }, function () { console.log(this.state.update)
            this.put()
        })
      
    }
    
    put = async () => {
        await axios.put("http://localhost:8080/clints", this.state.update)
        this.props.get()
    }


    render() {
        //   let o = this.onerrlist()
        return (
        <div id="continer">
            <div class="update">
               <span class = "header">update client</span>
               <span class = "data">
               client name : <input list="browsers1"  onChange ={this.findClint} />
                <datalist id="browsers1" placeholder="name" onChange = {this.findClint} >
                    {this.clintlist().map(m => <option value={m} />)}
                    </datalist>
                    </span>
                    <span class = "data">
                    Owner :     <input list="browsers" onChange ={this.updateOner} />
         <datalist id="browsers" value={this.state.update.name ? this.state.update.owner:null}>
                {this.onerrlist().map(m => <option value={m} />)}
                <option value="Safari" />
            </datalist>
            </span>
            <span class = "data">
            Send email :    <input list="emails" onChange ={this.sendEmail} />
         <datalist id="emails" value={this.state.update.name ? this.state.update.emailType:null}>
                {this.emillist().map(m => <option value={m} />)}
            </datalist>
            </span>
            <span class = "data">
            Diclare sale <button onClick = {this.updateSle} >Diclare!</button>
            </span>
        </div>
        <span class = "header">add client</span>
            <div id="add" class="addData" >
                
                First name : <input placeholder="First name" onChange={this.addFirst} />
                Ser name : <input placeholder="Ser name" onChange={this.addSir} />
                Contry : <input placeholder="Clint contry" onChange={this.addContry} />
                Owner :  <input list="browsers" onChange={this.addOner} />
                <datalist id="browsers" placeholder="oner" >
                    {this.onerrlist().map(m => <option value={m} />)}
                    <option value="Safari" />
                </datalist>
            </div>
            <button onClick={this.setTransactions} >add</button>

            

        </div >
        );
    }
}

export default Actions;
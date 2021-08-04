import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.componen';
import Nav from './components/nav.componen';
import Login from './components/login.componen';
import Register from './components/register.componen';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import axios from "axios";
import Forgot from './components/forgot.componen';
import { Reset } from './components/reset.componen';
import About from './components/about.componen';

export default class App extends Component{
  state = {};
  componentDidMount =()=>{
    axios.get('users')
    .then(
        res=>{
             
              this.setUser(res.data)
             
              // console.log(res.data) 
          //  this.setState({
          //      user:res.data
          //  });
          
          // this.setUser(res.data)
        },         
        err =>{
            console.log(err)
        }
    )
};

setUser = user =>{
  this.setState({
    user:user
  })
}

render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Nav user ={this.state.user} setUser ={this.setUser}/>
            <Switch>
            <div className="auth-wrapper">
            <div className="auth-inner">
                  <Route exact path="/" component={()=><Home user={this.state.user}/>}/>
                  <Route exact path="/login" component={()=><Login setUser={this.setUser}/>}/>
                  <Route exact path="/register" component={Register}/>
                  <Route exact path="/forgot" component={Forgot}/>
                  <Route exact path="/reset/:id" component={Reset}/>
                  <Route exact path="/about" component={About}/>
                  </div>
                  </div>
                  
            </Switch>
            
        </div>
        
    </BrowserRouter>
    
  );
}
}


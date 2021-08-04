import axios from "axios";
import React, { Component } from "react";
import {Redirect,Link} from 'react-router-dom';
import Swal from 'sweetalert2'
export default class Login extends Component{
    state ={};
    handleSubmit = e =>{
        e.preventDefault();
        const data = {
            email:this.email,
            password :this.password
        }
        axios.post('users/login',data)
        .then(res=>{
                // const {acces_token}= res.data 
                //   console.log(res.data)
                localStorage.setItem('access_token', res.data.access_token);
                this.setState({
                loggedIn : true
            });
            this.props.setUser(res.data.user);
            Swal.fire({
                icon: 'success',
                title: 'Your Login has been success 😎',
                showConfirmButton: false,
                timer: 1500
              })
            
            // alert("Succes Login")
        })
        .catch(err=>{
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong Password! 🤔',
              })
        })
    }
   render(){
       if(this.state.loggedIn){
           return <Redirect to = {'/'} />
       }
       return(
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Email"
              onChange={e =>this.email = e.target.value}/>
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password"
              onChange={e =>this.password = e.target.value}/>
          </div>
         <br/>
          <button className="btn btn-primary btn-block">Login</button>
          <h4 className="forgot-password text-right">
              <Link className="forgot" to={'/forgot'}>Forgot Password ?</Link>
          </h4>
        </form>
       )
   }
}
import React, { Component } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
export default class Register extends Component{

    handleSubmit = e =>{
        e.preventDefault();
        // console.log('works!')
        const data = {
        // firts_name:this.firstName,
        // last_name:this.lastName,
        email:this.email,
        password:this.password,
        // password_confirm:this.confirmPassword
        image_user:this.image
    };
    axios.post('users/register',data).then(
        res =>{
            console.log(res)
            Swal.fire({
                    
                icon: 'success',
                title: 'Your Register has been success 😉',
                showConfirmButton: false,
                timer: 1500
              })
        }
    ).catch(
           err=>{
               console.log(err)
               Swal.fire({
                    
                icon: 'success',
                title: 'Your Not Register ',
                showConfirmButton: false,
                timer: 1500
              })
           }
    )
    }

   render(){
       return(
        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>

          {/* <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="First name"
              onChange={e =>this.firstName = e.target.value}/>
          </div>

          <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Last name"
              onChange={e =>this.lastName = e.target.value}/>
          </div> */}

          <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="email"
              onChange={e =>this.email = e.target.value}/>
          </div>
          
          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="password"
              onChange={e =>this.password = e.target.value}/>
          </div>
          {/* <div className="form-group">
              <label>Confirmasi Password</label>
              <input type="password" className="form-control" placeholder="confirmasi password"
              onChange={e =>this.confirmPassword = e.target.value}/>
          </div> */}

          <div className="form-group">
              <label>Image</label>
              <input type="text" className="form-control" placeholder="https: "
              onChange={e =>this.image = e.target.value}/>
          </div>

          <br/>
          <button className="btn btn-primary btn-block">Sign Up</button>


        </form>
       )
   }
}
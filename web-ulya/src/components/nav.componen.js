import React,  { Component } from "react"
import{Link}from 'react-router-dom';

export default class Nav extends Component{
 
  handleLogout = ()=>{
    localStorage.clear();
     this.props.setUser("clear")
    
  };
  

 
  render(){
//()=>localStorage.clear()
  let buttons ;
   if(!this.props.user){
    buttons =(
      <ul className="navbar-nav ml-auto"> 
       
       <li className="nav-item">
         <Link to={'/blog'} className="nav-link my-2 my-lg-0">Blogs</Link>
       </li>
      <li className="nav-item">
         <Link to={'/product'} className="nav-link my-2 my-lg-0">Products</Link>
       </li>
       <li className="nav-item">
         <Link to={'/'} onClick={this.handleLogout} className="nav-link my-2 my-lg-0">Logout</Link>  
       </li>
      </ul>
     )
   }else{
     buttons =(
      <ul className="navbar-nav ml-auto">
       <li className="nav-item">
         <Link to={'/login'} className="nav-link my-2 my-lg-0">Login</Link>
       </li>
       <li className="nav-item">
         <Link to={'/register'} className="nav-link  my-2 my-lg-0">Sign Up</Link>
       </li>
      </ul>
     )
   }
     return(
        <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>Home</Link>
          <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
         <Link to={'/about'} className="nav-link my-2 my-lg-0">About</Link>
       </li>
       </ul>
            {buttons}
          </div>
          </div>
        </nav>
     )
 }
}
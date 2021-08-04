
import React, { Component } from "react";
import {Carousel} from 'react-bootstrap'
export default class Home extends Component{
    render(){
          if(!this.props.user){
                // console.log(this.props.user)
         return(
        //    <h2>semua User{this.props.user.email_user}{this.props.user.image_user}</h2>
        <h2>Welcome This Site <strong style={{color: "yellow"}}>ULYA</strong> {this.props.user}</h2>
     // <h2>Your Succses</h2>
    
         ) 
          }else{
            return(
                // <h2>Please <strong style={{color: "yellow"}}>Login..</strong></h2>
                <Carousel >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://manometcurrent.com/wp-content/uploads/2021/05/reportocean.gif" 
                    alt="First slide"
                    
                  />
                  <h2>Please <strong style={{color: "yellow"}}>Login..</strong></h2>
                <br/>
                </Carousel.Item>
              </Carousel>
             


            )
            
        }
    }
        
   }
// }
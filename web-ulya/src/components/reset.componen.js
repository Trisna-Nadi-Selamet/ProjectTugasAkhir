import React,{Component} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'




export class Reset extends Component{

    state={};

    handleSubmit = e =>{
        e.preventDefault();
    
        const data ={
            access_token: this.props.match.params.id,
            password :this.password,
            password_confirm: this.password_confirm
        }
        axios.post('reset',data).then(
            res =>{
                console.log(res)
                this.setState({
                    reset: true
                })
            }
        ).catch(
            err=>{
                console.log(err)
            }
            
        )
    }
    


    render(){
      if(this.state.reset){
          return <Redirect to={'/login'}/>
      }


        return(
         <form onSubmit={this.handleSubmit}>
           <h3>Reset password</h3>
       
 
           <div className="form-group">
               <label>New Password</label>
               <input type="password" className="form-control" placeholder="Password"
               onChange={e =>this.password = e.target.value}/>
           </div>
           <div className="form-group">
               <label>Password Confirm</label>
               <input type="password" className="form-control" placeholder="Password Confirm"
               onChange={e =>this.password_confirm = e.target.value}/>
           </div>
          <br/>
           <button className="btn btn-primary btn-block">Subbmit</button>
        
         </form>
        )
    }
}
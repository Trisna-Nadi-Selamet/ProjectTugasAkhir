import React,{Component} from 'react';
import axios from 'axios';
export default class Forgot extends Component{
    
    handleSubmit = e=> {
        e.preventDefault();
        const data={
           email :this.email
        }

        axios.post('forgot',data).then(
            res=>{
                console.log(res)
            }
        ).catch(
            err=>{
             console.log(err)   
            }
        )
    }
    
    
    render(){
        
        return(
         <form onSubmit={this.handleSubmit}>
           <h3>Forgot Password</h3>
           <div className="form-group">
               <label>Email</label>
               <input type="email" className="form-control" placeholder="Email"
               onChange={e =>this.email = e.target.value}/>
           </div>
          <br/>
           <button className="btn btn-primary btn-block">Subbmit</button>
         </form>
        )
    }
}
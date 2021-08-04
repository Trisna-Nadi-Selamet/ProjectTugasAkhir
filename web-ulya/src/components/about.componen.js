import React,{Component}from 'react'
import {Card,CardColumns} from 'react-bootstrap'

export default class About extends Component{



    render(){
        return(
<CardColumns> 
 <Card.Img variant="top" src="https://cdn.dribbble.com/users/1000879/screenshots/3273639/store.gif" />
    <Card.Body>
      <Card.Title style={{textAlign:"center"}}><h2>INFO  <strong style={{color: "yellow"}}>ULYA</strong></h2></Card.Title>
      <Card.Text style={{textAlign:"center"}}>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
</CardColumns>
        )
    }
}
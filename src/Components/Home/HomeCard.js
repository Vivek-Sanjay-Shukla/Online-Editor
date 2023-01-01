import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'

const HomeCard = (props) => {

  return (
    <Card  className="editor-card-view">
         <Card.Body>
            <Card.Title style={{ color: "#f0c19e" }}>{props.title}</Card.Title>
            <Card.Text style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
               }}>
               {props.description}
            </Card.Text>
         
            <Button style={{alignItems:"center", backgroundColor:"#ef3636",  border: 0,}} variant='primary' as={Link} to={props.link}>
                {props.name}
            </Button>
        </Card.Body>
       
        </Card>
  )
}

export default HomeCard;
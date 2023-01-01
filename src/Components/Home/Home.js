import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import homeimg from "../Assets/images3.png"
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css'
import HomeCard from './HomeCard';

const Home = () => {
  return (
    <div style={{backgroundColor: "black", minHeight: "130vh", height: "auto"}}>
        <Container className='wrapper'>
              
            <Row
               className="text-center"
               style={{
                 alignItems: "center",
                 justifyContent:"center",
                 paddingTop: "100px",
                 paddingBottom: "50px",
               }}
            >

            <Col md={5}>
            <img
              src={homeimg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center"}}
            />
            </Col>  
            </Row>
            
           <Row className='home-Cards'>
            <HomeCard
              title="Html, Css & Javascript editor"
              description = "You can code Html, Css and javascript code instantly with this editor with live preview"
              name = "Web editor"
               className = "cards"
               link="webeditor"
              />
            <HomeCard
              title="Markdown editor"
              description = "You can make your markdown with live preview"
              name = "Markdown"
              className = "cards"
              link="markdown"
            />
            </Row>

        </Container>
    </div>
  )
}

export default Home
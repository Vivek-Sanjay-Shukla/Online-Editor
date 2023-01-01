import './MarkDownEditor.css'

import React from "react";
import Button from "react-bootstrap/Button";
// import "@github/markdown-toolbar-element";


const Toolbar = (props) => {
  return (
    <div>
        <markdown-toolbar for="textarea_input">
        <md-header level="1">
          <Button className='btnStyle' variant="info">
            <i className="fas fa-heading"></i>
          </Button>
        </md-header>

        <md-bold>
          <Button className='btnStyle' variant="info">
            <i className="fas fa-bold"></i>
          </Button>
        </md-bold>

        <md-italic>
          <Button className='btnStyle' variant="info">
            <i className="fas fa-italic"></i>
          </Button>
        </md-italic>

        <md-quote>
          <Button className='btnStyle' variant="info">
            <i className="fas fa-quote-right"></i>
          </Button>
        </md-quote>

        <md-code>
          <Button className='btnStyle' variant="info">
            <i className="fas fa-code"></i>
          </Button>
        </md-code>

        <md-link>
          <Button className='btnStyle' variant="info">
            <i className="fas fa-link"></i>
          </Button>
        </md-link>

        <md-image>
          <Button className='btnStyle' variant="info">
            <i className="fas fa-image"></i>
          </Button>
        </md-image>

        <md-unordered-list>
          <Button className='btnStyle' variant="info">
            <i className="fas fa-list-ul"></i>
          </Button>
        </md-unordered-list>

        <md-ordered-list>
          <Button className='btnStyle' variant="info">
            <i className="fas fa-list-ol"></i>
          </Button>
        </md-ordered-list>

        <Button className='btnStyle' variant="info" onClick={props.clickHandler}>
          <i className="fas fa-file-download"></i>
        </Button>
      </markdown-toolbar>
    </div>
  )
}

export default Toolbar
import React, { useState ,useEffect} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import Editor from './Editor'
import './Editor.css'
import {IoLogoCss3} from 'react-icons/io5'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const WebEditor = () => {

  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
       `)
    }, 500)

    return () => clearTimeout(timeout)
  }, [html, css, js]);

    // this is to display the what we write in our editor

  return (
    <>
       <div className="home-btn">
       <Button style={{backgroundColor:"#ef3636",  border: 0,}} className="btn"  variant='primary' as={Link} to="/Online-Editor">
            {"Home"}
        </Button>
       </div>
      
      <div className='pane top-pane'>
    
        <Editor 
          language="xml" 
          LanguageName="HTML" 
          value={html}
          onChange={setHtml}
          
         />
        <Editor
           language="css" 
           LanguageName="CSS" 
           value={css}
           onChange={setCss}
        />
        <Editor
           language="javascript" 
           LanguageName="JS" 
           value={js}
           onChange={setJs}
        />
      </div>

      <div className='pane'>
        <iframe 
        srcDoc={srcDoc}
        title='output'
        sandbox='allow-scripts'
        frameBorder="0"
        width="100%"
        height="100%"
        />
      </div>

    </>
  )
}

export default WebEditor
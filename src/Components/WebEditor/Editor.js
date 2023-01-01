import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import'codemirror/mode/xml/xml'
import'codemirror/mode/javascript/javascript'
import'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import './Editor.css'
import {IoLogoCss3, IoLogoHtml5, IoLogoJavascript} from 'react-icons/io5'

const Editor = (props) => {
    const{
        LanguageName,
        language,
        value,
        onChange
    } = props

   const handleChange = (editor, data, value) =>{
        onChange(value);
   }
  return (
    <div className='editor-container'>
        <div className='editor-title'>
           
           <span className='logo-h'>
             {LanguageName === "HTML" ? <IoLogoHtml5/> : ""}
            </span>
            <span className='logo-css'>
             { LanguageName === "CSS" ? <IoLogoCss3/> : ""}
            </span> 
            <span className='logo-js'>
             {LanguageName === "JS" ? <IoLogoJavascript/> : ""}
            </span>
             
            
            {LanguageName}
        </div>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping:true,
            lint:true,
            mode:language,
            theme:'material',
            scrollbarStyle: "null",
            lineNumbers:true,
            autoCloseTags: true,
            matchTags: true,
            autoCloseBrackets: true,
            matchBrackets: true,
          }}
        />
    </div>
  )
}

export default Editor
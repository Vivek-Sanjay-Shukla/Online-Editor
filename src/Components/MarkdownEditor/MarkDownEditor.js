// import fileDownload from 'js-file-download';
import React,{useState,useEffect} from 'react'
import { Remarkable } from "remarkable";
import TextareaAutosize from 'react-autosize-textarea/lib';
import { Col, Container, Row } from 'react-bootstrap'
import './MarkDownEditor.css'
import useLocalStorage from '../hooks/useLocalStorage';
// import Toolbar from './Toolbar';


const MarkDownEditor = () => {

  
    let md = new Remarkable({
      html: true,
      xhtmlOut: true,
      langPrefix: "language-",
      quotes: "“”‘’",
      typographer: true,
    });

    const [Text, updateText] = useLocalStorage("mdEditor",'');
     
    const [preview, updatePreview] = useState("");

    useEffect(() => {
      let res = md.render(Text);
      updatePreview(res);
    }, [Text]);


    const handleChange = (e) => {
        updateText(e.target.value);
    };

  return (
    <div>
        <Container fluid className='body'>
            <Row
              style={{
                justifyContent: "center",
                padding:"25px 45px 0px 45px",
              }}
            >
            
            <Col md={6} className="text-center">
               <h3 className="text-center">Markdown Editor</h3>

               {/* <Toolbar
                clickHandler={() => {
                    fileDownload(Text, "README.md");
                }}
                /> */}

               <TextareaAutosize
                id="textarea_input"
                className='mark-down'
                onChange={handleChange}
                value={Text}
                />
            </Col>

               
            <Col md={6}>
                <h3 className="text-center"> Html Preview</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: preview }}
                  className='markdown-output'
                ></div>
            </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default MarkDownEditor
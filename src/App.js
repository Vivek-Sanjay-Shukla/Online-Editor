import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import MarkDownEditor from './Components/MarkdownEditor/MarkDownEditor';
import WebEditor from './Components/WebEditor/WebEditor';

function App() {
  return (
      <BrowserRouter>
         <Routes>
           <Route path="/Online-Editor" exact element={<Home/>} />
           <Route path="/Online-Editor/webeditor" element={<WebEditor/>} />
           <Route path="/Online-Editor/markdown" element={<MarkDownEditor/>} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;

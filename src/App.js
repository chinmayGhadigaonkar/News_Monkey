
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News'



const App=()=> {
  const apiKey = process.env.REACT_APP_NOT_SECRET_CODE
    
    return (
      
      
      <div>
      
      
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<News key="general"   pageSize={15} apiKey={apiKey} category="general" />}></Route>
        <Route path="/business" element={<News key="business" apiKey={apiKey}   pageSize={15} category="business" />}></Route>
        <Route path="/entertainment" element={<News key="entertainment" apiKey={apiKey}    pageSize={15} category="entertainment" />}></Route>
        <Route path="/health" element={<News key="health" apiKey={apiKey}   pageSize={15} category="health" />}></Route>
        <Route path="/science" element={<News key="science" apiKey={apiKey}    pageSize={15} category="science" />}></Route>
        <Route path="/sports" element={<News key="sports" apiKey={apiKey}   pageSize={15} category="sports" />}></Route>
        <Route path="/technology" element={<News key="technology" apiKey={apiKey}    pageSize={15} category="technology" />}></Route>
        </Routes>
        </BrowserRouter>

      </div>
    )

 
}





export default App


// 91594904e858541153851508aaadaba15e15a
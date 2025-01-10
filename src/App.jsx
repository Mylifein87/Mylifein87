import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx"
import Upload from "./Upload.jsx"
import About from "./About.jsx"
import "./index.css";




function App() {

  return(
    <Router>
      
      <Header />
      <Upload />

    <Routes>
      <Route path="/" element={<style></style>} />
     
      <Route path="/upload" element={<Upload />} />
      <Route path="/about" element={<About />} /> 
      

    </Routes>
  </Router>


    
  );

}
export default App;

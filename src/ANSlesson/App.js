import React from 'react'
import Header from './ANSlesson/Header'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Home from './ANSlesson/Home';
import Footer from './ANSlesson/Footer';
import Fulldetails from './ANSlesson/Fulldetails';
import Lessons from './ANSlesson/Lessons';
import About from './ANSlesson/About';
import Comment from './ANSlesson/Comment';






function App() {
  return (
    <div>
       <Router>
      <Header/>
      <Routes>
         <Route exact path="/" element = {<Home/>}></Route>
         <Route exact path="/comment" element = {<Comment/>}></Route>

         <Route exact path="/about" element = {<About/>}></Route>

         <Route exact path="/lesson" element = {<Lessons/>}></Route>

         <Route exact path="/fulldetails/:id" element = {<Fulldetails/>}></Route>
                  
                  
                

     
      </Routes>
     <Footer/>
           
            

          
      </Router>
       
     
          
             
            

          
     
     
    
    
    </div>
  )
}

export default App
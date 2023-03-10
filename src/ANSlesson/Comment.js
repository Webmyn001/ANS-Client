import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"
 

function Comment() {
// post comment
    const navigate = useNavigate();
    
  const [Name, setName]= useState("")
  const [School, setSchool]= useState("")
  const [Department, setDept]= useState("")
  const [Level, setLevel]= useState("")
  const [Comment, setcomment]= useState("")

  useEffect(()=> {
    AOS.init({duration:2000})

  },[])


  const submit = (e) => {
    e.preventDefault()
   
   
  


    axios.post(`https://easy-crown-bull.cyclic.app/api/comment/addcomment`,{Name,School,Department,Level,Comment})
    .then((res)=>
    { 
    console.log("saved succesfully")
    navigate("/");
    alert("Thank you, Your comment is submitted succesfully.")
  }).catch((err)=> {
      console.log(err)
      alert("Unable to submit comment, kindly complete the form.")
    })
 }


  const OnchangeComment = (e) => {
    setcomment(e.target.value)
  };
  const OnchangeName = (e) => {
    setName(e.target.value)
  };
  const OnchangeSchool = (e) => {
    setSchool(e.target.value)
  };
  const OnchangeDept = (e) => {
    setDept(e.target.value)
  };
  const OnchangeLevel = (e) => {
    setLevel(e.target.value)
  }
console.log(Name, Level, Department)
  const [getcomments, setgetcomments] =useState([])
  console.log(getcomments)
  const getComments = async ()=> {
    axios.get("https://easy-crown-bull.cyclic.app/api/comment/")
    .then((res)=> setgetcomments(res.data) )
    .catch((err)=> console.log(err))
    
  }

  const Load = ()=> {
             alert("Please Wait ...")    
  }

  useEffect(()=>{
    getComments()
  },[])
  return (
    <div className='bg-gradient-to-t min-h-screen from-white to-[#fffadd]'>
      <h1 className='font-semibold text-center pt-3 text-base text-[#7f030d] '>Kindly drop your comments about the lectures</h1>
      <form onSubmit={submit} encType="multipart/form-data"
       className="flex flex-col px-5 text-[#7f030d] justify-center  sm:items-center items-center " >
      
      <label className=" font-semibold  pt-3 text-xl py-1 ">Name</label>
       <input placeholder="Name"  value={Name} onChange={OnchangeName}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
     <label className=" font-semibold  pt-2 text-xl py-1 ">School</label>
       <input placeholder="School"  value={School} onChange={OnchangeSchool}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                <label className=" font-semibold  pt-2 text-xl py-1 ">Department</label>
       <input placeholder="Department"  value={Department} onChange={OnchangeDept}
                className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/> 
                <label className=" font-semibold  pt-2 text-xl py-1 ">Level </label>
       <input placeholder="Level"  value={Level} onChange={OnchangeLevel}
            className=" border-[#0b0f11] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>

      <label className=" font-semibold  pt-2 text-xl py-1 ">Comment</label>
      <textarea placeholder=" Your Comment ... " value={Comment} onChange={OnchangeComment} 
     className= " border-[#130e0e] mt-3 focus:outline w-[200px] h-[100px] border-2 rounded-lg px-3 text-[#594545]"/>

         <button className='bg-[#7f030d] px-2 mt-3 py-2 rounded-md text-white' Onclick={Load}>Post</button>
      </form>
     
                  
                  <h1 className='text-sm text-[#7f030d] pt-[50px] font-bold text-center'>Comments </h1>

                  {
        getcomments.map((comment)=>(
         
          <div className="shadow-sm 
          p-2  m-3  border-l-8 border-2 border-[#7f030d] flex justify-center items-center rounded-lg"key={comment._id} data-aos="zoom-in">
               
                
           
            <ol className="text-xs font-semiold text-center tracking-wide text-[#7f030d]">
                <li> <span className="text-center font-semibold text-[#7f030d]  capitalize" data-aos="flip-right"> {comment.Name}</span> </li>
                <li>  <span className=" text-center font-semibold text-[#7f030d] "  data-aos="flip-right">{comment.School}</span> </li>
                <li>   <span className="italic text-center font-semibold text-[#7f030d] " data-aos="flip-right">{comment.Department} {comment.Level}</span></li>
                <li> <span className=" text-center text-[#7f030d] "><Typewriter 
             options={{
              autoStart:true,
              loop:true,
              delay: 50,
              strings:`${comment.Comment}`
             }}
           />
           </span> </li>

                
    
            </ol>


        </div>
        ))
      }
    </div>
  )
}

export default Comment


  
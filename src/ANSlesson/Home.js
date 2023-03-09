import React, { useEffect, useState }  from "react";
import { Link,  } from "react-router-dom";
import HomeImage from "./HomeImage";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"
import axios from "axios";


 const Home =()=> {
     
  useEffect(()=> {
    AOS.init({duration:2000})

  },[])
   
  const [open, setOpen] = useState(false)

  const [getcomments, setgetcomments] =useState([])
  console.log(getcomments)
  const getComments = async ()=> {
    axios.get("https://easy-crown-bull.cyclic.app/api/comment/")
    .then((res)=> setgetcomments(res.data) )
    .catch((err)=> console.log(err))
   }
// set comments to get random three elements in the array
   const ShuffledArray = getcomments.sort(() => 0.5- Math.random())
   const shuffled3 = ShuffledArray.slice(0, 3);



  useEffect(()=>{
    getComments();
    setInterval(()=>{
     setOpen(true)
     },3000)
    },[])


    return(
        <div className="bg-gradient-to-t min-h-screen text-[#7f030d] from-white to-[#fffadd] shadow-sm ">
                {/* date and time */}
       

          <h1 className="text-center font-bold  text-2xl md:text-3xl 
           tracking-wider pb-5 " data-aos="flip-right">
         <span className={`${open? "text-[#7f030d]" : "text-[#3eb361]"} font-serif`}>Agricultural</span> 
          <span className={`${open? "text-[#3eb361]" : "text-[#7f030d]"} pl-2 font-serif`}>Genetics</span></h1>
                         
              

        {/* Home image */}
    <div className="md:flex md:gap-x-5 md:flex-row flex flex-col items-center justify-center gap-y-5">
        
        <div data-aos="flip-right"><HomeImage/></div>
          
          <div className="w-[350px] sm:w-[400px] md:w-[500px] flex flex-col"> 
         <h2 className="text-[#7f030d] text-xl text-center p-4 font-semibold ">
            <Typewriter 
             options={{
              autoStart:true,
              loop:true,
              delay: 50,
              strings:" Agricultural genetics is the applied study of the effects of genetic variation and selection used to propagate valuable heritable trait combinations in crop plants and farm animals."
             }}
           />
          </h2>

         <h2 className="pt-4 text-center text-sm" data-aos="fade-right"> 
           Kindly <Link to="/lesson"> 
           <button className="text-[#1048a9]">Click here</button></Link> to 
           veiw lectures available.
            </h2>

            <h2 className="pt-4 text-center text-sm" data-aos="zoom-in"> 
           You can also <Link to="/comment"> 
           <button className="text-[#1048a9]">Click here</button></Link> to 
           drop your comment about the lectures.
            </h2>
 
       
         </div>
      
     </div>
            
            {/* first three Comments */}
        <div className="pt-7">
        {
        shuffled3.map((comment)=>(
         
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
 </div>
    )
 }

 export default Home
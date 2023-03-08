import React, { useEffect, useState }  from "react";
import { Link,  } from "react-router-dom";
import HomeImage from "./HomeImage";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"


 const Home =()=> {
     
  useEffect(()=> {
    AOS.init({duration:2000})

  },[])
   
  const [open, setOpen] = useState(false)

  useEffect(()=>{
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
        
 </div>
    )
 }

 export default Home
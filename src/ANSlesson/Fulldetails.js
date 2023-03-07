import React, { useEffect } from 'react'
import {Link, useLocation} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";


function Fulldetails(props) {

    const location = useLocation()
    const data = location.state
    console.log(data)
    
  
   useEffect(()=> {
    AOS.init({duration:2000})

  },[])

  return (
    <div>
            <div className=" bg-gradient-to-t  text-[#7f030d] from-white to-[#fffadd] flex items-center  justify-center ">
               <div className="flex flex-col items-center  max-w-[400px] sm:max-w-[500px] md:max-w-[800px] shadow-2xl justify-center">
             <h1 className="font-bold text-xl sm:text-2xl px-5 py-5" data-aos="fade-up"> {data.Title}</h1>
             <h1 className="font-semibold text-base sm:text-xl px-9 py-5" data-aos="fade-up"> {data.Subtitle}</h1>
                  {/* body1 */}
               <h3 className="font-medium text-base md:text-xl px-5 py-4" data-aos="fade-right">  {data.Body1}</h3>
                   {/* body2 */}
               <p className="font-medium  text-base md:text-xl px-7 py-4" data-aos="fade-left"> {data.Body2}</p>

               {/*  image1 */}
        <div className='pt-4' data-aos="zoom-in">
         <img src={data.image1[0].url} alt="..." className='object-cover
           shadow-sm w-[350px] sm:h-[500px] sm:w-[600px]'/>
        </div>
               {/* body 3 */}
           <p className="font-medium text-base  sm:text-xl px-7 py-4" data-aos="fade-right"> {data.Body3}</p>
             

             {/* image2 */}
               <div className='pt-4' data-aos="zoom-in">
         <img src={data.image1[1].url} alt="..." className='object-cover
           shadow-sm w-[350px] sm:h-[500px] sm:w-[600px]'/>
        </div>

        {/* image3 */}

        <div className='pt-8' data-aos="zoom-in">
         <img src={data.image1[2].url} alt="..." className='object-cover
           shadow-sm w-[350px] sm:h-[500px] sm:w-[600px]'/>
        </div>
                        {/* body 4 conclusion */}

         <p className="font-medium text-base sm:text-xl px-7  py-4" data-aos="fade-left"> {data.Body4}</p>
                
             <div className="flex flex-col items-start pl-5 pb-3 pt-4 text-gray-700 font-semibold w-full justify-center">
                              
                              <p > Posted At : {data.createdAt}</p>

                   </div>
                
            <div className="flex flex-col  items-center max-w-[400px] mb-5 justify-center">
                 
                   <div>
                    <div className='flex justify-center items-center'>
                    <Link to="/dashboard">
                   <button className=" px-8 mt-4 py-3 text-white font-bold font-mono
                   tracking-wide bg-[#7f030d]  rounded-full">Back</button>
                   </Link>
                    </div>
                  
                 
                   <div>
                    <h2 className="pt-4 text-[#7f030d] px-5 text-center text-base"> 
           <Link to="/comment"> Kindly
           <button className="text-[#1048a9] px-1">  Click here</button></Link> to 
           drop your comments about the lectures.
            </h2>
                    </div>

                   </div>
                  
                </div>

                   

                </div>
                
                  
                   

                 
             </div>
    

            </div>
  )
}

export default Fulldetails
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
             <h1 className="font-bold text-xl sm:text-2xl px-5 py-3" data-aos="fade-up"> {data.Title}</h1>
             <h1 className="font-medium text-base sm:text-xl px-5 pt-3" data-aos="fade-right"> {data.Subtitle}</h1>
                  {/* body1 */}
               <h3 className=" text-base  md:text-xl px-5 pt-2" data-aos="fade-right">  {data.Body1}</h3>
                   {/* body2 */}
               <p className="text-base md:text-xl px-5 py-2" data-aos="fade-left"> {data.Body2}</p>
                    {/* body 3 */}
          <p className=" text-base  sm:text-xl px-5 py-3" data-aos="fade-right"> {data.Body3}</p>
               {/*  image1 */}
        <div className='pt-4' data-aos="zoom-in">
         <img src={data.images[0].url} alt="..." className='object-cover
           shadow-sm rounded-md  p-2 sm:h-[500px] sm:w-[500px]'/>
        </div>

           {/* body4 */}

           <p className=" text-base  sm:text-xl px-5 py-3" data-aos="fade-left"> {data.Body4}</p> 

             {/* body5 */}

           <p className=" text-base  sm:text-xl px-5 py-3" data-aos="fade-right"> {data.Body5}</p>

           {/* body6 */}

           <p className=" text-base  sm:text-xl px-5 py-3" data-aos="fade-left"> {data.Body6}</p>

     {/* body7 */}

     <p className=" text-base  sm:text-xl px-5 py-3" data-aos="fade-right"> {data.Body7}</p>

             {/* image2 */}
             <div className='pt-4' data-aos="fade-left">
         <img src={data.images[1].url} alt="..." className='object-cover
           shadow-sm rounded-sm  p-2 sm:h-[500px] sm:w-[600px]'/>
        </div>
             {/* body8 */}

             <p className=" text-base  sm:text-xl px-5 py-3" data-aos="zoom-in"> {data.Body8}</p>
             
              {/* body9 */}
           <p className=" text-base  sm:text-xl px-5 py-3" data-aos="zoom-in"> {data.Body9}</p>
              {/* body10 */}
              <p className=" text-base  sm:text-xl px-5 py-3" data-aos="fade-right"> {data.Body10}</p>
              {/* body11 */}
              <p className=" text-base  sm:text-xl px-5 py-3" data-aos="fade-left"> {data.Body11}</p>
              {/* body12 */}
              <p className=" text-base  sm:text-xl px-5 py-3" data-aos="zoom-in"> {data.Body12}</p>

            {/* image3 */}

        <div className='pt-8' data-aos="zoom-in">
         <img src={data.images[2].url} alt="..." className='object-cover
           shadow-sm rounded-sm  p-2 sm:h-[500px] sm:w-[600px]'/>
        </div>

                      {/* body13 */}
                      <p className=" text-base  sm:text-xl px-5 py-3" data-aos="zoom-in"> {data.Body13}</p>
              {/* body14*/}
              <p className=" text-base  sm:text-xl px-5 py-3" data-aos="fade-left"> {data.Body14}</p>
              {/* body15*/}
              <p className=" text-base  sm:text-xl px-5 py-3" data-aos="zoom-in"> {data.Body15}</p>

                        {/* body 16 conclusion */}

         <p className="text-base sm:text-xl px-5  py-3" data-aos="fade-left"> {data.Body16}</p>
                
             <div className="flex flex-col items-start pl-5 pb-3 pt-4 text-gray-700 font-semibold w-full justify-center">
                              
                              <p > Posted At : {data.createdAt}</p>

                   </div>
                
            <div className="flex flex-col  items-center max-w-[400px] mb-5 justify-center">
                 
                   <div>
                    <div className='flex justify-center items-center'>
                    <Link to="/lesson">
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
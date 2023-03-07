import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


function Lessons() {
 
  const [data, setData] = useState([])

     const getList = async  () => {
      axios.get("https://easy-crown-bull.cyclic.app/api/lessons/")
      .then(res => {
        console.log(res)
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
     }
     
     useEffect(()=> {
       AOS.init({duration:2000})
      getList()

     },[])
    

  return (
    <div className=' bg-gradient-to-t min-h-screen from-white to-[#fffadd]'>
      <div >
     <h1 className=" text-center text-[#7f030d] p-1 text-2xl font-bold"data-aos="fade-up">Agricultural Genetics</h1>
     </div>

     {
                        data.map((info,i) => (
                            
                          <div  key={i} className="flex   items-center justify-center" data-aos="zoom-in">
                            <div  className="flex bg-gradient-to-b  from-[#f3e1c1] to-[#fefbe9]
                             flex-col rounded-md items-center justify-center w-[400px] md:w-[500px]  shadow-2xl my-8 ">

                         
              <img src={info.image1[0].url}
              alt="..." className='rounded-md object-cover' />

                              
                            <h1 className="text-2xl text-[#7f030d] font-bold p-8 pt-1 pb-0 mt-1">  {info.Title} </h1>

                              
                              
                              
                              <div className="flex px-8 py-2 text-[#7f030d] font-semibold w-full justify-between">
                              
                             <Link to={ {pathname:`/fulldetails/${info._id}`}}  state={info}>
                              <h1 className="text-sm sm:text-xl text-[#7f030d]  font-semibold pt-0 ">View lecture</h1>
                              </Link>

                            </div>   
                            </div>
                        </div>
                        ))
                    }

                    <div>
                    <h2 className="pt-4 text-[#7f030d] px-5 text-center text-base"> 
           <Link to="/comment"> Kindly
           <button className="text-[#1048a9] px-1">  Click here</button></Link> to 
           drop your comments about the lectures.
            </h2>
                    </div>

    </div>
  )
}

export default Lessons
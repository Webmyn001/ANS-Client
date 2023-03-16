import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";



function About() {
  return (
    <div className='bg-gradient-to-t min-h-screen text-[#7f030d] from-white to-[#fffadd] '>
   <h1 className="text-center text-2xl sm:text-3xl pt-[7px] font-bold">About </h1>
<div className="flex flex-col justify-center items-center" data-aos="flip-right">
         <div className="w-[350px] sm:w-[500px] md:w-[600px] ">
            <h2 className="text-center p-4 font-semibold ">
          Bello Muhyideen Oladimeji, A Website Developer(MERN STACK) as well as a student at
          Obafemi Awolowo University, Ile-Ife, Nigeria.
             <h2>He is dedicated, open-minded, and calm. He gets across to people and adjust to changes with ease.
              He believes that a person should work on developing 
              their professional skills and learning new things all the time.
             </h2>
          
          <h2 className="pt-4 text-base">This website is purposely developed
           to be a learning platform for Agricultural students
           across the World to learn the essential knowledge on 
           Agricultural Genetics with simplified explanations.

           
           </h2>
           <h2 className="pt-4 text-base">I hope you will find the website intresting, educative, and friendly. </h2>
           </h2>
</div>
</div>
      </div>
  )
}

export default About
import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";


const StartProject = () => {
       const navigate = useNavigate();

  return (
    <div>
       <motion.div
      id="BuildWork"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-35 md:70 bg-linear-to-r from-[rgb(26,26,26)] via-[rgb(45,45,45)] to-[rgb(26,26,26)]"
    >
 <div className="container mx-auto px-6 ">
   <div className='flex flex-col items-center gap-5'>
     <h1 className='text-4xl md:text-6xl font-bold text-center mb-4'>Ready To Build Something <span className='text-purple-700'>Amazing?</span></h1>
    <p className='text-gray-400 text-center max-w-2xl mx-auto '>We turn your ideas into reality with custom-built solutions tailored to your goals.</p>
    <button className=  " w-40 px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 mt-12"
     type="submit" onClick={() => navigate("/BuildProject")} > Start Project</button>
   </div>
 </div>

    </motion.div>
    </div>
  )
}

export default StartProject

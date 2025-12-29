import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know about my background and passsion
        </p>
          {/* img       */}
        <div className="flex justify-between  md:flex-row items-center gap-12">
            <div className=" flex flex-col md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
           initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount:0.2 }}
      className="w-full h-full object-cover"
            src={assets.profileImg} alt="" />

            </div>
{/* content */}
<motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount:0.2 }}
      className="md:w-1/2">
        <div className="rounded-2xl p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">
                My Journey
            </h3>

            <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Maxime exercitationem numquam ipsum placeat est a quis
                  corporis rerum! Consectetur unde optio quis nesciunt ullam
                   tempora tenetur ipsam, praesentium iste accusamus. Fuga, 
                   pariatur corporis assumenda laboriosam optio consequuntur quis nemo, veniam quidem quisquam voluptatem eveniet corrupti quos? Nemo alias in modi nihil minima dolor ducimus soluta. Natus quod blanditiis saepe quae, excepturi quibusdam eveniet architecto iure, veniam qui ipsam pariatur accusamus. Deleniti quisquam, minus reprehenderit, odio ipsum nihil qui delectus consequatur molestiae inventore consequuntur quod. Inventore sequi libero, dolor soluta ducimus ut sapiente, quos quasi ipsa exercitationem 
                tenetur consectetur dolore repellendus!</p>
                <p className="text-gray-300 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur maiores, accusamus harum similique soluta alias facere veritatis praesentium facilis. Eum quo ipsum, aut obcaecati, repellat, optio non dolore porro cupiditate distinctio cumque. Aliquid, hic possimus omnis dicta expedita porro accusantium voluptates? Dolor maiores saepe magni quia, accusantium dignissimos at non veritatis aut laborum quod autem delectus aperiam quaerat repudiandae illo, ad sunt eos laboriosam odit? Corporis itaque eum magni sunt error adipisci libero. Odio aliquid corrupti eveniet incidunt accusamus nihil? Dolor maxime, voluptatum veritatis minus pariatur nisi provident praesentium odit earum ullam id unde laudantium? Nesciunt dolore fugiat quo expedita.</p>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {
                        aboutInfo.map((data, index)=>(
                            <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer">  
                            <div className="text-purple text-4xl mb-4">
                                <data.icon/>

                            </div>
                            <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                            <p className="text-gray-400">{data.description}</p>
                            
                            
                            </div>
                        ))
                    }

                </div>

        </div>

</motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

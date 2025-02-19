import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { anodata } from "../data/data"
const Freqntly = () => {
  return (
    <div className=' h-screen w-full flex justify-center items-center flex-col mt-5'>
      <h1 className=' font-bold lg:text-4xl text-2xl'>Frequently Asked <span className=' text-blue-400 font-bold'>Qustions</span></h1> 
      <div className=' flex m-auto justify-center items-center px-7 flex-col gap-6 w-full '>
        {anodata.map((item,index)=>(
            <div key={index} className=' w-[80%] h-auto px-5 gap-3 flex justify-evenly items-center flex-row'>
                <div className={index === 0 ? "px-10 items-center py-4 border rounded-md text-blue-400 shadow-lg bg-white" : "px-10 items-center py-4 border border-black rounded-md"}>
  {item.btn}
</div>

                    <div className={index === 0 ? "w-[70%] h-auto font-[600] text-blue-400" : "w-[70%] h-auto text-black font-[600]"}>
  {item.mesg}
</div>

                </div>
        ))}
        

        </div> 
        <div className=" h-40 w-auto bg-blue-600 flex justify-between items-center mb-6 rounded-md px-4"
         style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          }}
        >
            <div className=' flex justify-center items-center flex-row px-5 gap-2' >
            <div 
            className=' h-auto w-auto border border-black px-3 py-3 bg-white'
             style={{
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
              }}
            >
            <TfiHeadphoneAlt className=" text-9xl sm:text-2xl font-[900] text-blue-500"/>
            </div>
            <div>
               <p className=' text-5xl sm:text-2xl font-bold text-white'> Want to delve deeper into the program?</p> 
               <p className=' text-3xl sm:text-xl text-white '>Shere your details to recive export insight from our program team!</p>
            </div>
            </div>
         <div>
            <button className=' bg-white text-blue-400 px-5 py-3 font-[600] rounded-md'>
                Get in touch &gt;
            </button>
         </div>
        </div>
      
    </div>
  )
}

export default Freqntly

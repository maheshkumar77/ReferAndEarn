import React from 'react'
import { MdGroupAdd } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { GiWallet } from "react-icons/gi";

const Raferb = () => {
  return (
    <div className=' h-[90vh] w-[100%] bg-blue-200 flex flex-col justify-evenly items-center'>
      <h1 className=' font-bold mt-0'>How Do I <span className=' text-blue-400'>Refer?</span></h1>
      <div className=' h-auto w-auto flex justify-evenly lg:flex-row sm:flex-col items-center gap-9'>
   <div className=' h-80 w-80 rounded-full bg-white flex justify-center items-center flex-col'>
      <MdGroupAdd className=' lg:text-6xl md:text-3xl text-blue-600'/>
   </div>
   <div className=' h-80 w-80 rounded-full bg-white  flex justify-center items-center flex-col '>
  <LuNotebookPen className=' lg:text-6xl md:text-3xl text-blue-600'/>
</div>
<div className=' h-80 w-80 rounded-full bg-white flex justify-center items-center flex-col'>
<GiWallet className=' lg:text-6xl md:text-3xl text-blue-600'/>
</div>
      </div>
      <div className=' flex justify-center items-center w-full h-auto px-4 py-4'>
        <button className=' h-auto w-auto px-5 bg-blue-500 hover:text-blue-600 cursor-pointer   py-3 rounded-lg text-white '>
            Refer Now
        </button>
      </div>
    </div>
  )
}

export default Raferb

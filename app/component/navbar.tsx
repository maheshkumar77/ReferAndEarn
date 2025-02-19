import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full flex justify-center items-center'>
      <div className=' w-[50%] h-auto flex justify-center items-center rounded-full bg-blue-200 px-4 py-4'>
        <div className=' w-full h-auto flex justify-between'>
        <p className=' text-wrap  text-blue-400 hover:text-blue-500 cursor-pointer'>Refer</p>
       <p className=' text-wrap  text-blue-400 hover:text-blue-500 cursor-pointer'>Benifits</p>
       <p className=' text-wrap  text-blue-400 hover:text-blue-500 cursor-pointer'>FAQs</p>
       <p className=' text-wrap  text-blue-400 hover:text-blue-500 cursor-pointer'>Support</p>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar

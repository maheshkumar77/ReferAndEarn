import React from 'react'

const Hero = () => {
  return (
    <div className=' h-screen w-full flex justify-center items-center '>
      <div className=' h-[80vh] w-[70%] rounded-lg bg-blue-100 px-9'>
        <div className=' flex flex-col gap-5 justify-evenly w-[50%]'>
          <div className=' w-full h-auto py-4 justify-center items-center'>
            <p className=' text-6xl text-black font-[800]'>Let's Learn & Earn</p>
          </div>
          <div className=' w-full h-auto py-4 flex flex-row justify-center items-center'>
            <p className=' text-black font-bold text-4xl'>Get a chance to win up-to <span className=' text-blue-500 text-5xl'>
              Rs. 15,00</span></p>
            </div>
            <div className='w-full h-auto py-4 justify-center items-center'>
              <button className=' bg-blue-600 text-white font-[300] px-7 py-4 rounded-md'>
                Refer Now
              </button>
              </div> 
        </div>
      </div>
    </div>
  )
}

export default Hero

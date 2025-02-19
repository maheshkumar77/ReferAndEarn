import { data } from "../data/data"
import { fdata } from "../data/data"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { abdata } from "../data/data"
const Foter = () => {
  return (
    <div className=' w-full h-screen flex justify-center items-start py-11 bg-black'>
        <div className=' w-[80%] flex h-auto items-center flex-col'>
            <div className=' w-full h-auto flex justify-between border-b border-white'>
          <div className=' float-start mb-4'>
            <p className=' text-white font-bold font-serif text-3xl'>accredian</p>
            <p className=' text-white'>credential the matter</p>
          </div>
          <div className=' float-end mb-4'>
        <button className=' bg-blue-600 py-3 px-6 border border-white text-white rounded-md font-thin'>
            Schedule 1-on-1 Call Now
        </button>
        <p className=' text-white '> Speak with our Learning Advisor</p>
        </div>
        </div>
        <div className=" flex justify-evenly flex-row">
        <div className=' mt-3 flex justify-evenly items-center flex-row'>
            <div className=' h-auto px-6 flex flex-col'>
           {data.map((item,index)=>(
            <div key={index} className="flex w-full justify-between flex-row">
               <p className={index === 0 ? "text-white font-[400] float-start" : "text-white font-[600] float-start"}>
  {item}
</p>
<p className={index === 0 ? "opacity-0" : "opacity-1 font-[900] float-end text-white text-3xl"}>
  +
</p>
</div>
           ))}
            </div>
        </div>
        <div className=" h-auto w-auto px-6 flex-col mt-3">
            <h1 className=" text-white text-4xl ">Contact Us</h1>
            {fdata.map((item,index)=>(
                <div key={index} className=" text-wrap text-white">
               <p className=" text-xs"> {item} </p>
                    </div>
            ))}
           <div className=" flex flex-col w-full h-auto justify-between">
           <h1 className=" text-white font-[400] float-start">Why Accredian</h1>
           <h1 className="text-white float-start">Follow Us</h1>
           <div className=" flex flex-row gap-2 w-full">
           <FaFacebookSquare className=" text-white text-3xl"/>
           <FaLinkedin className=" text-white text-3xl"/>
           <FaTwitter className=" text-white text-3xl"/>
           <FaInstagram className=" text-white text-3xl"/>
           <FaYoutube className=" text-white text-3xl"/>
           </div>
           </div>
        </div>
        <div className=" flex flex-col gap-3">
         {abdata.map((item,index)=>(
            <div key={index} className={index === 0 ? "text-white font-[400] text-2xl" : "text-white text-xs"}>
            {item}
          </div>
          
         ))}
        </div>
        </div>
        <p className=" text-white text-xs text-center bottom-0">
        © 2024 Accredian A Brand of Fullstack Edgucation Pvt Ltd. All Right Reserved
        </p>
        </div>
    </div>
  )
}

export default Foter

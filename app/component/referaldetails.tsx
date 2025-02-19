
import { programs } from "../data/data"; // Import the programs data
import { FaGraduationCap } from "react-icons/fa6";
import {data} from "../data/data";
import { MdSwipeDownAlt } from "react-icons/md";
import MoveDotButton from "./textbotten";
const Referald = () => {
 

  return (
    <div className=' h-screen w-full flex justify-center  items-center flex-col lg:gap-10 mt-5'>
      <h1 className='font-bold sm:text-xl lg:text-4xl text-2xl'>What Are The <span className='text-blue-400'>Referral Benefits?</span> </h1>
      <div className=" w-[60%] flex justify-between">
        <p className=" flex float-end gap-1">Enroled <MoveDotButton/>   </p>
      </div>
      <div className='h-auto w-full flex justify-center items-center sm:flex-col lg:flex-row  lg:px-10 gap-5 '>
      <div 
  className="h-auto w-auto rounded-lg pb-3"
  style={{
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
  }}
>
         {data.map((k, index) => (
  <div className="w-full" key={index}>
    <div className={index === 0 ? "py-2 px-4 bg-blue-500 w-full rounded-lg" : "py-2 px-4 w-full"}>
      <div 
        className={index === 0 
          ? "  bg-blue-500 flex justify-between w-full font-[400] text-white rounded-lg" 
          : " border-b border-black flex justify-between w-full font-[400]"}
      >
        {k} 
        <p className="float-end">&gt;</p>
      </div>
    </div>
  </div>
))}

         </div>
       
        <div className=' w-auto h-auto rounded-lg'
         style={{
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        }}
        >
            <table className="  border rounded-lg">
              <thead className='bg-blue-200 rounded-lg'>
                <tr>
                  <th className=" py-2 px-4 float-start text-blue-500 justify-center">Programs</th>
                  <th className=" py-2 px-4 border-l text-blue-500 border-black"><p>Referrer Bonus</p></th>
                  <th className=" py-2 px-4  text-blue-500 border-l border-black">Referee Bonus</th>
                </tr>
              </thead>
              <tbody className=''>
                {programs.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 text-wrap flex flex-row gap-1"><FaGraduationCap className=' text-blue-400 text-xl'/>{item.program}</td>
                    <td className="py-2 px-4 border-l border-black">{item.referrerBonus}</td>
                    <td className="py-2 px-4 border-l border-black">{item.refereeBonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
         
          <button
        className="mt-4 px-4 py-2 bg-white text-black rounded  border border-black float-end flex items-center "
      >
        Show Less <MdSwipeDownAlt/>
      </button>
        </div>
       
      </div>
      <div>
        <button
      className=" bg-blue-600 text-white font-medium text-base py-4 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      role="button"
    >
     Refer Now
    </button>
        </div>
    </div>
  );
}

export default Referald;

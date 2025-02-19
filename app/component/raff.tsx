"use client"
import React, { useState } from 'react';

const ReferEarn = () => {
  const [showMore, setShowMore] = useState(false);

  const programs = [
    { category: 'PRODUCT MANAGEMENT', program: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { category: 'STRATEGY & LEADERSHIP', program: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { category: 'BUSINESS MANAGEMENT', program: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { category: 'FINITECH', program: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { category: 'SENIOR MANAGEMENT', program: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { category: 'DATA SCIENCE', program: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { category: 'DIGITAL TRANSFORMATION', program: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  ];

  const visiblePrograms = showMore ? programs : programs.slice(0, 3);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ALL PROGRAMS</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full  border ">
          <thead className='bg-blue-500'>
            <tr>
              <th className="py-2 px-4  ">Programs</th>
              <th className="py-2 px-4 border-l border-black">Referrer Bonus</th>
              <th className="py-2 px-4 border-l border-black">Referee Bonus</th>
            </tr>
          </thead>
          <tbody className=' bg-blue-100'>
            {visiblePrograms.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4  ">{item.program}</td>
                <td className="py-2 px-4  border-l border-black">{item.referrerBonus}</td>
                <td className="py-2 px-4  border-l border-black">{item.refereeBonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ReferEarn;
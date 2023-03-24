import React from "react";

import { HiRocketLaunch } from "react-icons/hi2";
import { HiDesktopComputer } from "react-icons/hi";
const Services = () => {
  return (
    <div 
    id="services"
    className=" mt-16 flex items-center  bg-gray-100 flex-col  h-screen md:mt-11">
      <h1 className="text-2xl text-gray-500 mt-4 md:text-xl md:mt-2"> Our Services</h1>
      <hr
          className="w-48 border-blue-500 border-2 mt-2"
         />
      <h1 className="text-4xl text-gray-700 mt-8 md:text-2xl md:mt-4">
        <span>
          <span className="text-blue-400 md:text-blue-500"> Strategy Consulting,</span>
        </span>
        <br />
        Analytics, &
        <br />
        Leadership
      </h1>
      <div className="flex items-center justify-center  h-48 md:h-36">
        <p className="mx-16  text-center  w-1/2 mt-16 xl:mt-2 md:w-3/4 md:h-full">
          ero amet magni odio saepe quos modi esse repellendus nulla suscipit,
          vel, corporis quaerat tenetur, aspernatur corrupti sit pariatur labore
          tempore fuga hic dolorum aut consectetur ullam quis. Aliquid,
          obcaecati. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum
          veniam ipsam. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum
          veniam ipsam.
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur sit facere numquam. <br />
        </p>
         
            <div className="flex flex-col  mt-8">
               <span className=" px-20 py-4  bg-blue-500 text-white rounded-xl mt-4 md:px-12 md:py-4">
                  Consultency
               </span>
               <span className=" px-20 py-4   bg-blue-500 text-white rounded-xl mt-4 md:px-12 md:py-2">
                 Digital Marketing
               </span>
               <span className=" px-20 py-4  bg-blue-500 text-white rounded-xl mt-4  md:px-12 md:py-2">
                  Customer Profitability
               </span>
               <span className=" px-20 py-4  bg-blue-500 text-white rounded-xl mt-4 md:px-12 md:py-4">
                  Analytics
               </span>
               <span className=" px-20 py-4  bg-blue-500 text-white rounded-xl mt-4 md:px-12 md:py-2">
                  Business Process
               </span>
               </div>
         
       </div>
    </div>
  );
};

export default Services;

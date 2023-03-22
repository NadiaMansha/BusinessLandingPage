import React from "react";

import { HiRocketLaunch } from "react-icons/hi2";
import { HiDesktopComputer } from "react-icons/hi";
const Services = () => {
  return (
    <div className=" mt-16 flex items-center  bg-gray-100 flex-col  h-screen">
      <h1 className="text-2xl text-gray-500 mt-4"> Our Services</h1>
      <hr
          className="w-48 border-blue-500 border-2 mt-2"
         />
      <h1 className="text-4xl text-gray-700 mt-8">
        <span>
          <span className="text-blue-500"> Strategy Consulting,</span>
        </span>
        <br />
        Analytics, &
        <br />
        Leadership
      </h1>
      <div className="flex items-center justify-center  h-48">
        <p className="mx-16  text-center  w-1/2">
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
               <span className=" px-20 py-4  bg-blue-500 text-white rounded-xl mt-4">
                  Consultency
               </span>
               <span className=" px-20 py-4   bg-blue-500 text-white rounded-xl mt-4">
                 Digital Marketing
               </span>
               <span className=" px-20 py-4  bg-blue-500 text-white rounded-xl mt-4 ">
                  Customer Profitability
               </span>
               <span className=" px-20 py-4   bg-blue-500 text-white rounded-xl mt-4">
                  Analytics
               </span>
               <span className=" px-20 py-4  bg-blue-500 text-white rounded-xl mt-4">
                  Business Process
               </span>
               </div>
         
       </div>
    </div>
  );
};

export default Services;

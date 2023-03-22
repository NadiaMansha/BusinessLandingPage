import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col items-center   h-screen">
      <h1 className="text-2xl text-gray-500 mt-4">Stats</h1>
      <h1 className="text-4xl text-gray-700 mt-8">
        <span>
          <span className="text-blue-500"> Over Competence,</span>
        </span>
        <br />
        over the last
        <br />
        20 years...
      </h1>
      <div className="flex items-center justify-center ">
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          sit facere numquam. <br />
        </p>
        <div className="flex flex-col  mt-8">
          <div className="flex">
            <span className=" bg-white">
              <h1 
              className="font-bold text-xl"
              >12,266</h1> <br />
              Clients that are currently <br />
              working with us
            </span>
            <span className="ml-4">
              <h1>231K</h1> <br />
              Dollars saved thorugh <br />
              our formmulated solutions
            </span>
          </div>
          <div className="flex ">
            <span className=" bg-white">
              <h1>36K+</h1> <br />
              uniquely created solutions <br />
              for clients
            </span>
            <span>
              <h1>231K</h1> <br />
              growth rate of clients
              <br />
              that worked with us
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

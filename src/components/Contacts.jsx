import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Contacts = () => {
  return (
    <div
    id="contact"
     className=" bg-blue-200  flex flex-col  justify-center  m-auto w-1/2  rounded-xl shadow-xl mt-5 contacts md:w-3/4 md:h-full md:text-xl">
      <h1 className=" ml-4 font-medium font-sans text-3xl">Contact us Today</h1>
      <p 
      className="ml-4 mt-6"
      >
        Contact us to get information on <br />
        how we can help you grow your business
      </p>
      <div className="flex mt-6">
        <div >
          <label htmlFor="First-name">First Name</label> <br />
          <input className="py-1 px-4 " name="Fisrt-name" type="text" />
        </div>
        <div>
          <label htmlFor="Last-name" className="  ml-6">Last Name</label> <br />
          <input className="py-1 px-4 ml-6" name="Last-name" type="text" />
        </div>
      </div>
      <div className="flex ">
        <div>
          <label htmlFor="Email" >Email</label> <br />
          <input className="py-1 px-4" type="email" name="Email" />
        </div>
        <div>
          {" "}
          <label htmlFor="phone" className="  ml-6">Phone</label> <br />
          <input className="py-1 px-4 ml-6" type="tel" name="phone" />
        </div>
      </div>
      <label htmlFor="details" className="mt-3">
        {" "}
        Additional Details
      </label>{" "}
      <br />
      <textarea className="  py-2  px-7 rounded-2xl" name="details"></textarea>
      <button
       className=" bg-blue-600  px-2  py-2 ml-4 mt-4 rounded-xl text-white">
        Submit</button>
    </div>
  );
};

export default Contacts;

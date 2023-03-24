import React from "react";
import netflix from "../net.png"
import pinterest from '../pin.jfif'
import paypal from '../paypal.webp'
import airnbnb from '../airbnb.jfif'
import webflow from '../webflow.png'
import visa from '../visa.jpg'

const Clients = () => {
  return (
    <div 
    id="clients"
    className="flex  items-center justify-center background1 h-screen rounded-2xl w-3/4 mt-8 mb-8 md:min-h-screen md:min-w-full">
      <div className= " flex items-center justify-center flex-col w-3/4  mt-2  h-96">
        <div className="flex justify-around  md:justify-between">
        <img 
        className="md:w-12 md:h-12 h-24 w-24 rounded-xl ml-2"
        src={pinterest} alt="" />
        <img 
        className="md:w-12 md:h-12 h-24 w-24 rounded-xl  bg-white ml-2"
        src={netflix} alt="" />
        <img 
        className="md:w-12 md:h-12 h-24 w-24 rounded-xl ml-2"
        src={paypal} alt="" />
       
        </div>
       
        <div className="flex justify-around mt-24 md:justify-between">
        <img 
        className= "md:w-12 md:h-12 h-24 w-24 rounded-xl ml-2"
        src={airnbnb} alt="" />
        <img 
        className="md:w-12 md:h-12 h-24 w-24 rounded-xl ml-2"
        src={webflow} alt="" />
        <img 
        className="md:w-12 md:h-12 h-24 w-24 rounded-xl ml-2"
        src={visa} alt="" />
       
        </div>
       
       
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white mt-4 md:text-xl">
          <span className="font-bold">
            The Global Management <br />
            Consultency
          </span>
          &nbsp; picked by so <br />
          many companies
        </h1>
        <p className="text-white mt-4 text-center w-3/4 md:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. hgfrjgijgr
          orgotktunoio Lorem, ipsum. lrem3
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          obcaecati quasi dolores. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        </p>
      </div>
    </div>
  );
};

export default Clients;

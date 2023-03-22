import React from "react";
import netflix from "../net.png"
import pinterest from '../pin.jfif'
import paypal from '../paypal.webp'
import airnbnb from '../airbnb.jfif'
import webflow from '../webflow.png'
import visa from '../visa.jpg'

const Clients = () => {
  return (
    <div className="flex  items-center background1 h-screen rounded-2xl w-3/4 mt-8 mb-8">
      <div className= " flex  flex-col w-3/4  mt-2  h-96 ">
        <div className="flex justify-around">
        <img 
        className="w-24 h-24 rounded-xl "
        src={pinterest} alt="" />
        <img 
        className="w-24 h-24 rounded-xl  bg-white"
        src={netflix} alt="" />
        <img 
        className="w-24 h-24 rounded-xl "
        src={paypal} alt="" />
       
        </div>
       
        <div className="flex justify-around mt-24">
        <img 
        className= "w-24 h-24 rounded-xl"
        src={airnbnb} alt="" />
        <img 
        className="w-24 h-24 rounded-xl "
        src={webflow} alt="" />
        <img 
        className="w-24 h-24 rounded-xl "
        src={visa} alt="" />
       
        </div>
       
       
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white mt-4">
          <span className="font-bold">
            The Global Management <br />
            Consultency
          </span>
          &nbsp; picked by so <br />
          many companies
        </h1>
        <p className="text-white mt-4 text-center w-3/4">
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

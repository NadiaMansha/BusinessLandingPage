import React from 'react'

const Footer = () => {
  return (
    <div 
    className="flex  items-center background1 h-36 min-w-full mt-12 justify-between"
    >
        
        <div className='text-white flex flex-col items-center ml-24'>
            <h1 
            className='font-bold'
            >Company Name</h1>
           <hr />

            <p 
            className='mt-4'
            >
              Everything you need and more in a <br />
              Global Management Consultency
            </p>
       
            <p 
            className=' mt-6'
            >
                CopyRight 2023 Company Name
               </p>
        </div >
        <div>
          <button 
        className="bg-blue-500  text-white  py-2 rounded-xl pl-12 px-24 font-bold mt-6 text-center"
          >
          <a href="#contact">Contact</a>
          </button>
        </div>
          
        <div 
        className='text-white flex flex-col  items-center mr-48'
        >
        <h1>Main Office</h1>
          <p>
            123 Elm Street <br />
            Lorem ipsum dolor sit amet. <br />
            (121)1234567789 <br />
            info@companyname.com <br />
          </p>
               
        </div>
    </div>
  )
}

export default Footer
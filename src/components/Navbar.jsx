import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [menu, setMenu] = React.useState(false)
    const showMenu = () => {
        setMenu(!menu)
    }

      
  return (
    <nav className="flex items-center justify-between ">
      <a  
      className='text-2xl font-bold text-gray-800'
      href="#home">Logo</a>
      <ul
      className= 'flex items-center justify-between  text-xl text-gray-800 md:hidden'
      
      >
        <li className="py-2 px-4 hover:bg-gray-200">
          <a href="#home">Home</a>
        </li>
       
        <li className="py-2 px-4 hover:bg-gray-200">
          <a href="#services">Services</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-200">
          <a href="#clients">Clients</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-200">
          <a href="#stats">Stats</a>
        </li>
        <li className="py-1 px-2 hover:bg-gray-200 bg-blue-500 text-white rounded-xl">
          <a href="#contact">Contact</a>
        </li>


      </ul>
      <div 
      className='hidden md:flex  flex-col items-center justify-center text-2xl text-gray-800'
      > 
      <button>
      <GiHamburgerMenu className='text-2xl text-gray-800' onClick={showMenu}/>
      </button>
      <div 
       className={menu ? 'flex flex-col items-center justify-center text-2xl small bg-black text-white ' : 'hidden'}
      >
         <ul 
         className=' bg-black min-h-full min-w-full flex  justify-center items-center flex-col'
           >
       <li className="py-2 px-4 hover:bg-gray-200 hover:text-black">
       <a href="#home" 
       onClick={showMenu}
       >Home</a>
     </li>
    
     <li className="py-2 px-4 hover:bg-gray-200 hover:text-black">
       <a href="#services" 
       onClick={showMenu}
       >Services</a>
     </li>
     <li className="py-2 px-4 hover:bg-gray-200 hover:text-black">
       <a href="#clients" 
       onClick={showMenu}
       >Clients</a>
     </li>
     <li className="py-2 px-4 hover:bg-gray-200 hover:text-black">
       <a href="#stats" 
       onClick={showMenu}
       >Stats</a>
     </li>
     <li className="py-2 px-4 hover:bg-gray-200 hover:text-black">
       <a href="#contact"
       onClick={showMenu}
       >Contact</a>
     </li>
     </ul>
     
      </div>
       
     
      </div>
     
    </nav>

  )
}
   

export default Navbar
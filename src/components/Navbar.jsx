import React from 'react'

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between">
              <a href="# " className='font-bold'>Logo</a>
           <ul className='flex items-center justify-between' 
           style={
            {
                listStyle: 'none',
                display: 'flex',
                width: '30%',
                justifyContent: 'space-between'

            }
           }
           >
            
        
                
                <li><a href="#">Services</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Stats</a></li>
                <li ><a
                className='bg-blue-500 text-white px-4 py-2 rounded-full'
                 href="#">Contact Us</a></li>

           </ul>
    
    
    </nav>

  )
}

export default Navbar
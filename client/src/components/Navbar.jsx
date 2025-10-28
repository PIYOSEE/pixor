import React, { useState } from 'react'
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [ user , setUser ] = useState(null)

  return (
    <div className='flex items-center justify-between py-4'>
      <Link>
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'></img>
      </Link>

      <div>
        { user ?
         <div></div> 
         : 
         <div className='flex items-center gap-2 sm:gap-5'>
          <p className='cursor-pointer'>Pricing</p>
          <button className='text-white bg-zinc-900 px-6 py-2 sm:px-10 text-sm rounded-full'>Login</button>
         </div>
        }

        
      </div>
    </div>
  )
}

export default Navbar

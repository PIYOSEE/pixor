import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const {user , setShowLogin , logout , credit} = useContext(AppContext)
  
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to ='/'>
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'></img>
      </Link>

      <div>
        { user ?
         <div className='flex items-center gap-2 sm:gap-3'>
          <button 
            onClick={()=>navigate('/buycredit')}
            className='flex items-center gap-2 bg-black px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-600'> 
            <img className='w-5' src={assets.credit_star} alt=""/>
            <p className='text-xs sm:text-sm font-light  text-white '>Credits left : {credit}</p>
          </button>
          <p className=' text-gray-800 max-sm:hidden pl-4'>Hi, {user.name}</p>
          <div className='relative group'>
            <img className='w-10 drop-shadow' src={assets.profile_icon} alt=""/>
            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
              <ul className='list-none m-0 pt-2 bg-white rounded-4xl text-sm'>
                <li 
                onClick={logout}
                className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-full transition-all duration-200 hover:bg-red-50 hover:text-red-600 hover:border-red-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/30'>
                  Logout
                </li>
              </ul>
            </div>
          </div>
         </div> 
         : 
         <div className='flex items-center gap-2 sm:gap-5'>
          <p onClick={()=> navigate('/buycredit')} 
            className='cursor-pointer'>Pricing
          </p>
          <button onClick={()=>setShowLogin(true)}
          className='text-white bg-zinc-900 px-6 py-2 sm:px-10 text-sm rounded-full cursor-pointer'>Login</button>
         </div>
        }

        
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import {assets} from '../assets/assets'

const Login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

        <form className='relative bg-white p-10 rounded-xl text-slate-600'>
            <h1 className='text-center text-2xl text-purple-900 font-medium'>Sign Up</h1>
            <p className='text-sm'>Welcome back! Please sign in to continue</p>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.profile_icon} alt="" className='w-6 border border-blue-300 rounded-full'/>
                <input type="text" className='outline-none text-sm' placeholder='Full Name' required />
            </div>
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon} alt="" className='w-6 border border-blue-300 rounded-full'/>
                <input type="email" className='outline-none text-sm' placeholder='Email ID' required />
            </div>
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" className='w-4 border border-blue-300 rounded-full'/>
                <input type="password" className='outline-none text-sm' placeholder='Password' required />
            </div>
            <p className='text-sm text-blue-700 my-4 cursor-pointer'>Forgot password?</p>
            <button className='bg-blue-600 w-ful text-white py-2 rounded-full'>Create account</button>
        </form>      
    </div>
  )
}

export default Login

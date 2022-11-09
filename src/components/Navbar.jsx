import React from 'react'
import logo from '../images/logo.svg'

function Navbar() {
  return (
    <div className="absolute">
        <div className="flex w-screen justify-between p-10 text-xl text-white items-center">
            <img src={logo} alt="" className="cursor-pointer w-64"/>
            <div className="flex space-x-6">
                <div className="hover:bg-blue-300 cursor-pointer p-5 text-2xl rounded-3xl">About</div>
                <div className="hover:bg-blue-300 cursor-pointer p-5 text-2xl rounded-3xl">Services</div>
                <div className="hover:bg-blue-300 cursor-pointer p-5 text-2xl rounded-3xl">Projects</div>
                <div className="hover:bg-blue-300 cursor-pointer p-5 text-2xl rounded-3xl">CONTACT</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
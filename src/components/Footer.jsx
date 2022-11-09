import React from 'react'
import logo from '../images/logo.svg'
import iconFacebook from '../images/icon-facebook.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconPinterest from '../images/icon-pinterest.svg'



function Footer() {
  return (
    <div className="footer h-fit flex flex-col items-center p-20 space-y-10">
            <img src={logo} alt="" className="w-44" />
        <div className="flex space-x-20 font-bold">
            <p className="hover:text-white cursor-pointer text-xl">About</p>
            <p className="hover:text-white cursor-pointer text-xl">Services</p>
            <p className="hover:text-white cursor-pointer text-xl">Projects</p>
        </div>
        <div className="flex space-x-10">
            <img src={iconFacebook} alt="" className="hover:text-white cursor-pointer" />
            <img src={iconInstagram} alt="" className="hover:text-white cursor-pointer" />
            <img src={iconTwitter} alt="" className="hover:text-white cursor-pointer" />
            <img src={iconPinterest} alt="" className="hover:text-white cursor-pointer" />
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { FaDotCircle } from "react-icons/fa";

const Footer = () => {
    const currentyear = new Date().getFullYear()
  return (
    <div className='py-2 bg-white'>
        <div className="md:flex">
            <div className="flex">
            <p className="mx-4 text-gray-500 flex"><p className="pt-1"><FaDotCircle className='h-4 w-auto'/></p><a className="ml-2" href="">Privacy</a></p>
            <p className="mx-4 text-gray-500 flex"><p className="pt-1"><FaDotCircle className='h-4 w-auto'/></p><a className="ml-2" href="">Terms</a></p>
            </div>
            <div className="flex">
                <p className="">BuddyfyConnect</p> 
                <p className="pl-2">&copy;</p>
                <p className="pl-2">{currentyear}</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
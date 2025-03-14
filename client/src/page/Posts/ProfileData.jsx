import React from 'react'
import { FaCircleInfo, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { BsFillBagFill } from "react-icons/bs";
import { FaHome, FaHeart } from "react-icons/fa";

const ProfileData = () => {
  return (
    <div className='pl-4'>
        <div className="">
            <div className="flex my-4">
                <FaCircleInfo  className='h-6 w-auto fill-gray-500'/>
                <div className="flex pl-4">
                    <div className="mr-2">Profile</div>
                    <h1 className="text-gray-500"><a href="#" className='duration-500 hover:text-blue-500' target='_blank'>Photography Videography</a></h1>
                </div>
            </div> 
            <div className="flex my-4">
                <BsFillBagFill  className='h-6 w-auto fill-gray-500'/>
                <div className="flex pl-4">
                    <div className="mr-2">Works at</div>
                    <h1 className="text-gray-500"><a href="#" className='duration-500 hover:text-blue-500' target='_blank'>JKCSS Framework</a></h1>
                </div>
            </div>
            <div className="flex my-4">
                <FaGraduationCap  className='h-6 w-auto fill-gray-500'/>
                <div className="flex pl-4">
                    <div className="mr-2">Studied at</div>
                    <h1 className="text-gray-500"><a href="#" className='duration-500 hover:text-blue-500' target='_blank'>ABC College</a></h1>
                </div>
            </div>
            <div className="flex my-4">
                <FaHome className='h-6 w-auto fill-gray-500'/>
                <div className="flex pl-4">
                    <div className="mr-2">Lives in</div>
                    <h1 className="text-gray-500"><a href="#" className='duration-500 hover:text-blue-500' target='_blank'>Kandy</a></h1>
                </div>
            </div>
            <div className="flex my-4">
                <FaLocationDot  className='h-6 w-auto fill-gray-500'/>
                <div className="flex pl-4">
                    <div className="mr-2">From</div>
                    <h1 className="text-gray-500"><a href="#" className='duration-500 hover:text-blue-500' target='_blank'>Colombo</a></h1>
                </div>
            </div>
            <div className="flex my-4">
                <FaHeart  className='h-6 w-auto fill-gray-500'/>
                <div className="flex pl-4">
                    <div className="mr-2">Single</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileData
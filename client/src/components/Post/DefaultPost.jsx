import React from 'react'
import { BsThreeDots } from "react-icons/bs";

const DefaultPost = () => {
  return (
    <div className='w-full bg-white p-6 rounded shadow-md'>
        <div className="flex justify-between">
            <div className="flex">
                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='h-10 w-auto rounded-full'/>
                <div className="pl-2">
                    <h1 className="text-md font-semibold ">Jehan Weerasuriya</h1>
                    <p className="text-sm text-gray-500">March 15, 2024 at 10:45 AM</p>
                </div>
            </div>
            <div className="mt-2"><BsThreeDots /></div>
        </div>
        <div className="mt-4">
            <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel porro corporis asperiores, id numquam labore nulla, vero ut consequatur eaque aperiam officia est quaerat excepturi. A ab repudiandae nam?
            </p>
        </div>
    </div>
  )
}

export default DefaultPost
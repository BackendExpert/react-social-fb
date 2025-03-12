import React from 'react'

const ProfileImgUser = () => {
  return (
    <div>
        <div className="flex justify-between ml-32">
            <div className="">
                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='md:border-8 border-4 border-white md:h-40 h-16 w-auto rounded-full'/>
            </div>
            <div className="mt-12 ml-2">
                <h1 className="text-2xl text-gray-500 font-semibold">Jehan Weerasuriya</h1>
                <div className="mt-2 flex">
                    <div className="flex">
                        <div className="">1.5k</div>
                        <div className="ml-2">followers </div>
                    </div>
                    <div className="ml-2">|</div>
                    <div className="flex">
                        <div className="ml-2">5</div>
                        
                        <div className="ml-2">following </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileImgUser
import React from 'react'
import UserCover from '../UserPages/UserCover'
import ProfileImgUser from '../UserPages/ProfileImgUser'
import { Outlet } from 'react-router-dom'
import ProfileMenu from '../UserPages/ProfileMenu'

const Home = () => {
  return (
    <div className="mt-20 xl:mx-24 md:mx-10 mx-4">
        <div className="relative">
            <div className="my-24 relative">
                <UserCover />
            </div>
            <div className="absolute top-0 transform -translate-x-1/2 z-10">
                <div className="md:mt-72 mt-28 md:ml-72 ml-24">
                    <ProfileImgUser />
                </div>
            </div>
        </div>
        <div className="">
            <ProfileMenu />
        </div>

        <div className="mt-36 border-t border-gray-300 pt-4">
            <Outlet />
        </div>
    </div>


  )
}

export default Home
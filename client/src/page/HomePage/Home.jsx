import React from 'react'
import UserCover from '../UserPages/UserCover'
import ProfileImgUser from '../UserPages/ProfileImgUser'

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
        <div className="mt-36 border-t border-gray-300 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia vitae libero beatae inventore magni, eaque voluptas debitis repellendus aliquid. Pariatur unde odit velit sed ullam ducimus consectetur, maxime provident!
        </div>
    </div>


  )
}

export default Home
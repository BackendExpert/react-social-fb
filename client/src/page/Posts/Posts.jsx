import React from 'react'
import ProfileData from './ProfileData'
import AllPhotos from './AllPhotos'
import NineFriends from './NineFriends'
import DefaultPost from '../../components/Post/DefaultPost'

const Posts = () => {
  return (
    <div className=''>
        <div className="md:flex">
            <div className="md:mb-0 mb-6 xl:w-1/3 md:w-1/2 border-r border-gray-200 mr-2">
                <div className="border-b border-gray-300 pb-4 bg-white rounded-md shadow-md py-4">
                    <h1 className="text-center font-semibold text-gray-500">Founder, Director, and CEO of The First South-Asian CSS Framework, Git Platform and NoSQL Database</h1>
                </div>
                <div className="border-b border-gray-300 pb-4 bg-white rounded-md shadow-md py-4 my-4">
                    <ProfileData />
                </div>
                <div className="border-b border-gray-300 pb-4 bg-white rounded-md shadow-md py-4 my-4">
                    <AllPhotos />
                </div>
                <div className="border-b border-gray-300 pb-4 bg-white rounded-md shadow-md py-4 my-4">
                    <NineFriends />
                </div>
            </div>
            <div className="md:mt-0 mt-4 xl:w-2/3 md:w-1/2 md:pb-0 pb-4">
                <DefaultPost />
            </div>
        </div>
    </div>
  )
}

export default Posts
import React from 'react'

const Nav = () => {
  return (
    <div className='py-6 xl:px-24 md:px-10 px-4 bg-sky-600/80 border-b border-gray-200 shadow-xl text-white'>
        <div className="flex justify-between">
            <div className="font-semibold uppercase">Buddyfy Connect</div>
            <div className="cursor-pointer">
                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='h-8 rounded-full w-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Nav
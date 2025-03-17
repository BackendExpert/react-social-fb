import React from 'react'

const UpcomingBD = () => {
    return (
        <div className='bg-white p-4 rounded-md shadow-md'>
            <h1 className="text-gray-500 font-semibold">Up Coming BirthDays</h1>
            <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="flex">
                    <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='h-20 rounded-full w-auto' />
                    <div className="pl-4 pt-3">
                        <h1 className="text-xl text-gray-500 font-semibold">Jehan Weerasuriya</h1>
                        <p className="">after 2 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingBD
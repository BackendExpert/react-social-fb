import React from 'react'

const Friends = () => {
    return (
        <div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow-lg">
                    <div className="flex">
                        <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='h-16 w-auto rounded-full' />
                        <a href="#"><h1 className="text-xl font-semibold pl-4 mt-2">Jehan Weerasuriya</h1></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friends
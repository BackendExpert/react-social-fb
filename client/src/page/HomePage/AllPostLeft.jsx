import React from 'react'
import secureLocalStorage from 'react-secure-storage'

const AllPostLeft = () => {
    const login = localStorage.getItem('login')
    const emailUser = secureLocalStorage.getItem('loginE')
    const userName = secureLocalStorage.getItem('loginU')

    return (
        <div>
            <a href={`/${userName}`}>
                <div className="flex">
                    <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='h-20 w-auto rounded-full' />
                    <h1 className="text-xl font-semibold pl-2 mt-4">Jehan Weerasuriya</h1>
                </div>
            </a>
        </div>
    )
}

export default AllPostLeft
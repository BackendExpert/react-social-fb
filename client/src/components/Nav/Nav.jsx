import React, { useEffect, useState } from 'react'
import { FaGear, FaPowerOff, FaCircleQuestion } from "react-icons/fa6";
import secureLocalStorage from 'react-secure-storage'

const Nav = () => {
    const [openmenu, setopenmenu] = useState(false)

    const togglemenu = () => {
        setopenmenu(!openmenu)
    }
    const login = localStorage.getItem('login')
    const emailUser = secureLocalStorage.getItem('loginE')
    const userName = secureLocalStorage.getItem('loginU')

    const headlelogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    const menudata = [
        {
            id: 1,
            name: 'Settings',
            link: '#',
            icon: FaGear,
        },
        {
            id: 2,
            name: 'Help',
            link: '#',
            icon: FaCircleQuestion,
        },
        {
            id: 3,
            name: 'LogOut',
            func: headlelogout,
            icon: FaPowerOff,
        },

    ]

    return (
        <div className="">
            <div className='py-6 xl:px-24 md:px-10 px-4 bg-sky-600/80 border-b border-gray-200 shadow-xl'>
                <div className="flex justify-between text-white">
                    <a href="/">
                        <div className="font-semibold uppercase">Buddyfy Connect</div>
                    </a>

                    {
                        login ?
                            <div className="">
                                <div className="cursor-pointer" onClick={togglemenu}>
                                    <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='h-8 rounded-full w-auto' />
                                </div>
                            </div>

                            :

                            <div className="">
                                <a href="/sign-in">
                                    <div className="bg-blue-600 text-white py-2 px-4 rounded duration-500 hover:bg-blue-700">SignIn</div>
                                </a>
                            </div>
                    }

                </div>
            </div>
            <div
                className={`ml-16 text-gray-600 mt-4 absolute top-20 right-0 w-64 bg-gray-200 shadow-lg rounded-lg p-4 transform transition-transform duration-300 ease-in-out ${openmenu ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col">
                    {
                        menudata.map((menu, index) => {
                            if (menu.name === "LogOut") {
                                return (
                                    <div className="" onClick={menu.func}>
                                        <div className="flex">
                                            <div className="my-2">
                                                <menu.icon className='h-6 w-auto' />
                                            </div>
                                            <div className="">
                                                <h1 className="text-md duration-500 hover:pl-6 pt-1 pl-4 ">{menu.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <a href={menu.link} key={index}>
                                        <div className="flex">
                                            <div className="my-2">
                                                <menu.icon className='h-6 w-auto' />
                                            </div>
                                            <div className="">
                                                <h1 className="text-md duration-500 hover:pl-6 pt-1 pl-4 ">{menu.name}</h1>
                                            </div>
                                        </div>
                                    </a>
                                )
                            }

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Nav
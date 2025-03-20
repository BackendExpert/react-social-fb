import React from 'react'
import { Link } from 'react-router-dom'

const ProfileMenu = () => {
    const menuprofile = [
        {
            id: 1,
            name: "Post",
            link: "Posts"
        },
        {
            id: 2,
            name: "About",
            link: "Aboutme"
        },
        {
            id: 3,
            name: "Friends",
            link: "Friends"
        },
        {
            id: 4,
            name: "Photos",
            link: "Photos"
        },
        {
            id: 5,
            name: "Birth Days",
            link: "Brithdays"
        },
    ]
  return (
    <div>
        <div className="mt-36 -mb-32">
            <div className="w-full flex py-4 ">
                {
                    menuprofile.map((menu, index) => {
                        return (
                            <div className="mx:mx-8 mx-2 text-gray-500 font-semibold" key={index}>
                                <div className="duration-500 hover:text-blue-500">
                                    <Link to={menu.link}>
                                        <div className="">{menu.name}</div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ProfileMenu
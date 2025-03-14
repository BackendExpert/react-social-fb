import React from 'react'

const ProfileMenu = () => {
    const menuprofile = [
        {
            id: 1,
            name: "Post",
            link: "#"
        },
        {
            id: 2,
            name: "About",
            link: "#"
        },
        {
            id: 3,
            name: "Friends",
            link: "#"
        },
        {
            id: 4,
            name: "Photos",
            link: "#"
        },
        {
            id: 5,
            name: "Birth Days",
            link: "#"
        },
    ]
  return (
    <div>
        <div className="mt-36 -mb-32">
            <div className="w-full flex">
                {
                    menuprofile.map((menu, index) => {
                        return (
                            <div className="mx-8 text-gray-500 font-semibold" key={index}>
                                <a href="" className='duration-500 hover:text-blue-500'>
                                    <div className="">{menu.name}</div>
                                </a>
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
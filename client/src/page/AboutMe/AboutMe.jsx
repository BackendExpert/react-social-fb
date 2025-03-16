import React from 'react'
import ViewAboutMe from './ViewAboutMe'
import UpdateAboutMe from './UpdateAboutMe'
import UpdateBio from './UpdateBio'
import UpdateCover from './UpdateCover'
import UpdateProfileImg from './UpdateProfileImg'

const AboutMe = () => {
  return (
    <div>
        <div className="md:flex">
            <div className="w-full md:mr-2 md:my-0 my-4">
                <div className="">
                    <ViewAboutMe />
                </div>
                <div className="">
                    <UpdateBio />
                </div>
                <div className="">
                    <UpdateProfileImg />
                </div>
            </div>
            <div className="w-full md:ml-2 md:my-0 my-4">
                <div className="">
                    <UpdateAboutMe />
                </div>
                <div className="">
                    <UpdateCover />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
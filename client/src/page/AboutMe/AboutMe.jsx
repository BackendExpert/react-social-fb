import React from 'react'
import ViewAboutMe from './ViewAboutMe'
import UpdateAboutMe from './UpdateAboutMe'

const AboutMe = () => {
  return (
    <div>
        <div className="md:flex">
            <div className="w-full md:mr-2 md:my-0 my-4">
                <ViewAboutMe />
            </div>
            <div className="w-full md:ml-2 md:my-0 my-4">
                <UpdateAboutMe />
            </div>
        </div>
    </div>
  )
}

export default AboutMe
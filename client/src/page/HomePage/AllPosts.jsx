import React from 'react'
import Footer from '../../components/Footer/Footer'
import AllPostLeft from './AllPostLeft'
import AllPostSide from './AllPostSide'


const AllPosts = () => {
    return (
        <div>
            <div className="py-32 xl:mx-32 md:mx-10 mx-4">
                <div className="flex">
                    <div className="w-full">
                        <AllPostLeft />
                    </div>
                    <div className="w-full">
                        <AllPostSide />
                    </div>
                </div>
            </div>
            <div className="xl:px-24 md:px-10 px-4">
                <Footer />
            </div>
        </div>
    )
}

export default AllPosts
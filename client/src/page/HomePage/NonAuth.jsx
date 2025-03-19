import React from 'react'
import Footer from '../../components/Footer/Footer'


const NonAuth = () => {
    return (
        <div>
            <div className="py-32 xl:mx-32 md:mx-10 mx-4">
                <p className="">Welcome to</p>
                <h1 className="text-2xl font-semibold text-sky-600">Buddyfy Connect</h1>

                <p className="my-8">
                    Buddyfy Connect is a dynamic social media platform designed to foster connections and build lasting relationships. With an intuitive user interface, Buddyfy Connect allows users to easily connect with friends, share updates, and engage in meaningful conversations. Whether you're looking to stay in touch with loved ones, make new friends, or explore exciting content, Buddyfy Connect offers a range of features that cater to your social needs. From private messaging and personalized newsfeeds to interactive groups and real-time notifications, Buddyfy Connect is your go-to hub for staying connected in a digital world.
                </p>


                <a href="/sign-in">
                    <span className="mt-4 bg-blue-500 text-white py-2 px-8 rounded shadow-xl">
                        Login to App
                    </span>
                </a>
            </div>
            <div className="xl:px-24 md:px-10 px-4">
                <Footer />
            </div>
        </div>
    )
}

export default NonAuth
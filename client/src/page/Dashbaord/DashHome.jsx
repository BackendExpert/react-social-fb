import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { admindata } from './AdminDashCard'
import CountUp from 'react-countup'


const DashHome = () => {
    return (
        <div className='my-8 mr-4'>
            <div className="flex">
                <div className="">
                    <div className="inline-block p-2 bg-sky-500">
                        <BiSolidDashboard className='h-6 w-auto fill-white' />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-sky-500 text-xl pt-1 font-semibold uppercase">Dashboard</h1>
                </div>
            </div>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4">
                {
                    admindata.map((data, index) => {
                        return (
                            <div className="bg-sky-500 py-6 px-4 rounded text-white" key={index}>
                                <div className="flex justify-between">
                                    <div className="">
                                        <h1 className="text-xl font-semibold">{data.name}</h1>
                                        <div className=""><CountUp end={data.value} duration={5}/></div>
                                    </div>
                                    <div className="">
                                        <data.icon className='h-12 w-auto'/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DashHome
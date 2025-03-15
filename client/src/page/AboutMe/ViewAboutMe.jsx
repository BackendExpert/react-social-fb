import React from 'react'

const ViewAboutMe = () => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
        <table className='w-full'>
            <tr className='h-12'>
                <td className='text-gray-500 font-semibold'>Name: </td>
                <td>Jehan Weerasuriya</td>
            </tr>
            <tr className='h-12'>
                <td className='text-gray-500 font-semibold'>Works at: </td>
                <td>JKCSS Framework</td>
            </tr>
            <tr className='h-12'>
                <td className='text-gray-500 font-semibold'>Studied at: </td>
                <td>ABC College</td>
            </tr>
            <tr className='h-12'>
                <td className='text-gray-500 font-semibold'>Lives in: </td>
                <td>Kandy</td>
            </tr>
            <tr className='h-12'>
                <td className='text-gray-500 font-semibold'>From: </td>
                <td>Colombo</td>
            </tr>
            <tr className='h-12'>
                <td className='text-gray-500 font-semibold'>Status: </td>
                <td>Single</td>
            </tr>
        </table>
    </div>
  )
}

export default ViewAboutMe
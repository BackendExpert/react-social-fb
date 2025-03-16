import React from 'react'

const DefultBtn = ({type, btnvalue, onClick}) => {
  return (
    <button type={type} onClick={onClick} className='py-2 px-8 bg-sky-600 text-white rounded duration-500 hover:bg-sky-600/80'>
        {btnvalue}
    </button>
  )
}

export default DefultBtn
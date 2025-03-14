import React from 'react'

const DefaultTextArea = ({ name, value, placeholder, required, onChange }) => {
  return (
    <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        required={!!required}
        onChange={onChange}
        className='
            h-28 
            bg-white 
            w-full 
            border-b
            border 
            text-[#0f5a97]
            border-[#0f5a97]
            pl-2 pt-1
            duration-500 
            focus:outline-none 
            focus:border-[#0f5a97]
            placeholder:text-[#0f5a97]
        '
    >

    </textarea>
  )
}

export default DefaultTextArea
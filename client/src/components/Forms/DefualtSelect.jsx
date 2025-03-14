import React from 'react'

const DefualtSelect = ({ inputoption, defultinput, onChange, required }) => {
  return (
    <select 
        onChange={onChange}
        required={!!required}
        className='
            h-12 
            bg-white 
            w-full 
            border-b
            border 
            text-[#0f5a97]
            border-[#0f5a97]
            pl-2
            duration-500 
            focus:outline-none 
            focus:border-[#0f5a97]
            placeholder:text-[#0f5a97]
        '
    >
        <option value=''>{defultinput}</option>
        {
            inputoption.map((opt, index) => {
                return (
                    <option value={opt.value} key={index}>{opt.value}</option>
                )
            })
        }
    </select>
  )
}

export default DefualtSelect
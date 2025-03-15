import React, { useState } from 'react'
import DefaultInput from '../../components/Forms/DefaultInput';

const UpdateAboutMe = () => {
    const [updatedata, setupdatedata] = useState({
        name: '',
        works: '',
        studies: '',
        live: '',
        from: '',
        status: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdatedata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headleUpdateData = (e) => {
        e.preventDefault()
        try{
            console.log(updatedata)
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
        <form onSubmit={headleUpdateData} method="post">
            <div className="">
                <DefaultInput 
                    type={'text'}
                    name={'name'}
                    value={updatedata.name}
                    placeholder={"Name"}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    </div>
  )
}

export default UpdateAboutMe
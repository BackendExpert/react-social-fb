import React, { useState } from 'react'
import DefaultInput from '../../components/Forms/DefaultInput';

const UpdateAboutMe = () => {
    const [updatedata, setupdatedata] = useState({
        name: '',
        works: '',
        studies: '',
        livein: '',
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
            <div className="my-4">
                <DefaultInput 
                    type={'text'}
                    name={'name'}
                    value={updatedata.name}
                    placeholder={"Name"}
                    onChange={handleInputChange}
                />
            </div>
            <div className="my-4">
                <DefaultInput 
                    type={'text'}
                    name={'works'}
                    value={updatedata.works}
                    placeholder={"Works At"}
                    onChange={handleInputChange}
                />
            </div>
            <div className="my-4">
                <DefaultInput 
                    type={'text'}
                    name={'studies'}
                    value={updatedata.studies}
                    placeholder={"Study At"}
                    onChange={handleInputChange}
                />
            </div>
            <div className="my-4">
                <DefaultInput 
                    type={'text'}
                    name={'livein'}
                    value={updatedata.livein}
                    placeholder={"Live In"}
                    onChange={handleInputChange}
                />
            </div>
            <div className="my-4">
                <DefaultInput 
                    type={'text'}
                    name={'from'}
                    value={updatedata.from}
                    placeholder={"From"}
                    onChange={handleInputChange}
                />
            </div>
            <div className="my-4">
                <DefaultInput 
                    type={'text'}
                    name={'status'}
                    value={updatedata.status}
                    placeholder={"Status"}
                    onChange={handleInputChange}
                />
            </div>
            
        </form>
    </div>
  )
}

export default UpdateAboutMe
import React, { useState } from 'react'
import DefultBtn from '../../components/Buttons/DefultBtn';
import DefaultTextArea from '../../components/Forms/DefaultTextArea';

const UpdateBio = () => {
    const [updatebio, setupdatebio] = useState({
        bioupdate: '',
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdatebio((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleUpdateData = (e) => {
        e.preventDefault()
        try {
            console.log(updatedata)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="">
            <div className='font-semibold text-center mt-4 p-4 rounded-md shadow-lg bg-white'>
                Founder, Director, and CEO of The First South-Asian CSS Framework, Git Platform and NoSQL Database
            </div>
            <div className='mt-4 p-4 rounded-md shadow-lg bg-white'>
                <form onSubmit={headleUpdateData} method="post">
                    <div className="my-4">
                        <DefaultTextArea 
                            name={'bioupdate'}
                            value={updatebio.bioupdate}
                            required={true}
                            onChange={handleInputChange}
                            placeholder={"Update Bio"}
                        />
                    </div>
                    <DefultBtn 
                        btnvalue={"Update Bio"}
                        type={'submit'}
                    />
                </form>
            </div>
        </div>
    )
}

export default UpdateBio
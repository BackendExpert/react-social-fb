import React, { useEffect, useState } from 'react'
import DefultFileInput from '../../components/Forms/DefultFileInput';
import DefultBtn from '../../components/Buttons/DefultBtn';

const UpdateProfileImg = () => {
    const [updateprofileimg, setupdateprofileimg] = useState({
        profileimg: '',
    })
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setupdateprofileimg((prevData) => ({
            ...prevData,
            profileimg: file,
        }));
    };

    const headleUpdateData = (e) => {
        e.preventDefault()
        try {
            console.log(updateprofileimg)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="md:flex mb-8">
            <div className='font-semibold text-center mt-4 p-4 rounded-md shadow-lg bg-white'>
                <img src="https://avatars.githubusercontent.com/u/138636749?v=4" alt="" className='h-40 w-auto'/>
            </div>
            <div className='md:pl-8 mt-4 p-4 rounded-md shadow-lg bg-white'>
                <form onSubmit={headleUpdateData} method="post">
                    <div className="my-4">
                        <DefultFileInput
                            name={'profileimg'}
                            accept="image/*"
                            required={true}
                            onChange={handleImageChange}
                        />
                    </div>
                    <DefultBtn
                        btnvalue={"Update Profile Image"}
                        type={'submit'}
                    />
                </form>
            </div>
        </div>
    )
}

export default UpdateProfileImg
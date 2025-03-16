import React, { useEffect, useState } from 'react'
import DefultFileInput from '../../components/Forms/DefultFileInput'
import DefultBtn from '../../components/Buttons/DefultBtn'

const UpdateCover = () => {
    const [updatecover, setupdatecover] = useState({
        coverimg: '',
    })
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setupdatecover((prevData) => ({
            ...prevData,
            coverimg: file,
        }));
    };

    const headleUpdateData = (e) => {
        e.preventDefault()
        try {
            console.log(updatecover)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="">
            <div className='font-semibold text-center mt-4 p-4 rounded-md shadow-lg bg-white'>
                <div className="py-20 rounded-md bg-[url(https://wallpapercave.com/wp/wp2707535.jpg)] bg-cover bg-center"></div>
            </div>
            <div className='mt-4 p-4 rounded-md shadow-lg bg-white'>
                <form onSubmit={headleUpdateData} method="post">
                    <div className="my-4">
                        <DefultFileInput
                            name={'coverimg'}
                            accept="image/*"
                            required={true}
                            onChange={handleImageChange}
                        />
                    </div>
                    <DefultBtn
                        btnvalue={"Update Cover Image"}
                        type={'submit'}
                    />
                </form>
            </div>
        </div>
    )
}

export default UpdateCover
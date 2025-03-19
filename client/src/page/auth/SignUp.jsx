import React, { useState } from 'react'
import DefaultInput from '../../components/Forms/DefaultInput';
import DefultBtn from '../../components/Buttons/DefultBtn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const [signupdata, setsignupdata] = useState({
        username: '',
        email: '',
        password: '',
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignupdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleUpdateData = async (e) => {
        e.preventDefault()
        try {
            // console.log(signupdata)

            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signup', signupdata)
            if(res.data.Status === "Success"){
                alert("Registaion Success")
                navigate('/sign-in')
            }
            else{
                alert(res.data.Error)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='mt-24 md:px-32 px-4'>
            <div className="grid xl:grid-cols-3 gap-3">
                <div className=""></div>
                <div className="md:my-44 my-20">
                    <div className="">
                        <h1 className="text-center text-2xl font-semibold text-sky-600 mb-2">SignUp</h1>
                        <form onSubmit={headleUpdateData} method="post">
                            <div className="">
                                <p className="text-gray-500 mb-2">Username</p>
                                <DefaultInput
                                    type={'text'}
                                    name={'username'}
                                    value={signupdata.username}
                                    required={true}
                                    placeholder={"Username"}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-500 mb-2">Email</p>
                                <DefaultInput
                                    type={'email'}
                                    name={'email'}
                                    value={signupdata.email}
                                    required={true}
                                    placeholder={"Email Address"}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-500 mb-2">Password</p>
                                <DefaultInput
                                    type={'password'}
                                    name={'password'}
                                    value={signupdata.password}
                                    required={true}
                                    placeholder={"Password"}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mt-4">
                                <DefultBtn
                                    type={'submit'}
                                    btnvalue={"Create Account"}
                                />
                            </div>
                        </form>

                        <div className="mt-2">
                            <p className="text-gray-500">Already have an Account ? <a href="/sign-in" className='text-sky-500'>Create New</a></p>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default SignUp
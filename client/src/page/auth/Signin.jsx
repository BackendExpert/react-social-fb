import React, { useState } from 'react'
import DefaultInput from '../../components/Forms/DefaultInput';
import DefultBtn from '../../components/Buttons/DefultBtn';
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate()
    const [signindata, setsignindata] = useState({
        email: '',
        password: '',
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignindata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleUpdateData = async (e) => {
        e.preventDefault()
        try {
            // console.log(signindata)
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signin', signindata)
            if(res.data.Status === "Success"){
                if(res.data.Result.isAdmin === true){
                    alert("login Success")
                    navigate('/Dashboard/Home')                    
                    localStorage.setItem("login", res.data.Token)
                    secureLocalStorage.setItem("loginE", res.data.Result.email)
                    secureLocalStorage.setItem("loginU", res.data.Result.username)
                    secureLocalStorage.setItem("loginR", res.data.Result.isAdmin)
                    localStorage.setItem("dashmenuID", 1)
                    window.location.reload()
                }
                else{
                    alert("login Success")
                    navigate(`/${res.data.Result.username}/Posts`)                    
                    localStorage.setItem("login", res.data.Token)
                    secureLocalStorage.setItem("loginE", res.data.Result.email)
                    secureLocalStorage.setItem("loginU", res.data.Result.username)
                    secureLocalStorage.setItem("loginR", res.data.Result.isAdmin)
                    window.location.reload()
                }
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
                        <h1 className="text-center text-2xl font-semibold text-sky-600 mb-2">SignIn</h1>
                        <form onSubmit={headleUpdateData} method="post">
                            <div className="">
                                <p className="text-gray-500 mb-2">Email</p>
                                <DefaultInput
                                    type={'email'}
                                    name={'email'}
                                    value={signindata.email}
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
                                    value={signindata.password}
                                    required={true}
                                    placeholder={"Password"}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mt-4">
                                <DefultBtn 
                                    type={'submit'}
                                    btnvalue={"SignIn"}
                                />
                            </div>
                        </form>

                        <div className="mt-2">
                            <p className="text-gray-500">Don't have an Account ? <a href="/sign-up" className='text-sky-500'>Create New</a></p>
                            <a href="#" className='text-sky-500'>Forget Password</a>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default Signin
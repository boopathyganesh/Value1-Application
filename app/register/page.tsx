"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Image1 from "@/public/images/logo-big.png"
//import { Input, Button } from "@nextui-org/react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AiTwotoneMail, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import Link from 'next/link';
import { RegisterForm, CorporateRegisterForm } from '@/components/Forms/RegisterForm';

const LoginPage = () => {
    const [init, setInit] = useState(true)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
    const toggleVisibilityRe = () => setIsRePasswordVisible(!isRePasswordVisible);
    const [type, setType] = useState("");

    function handleInit(type: string) {
        setType(type);
        setInit(false);
    }

    return (
        <section className='flex items-center justify-center h-full w-full bg-black'>
            <div className="lg:max-w-6xl mx-auto m-0 md:m-10 bg-[#242529] shadow sm:rounded-3xl flex justify-center flex-1 overflow-hidden">
                <div className="lg:w-1/2 xl:w-7/12 p-6 sm:p-12">
                    <div className='flex items-center justify-center'>
                        <div className=''>
                            <Image src={Image1} alt={''} className='w-32' />
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <div className="w-full flex-1 mt-2">
                            {init && (
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className="text-2xl xl:text-3xl font-extrabold">
                                        Sign up
                                    </h1>
                                    <div className='flex flex-col items-center justify-center py-5'>
                                        <p className='font-bold text-xl mb-6'>Are you want to join as</p>
                                        <div className='flex items-center justify-center gap-4 text-white'>
                                            <button type='button' onClick={() => handleInit("customer")} className='px-4 py-3 bg-[#303136] hover:bg-gold-300 rounded-xl text-lg font-semibold smooth'>Customer</button>
                                            <button type='button' onClick={() => handleInit("corporate")} className='px-4 py-3 bg-[#303136] hover:bg-gold-300 rounded-xl text-lg font-semibold smooth'>Corporate Partner</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="mx-auto max-w-sm">
                                {type === 'corporate' && (
                                    <CorporateRegisterForm />
                                )}
                                {type === "customer" && (
                                    <RegisterForm />
                                )}
                            </div>
                            {/* <div className='p-4 text-white flex flex-col items-center justify-center gap-3'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Input size={'md'} type="text" label="Organization's Name" labelPlacement='outside' className='w-72' placeholder='ABC Ltd' />
                                    </div>
                                    <div className='flex flex-col items-start justify-center'>
                                        <Input size={'md'} type="email" startContent={<AiTwotoneMail />} label="Organization's Mail ID" labelPlacement='outside' className='w-72' />
                                    </div>
                                    <div className='flex flex-col items-start justify-center'>
                                        <Input size={'md'} type="number" label="Contact" labelPlacement='outside'
                                            startContent={
                                                <div className="flex items-center">
                                                    <label className="sr-only" htmlFor="cCode">
                                                        Country Code
                                                    </label>
                                                    <select
                                                        className="outline-none border-0 bg-transparent text-default-400 text-small"
                                                        id="cCode"
                                                        name="cCode"
                                                    >
                                                        <option>+91</option>
                                                        <option>+7</option>
                                                        <option>+732</option>
                                                    </select>
                                                </div>
                                            }
                                            className='w-72' placeholder='7639xxx853' />
                                    </div>
                                    <Button className='bg-gold-500 font-semibold'>Next</Button>
                                </div> */}
                            {/* OTP Section */}
                            {/* <div className='p-4 text-white flex flex-col items-center justify-center gap-3'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Input size={'md'} label="Password" labelPlacement='outside'
                                        type={isPasswordVisible ? "text" : "password"}
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                              {isPasswordVisible ? (
                                                <AiFillEyeInvisible  className="text-2xl text-gold-500 pointer-events-none" />
                                              ) : (
                                                <AiFillEye  className="text-2xl text-gold-500 pointer-events-none" />
                                              )}
                                            </button>
                                          }
                                        className='w-72'/>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Input size={'md'} label="Re-Enter Password" labelPlacement='outside'
                                        type={isRePasswordVisible ? "text" : "password"}
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisibilityRe}>
                                              {isRePasswordVisible ? (
                                                <AiFillEyeInvisible  className="text-2xl text-gold-400 pointer-events-none" />
                                              ) : (
                                                <AiFillEye  className="text-2xl text-gold-400 pointer-events-none" />
                                              )}
                                            </button>
                                          }
                                        className='w-72'/>
                                    </div>
                                    <Button className='bg-gold-500 font-semibold'>Next</Button>
                                </div> */}
                            {/* <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" />
                                <button
                                    className="mt-5 tracking-wide font-semibold bg-white text-gold-100 w-full py-4 rounded-lg hover:bg-gold-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <AiFillGithub />
                                    <span className="ml-3">
                                        Sign Up
                                    </span>
                                </button>
                                <p className='text-black-800 text-sm font-medium text-right mt-6'>Do you have an account <Link className='font-bold hover:text-black-500' href={''} onClick={()=>{console.log("clicked")}}>SignIn</Link></p>
                            </div> */}
                            {/* <div className='flex flex-col items-center justify-center'>
                                            <Input size={'md'} variant='bordered' type="text" label="Your Name" labelPlacement='outside' className='w-72' placeholder=' ' />
                                        </div>
                                        <div className='flex flex-col items-start justify-center'>
                                            <Input size={'md'} type="email" startContent={<AiTwotoneMail />} label="Your Mail ID" labelPlacement='outside' className='w-72' />
                                        </div>
                                        <div className='flex flex-col items-start justify-center'>
                                            <Input size={'md'} type="number" label="Contact" labelPlacement='outside'
                                                startContent={
                                                    <div className="flex items-center">
                                                        <label className="sr-only" htmlFor="cCode">
                                                            Country Code
                                                        </label>
                                                        <select
                                                            className="outline-none border-0 bg-transparent text-default-400 text-small"
                                                            id="cCode"
                                                            name="cCode"
                                                        >
                                                            <option>+91</option>
                                                            <option>+7</option>
                                                            <option>+732</option>
                                                        </select>
                                                    </div>
                                                }
                                                className='w-72' placeholder='7639xxx853' />
                                        </div> */}
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-gold-200/80 text-center hidden lg:flex" >
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat "
                        style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;
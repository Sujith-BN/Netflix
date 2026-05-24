import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    
    const [isSignUpForm ,setSignUpForm] = useState(false)
    const toggleSignUp = () =>{
        setSignUpForm(!isSignUpForm)
    }

    return (
            <div>
                <Header />
                <div className="flex flex-col items-center text-white pt-16">
                    <div className="w-full max-w-md">
                        <h1 className="text-3xl font-bold leading-tight">
                            Enter your info to {isSignUpForm ? "Sign up" : "Sign in"}
                        </h1>
                        <p className="text-md mt-1 text-gray-300">
                            Or get started with a new account.
                        </p>
                        <form className="mt-8">

                        {!isSignUpForm && (
                            <input
                                type="text"
                                placeholder="Enter Full name"
                                className="
                                            w-full
                                            p-4
                                            rounded-lg
                                            bg-black/40
                                            border
                                            border-gray-500
                                            text-white
                                
                                        "
                            />)}
                            
                            <input
                            type="text"
                            placeholder="Email or mobile number"
                                className="
                                            mt-5
                                            w-full
                                            p-4
                                            rounded-lg
                                            bg-black/40
                                            border
                                            border-gray-500
                                            text-white
                                
                                        "
                            />                

                            <input
                            type="password"
                            placeholder="Enter your password"
                                className="
                                            mt-5
                                            w-full
                                            p-4
                                            rounded-lg
                                            bg-black/40
                                            border
                                            border-gray-500
                                            text-white
                                        
                                        "
                            />

                            <button className="w-full bg-red-600 mt-5 p-3 rounded-sm text-lg font-bold hover:bg-red-700">
                            {isSignUpForm ? "Sign up" : "Sign in"}
                            </button>

                        </form>
                        <p className="text-gray-400 mt-5"
                        onClick={toggleSignUp}
                        >
                        {isSignUpForm ? "Already have an account?" : "New to Netflix ?"} <span className="text-white cursor-pointer">{isSignUpForm ? "Sign in" : "Sign up"}</span>
                        </p>
                    </div>

                </div>
            </div>
         );
    };

export default Login;
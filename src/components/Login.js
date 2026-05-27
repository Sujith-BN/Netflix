import React from "react";
import Header from "./Header";
import { useState,useRef } from "react";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebaseconfig";
import { useNavigate } from "react-router-dom";


const Login = () => {
    
    const [isSignUpForm ,setSignUpForm] = useState(false)
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const navigate = useNavigate();
    const toggleSignUp = () =>{
        setSignUpForm(!isSignUpForm)
        email.current.value = "";
        password.current.value = ""
        setErrorMessageEmail("");
        setErrorMessagePassword("");
    }

   const handleSubmit = (email, password) => {

    const validationResult = validateData(email, password);

    if (!validationResult.email.isValid) {
        setErrorMessageEmail(validationResult.email.message);
    } else {
        setErrorMessageEmail("");
    }

    if (!validationResult.password.isValid) {
        setErrorMessagePassword(validationResult.password.message);
    } else {
        setErrorMessagePassword("");
    }

    if(!(validationResult.email.isValid) || !(validationResult.password.isValid)) return;

    if(isSignUpForm){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value , photoURL: ""
                }).then(() => {
              
             
                }).catch((error) => {
              
    });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessageEmail(errorMessage+"  "+errorCode);


     });

    }
    else{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);      
            navigate("/browse");                          
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessageEmail(errorMessage+"  "+errorCode);


     });

    }


   }

    return (
           <div>
                <Header />

                <div className="min-h-screen flex flex-col items-center text-white pt-10 sm:pt-16 px-4">
                    
                    <div className="w-full max-w-md">

                        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                            Enter your info to {isSignUpForm ? "Sign up" : "Sign in"}
                        </h1>

                        <p className="text-sm sm:text-md mt-1 text-gray-300">
                            Or get started with a new account.
                        </p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                            className="mt-8"
                        >

                            {isSignUpForm && (
                                <input
                                ref = {name}
                                    type="text"
                                    placeholder="Enter Full name"
                                    className="
                                        w-full
                                        p-3 sm:p-4
                                        rounded-lg
                                        bg-black/40
                                        border
                                        border-gray-500
                                        text-white
                                        text-sm sm:text-base
                                    "
                                />
                            )}

                            <input
                                ref={email}
                                type="text"
                                placeholder="Email or mobile number"
                                className="
                                    mt-5
                                    w-full
                                    p-3 sm:p-4
                                    rounded-lg
                                    bg-black/40
                                    border
                                    border-gray-500
                                    text-white
                                    text-sm sm:text-base
                                "
                            />

                            {errorMessageEmail && (
                                <p className="text-red-500 mt-2 text-sm">
                                    {errorMessageEmail}
                                </p>
                            )}

                            <input
                                ref={password}
                                type="password"
                                placeholder="Enter your password"
                                className="
                                    mt-5
                                    w-full
                                    p-3 sm:p-4
                                    rounded-lg
                                    bg-black/40
                                    border
                                    border-gray-500
                                    text-white
                                    text-sm sm:text-base
                                "
                            />

                            {errorMessagePassword && (
                                <p className="text-red-500 mt-2 text-sm">
                                    {errorMessagePassword}
                                </p>
                            )}

                            <button
                                onClick={() =>
                                    handleSubmit(
                                        email.current.value,
                                        password.current.value
                                    )
                                }
                                className="
                                    w-full
                                    bg-red-600
                                    mt-5
                                    p-3
                                    rounded-sm
                                    text-base sm:text-lg
                                    font-bold
                                    hover:bg-red-700
                                "
                            >
                                {isSignUpForm ? "Sign up" : "Sign in"}
                            </button>

                        </form>

                        <p
                            className="text-gray-400 mt-5 text-sm sm:text-base cursor-pointer"
                            onClick={toggleSignUp}
                        >
                            {isSignUpForm
                                ? "Already have an account?"
                                : "New to Netflix ?"}

                            <span className="text-white">
                                {isSignUpForm ? " Sign in" : " Sign up"}
                            </span>
                        </p>

                    </div>
                </div>
            </div>
         );
    };

export default Login;
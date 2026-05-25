import React from 'react'
import Login from './Login'; 
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebaseconfig';
import {useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();


  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email,  uid } = user;
        dispatch(addUser({
          displayName :displayName,
          email: email,
          uid: uid
        }));

      } else {
        dispatch(removeUser());
      
      }
    });
  }, [])

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element : <Login/>
        },
        {
            path:"/browse",
            element : <Browse/>
        }

    ])
     
    return (
       <div className="min-h-screen bg-cover bg-center"
            style={{
            backgroundImage:
                "url('https://occ-0-299-300.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png')",
            }}
        >
            <RouterProvider router={appRouter} />
        </div>

    )
}

export default Body
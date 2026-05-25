import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const displayName = userData?.displayName;



  const signOutHandler = () =>{
    signOut(auth).then(() => {
      navigate("/");
      
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
   <div className="flex items-center justify-between px-6 py-4">

      <img
        className="w-32 object-contain"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

  
    {userData && (
        <div className="flex items-center gap-4">
        <p className="text-white text-xl font-semibold" >{displayName}</p>
        <img
          className="w-10 h-10 rounded-sm"
          src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229"
          alt="User Logo"
        />

        <button 
        onClick={signOutHandler}
        className="text-white bg-red-600 px-4 py-2 rounded-sm text-sm font-semibold">
          Sign Out
        </button>

      </div>)}

  </div>
    <hr className='mt-2 border-t-[0.5px] border-gray-500'></hr>

    
    </>
   
   
  )
}

export default Header

// Header.js

import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGO, USER_LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);

  const displayName = userData?.displayName;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;

        dispatch(
          addUser({
            displayName,
            email,
            uid,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());

        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const signOutHandler = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-4 flex items-center justify-between bg-gradient-to-b from-black">
      <img className="w-44 object-contain" src={LOGO} alt="Netflix Logo" />

      {userData && (
        <div className="flex items-center gap-5">
          <p className="text-white text-lg font-medium">{displayName}</p>

          <img
            className="w-10 h-10 rounded-md"
            src={USER_LOGO}
            alt="User Logo"
          />

          <button
            onClick={signOutHandler}
            className="text-white bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md text-sm font-semibold transition duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

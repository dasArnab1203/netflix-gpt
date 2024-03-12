import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
import { LANG, LOGO } from "../utilities/constants";
import { toggleSearch } from "../utilities/searchSlice";
import lang from "../utilities/langConstants";
import { changeLanguage } from "../utilities/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.gpt.showSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSearchClick = () => {
    dispatch(toggleSearch());
  };

  const handlelangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center">
          {showSearch && (
            <select
              className="bg-gray-800 text-white p-2 m-2"
              onChange={handlelangChange}
            >
              {LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-4 bg-purple-800 text-white"
            onClick={handleSearchClick}
          >
            {showSearch ? "Home" : "Search"}
          </button>
          <img
            className="h-10 w-10 justify-evenly"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            className="px-2 font-semibold text-white"
            onClick={handleSignOut}
          >
            {" "}
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

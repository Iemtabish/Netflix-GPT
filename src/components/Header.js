import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); 
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error")
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handlelanguageChange =(e) => {
   dispatch(changeLanguage(e.target.value));
  }


    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");

      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="absolute w-screen px-8 py-4 z-50 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-56"
        src={LOGO}
        alt="logo"
      />

      {user && (<div className="flex p-6">
        {showGptSearch &&<select className="p-1 h-10 bg-gray-900 text-white" onChange={handlelanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}; 
        </select>}
        <button className="py-2 px-4 mx-4 my-2 m-2 bg-blue-600  text-white rounded-lg"  onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
        <img
          className="w-10 h-10"
          alt="userIcon"
          src="https://occ-0-2484-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        ></img>

        <button className="text-white font-bold" onClick={handleSignOut}>
          (Sign out)
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
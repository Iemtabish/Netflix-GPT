import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); 

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error")
      });
  };

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
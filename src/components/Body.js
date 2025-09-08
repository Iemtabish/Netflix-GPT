import { useEffect } from 'react';
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser , removeUser} from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL:photoURL}));
        
      } else {
        dispatch(removeUser());
        

      }
    });
  }, [dispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
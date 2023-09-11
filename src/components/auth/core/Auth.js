// import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
// import * as authHelper from './AuthHelper';
// import { getUserByToken } from './_request';
// import { useDispatch } from 'react-redux';
// import { fetchAuthUserSuccess } from '../state/_action';

// const AuthContext = createContext();

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(authHelper.getAuth());
//   const [currentUser, setCurrentUser] = useState();
//   const saveAuth = (auth) => {
//     setAuth(auth);
//     if (auth) {
//       authHelper.setAuth(auth);
//     } else {
//       authHelper.removeAuth();
//     }
//   };

//   const logout = () => {
//     saveAuth(undefined);
//     setCurrentUser(undefined);
//   };

//   return (
//     <AuthContext.Provider value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const AuthInit = ({ children }) => {
//   const dispatch = useDispatch();
//   const { auth, logout, setCurrentUser } = useAuth();
//   const didRequest = useRef(false);
//   const [showSplashScreen, setShowSplashScreen] = useState(true);

//   useEffect(() => {
//     const requestUser = async (apiToken) => {
//       try {
//         if (!didRequest.current) {
//           const { data: { data: user } } = await getUserByToken(apiToken);
//           if (user) {
//             setCurrentUser(user);
//           }

//           if (user?.id) {
//             dispatch(fetchAuthUserSuccess(user));
//           }
//         }
//       } catch (error) {
//         console.error(error);
//         if (!didRequest.current) {
//           logout();
//         }
//       } finally {
//         setShowSplashScreen(false);
//       }

//       return () => (didRequest.current = true);
//     };

//     if (auth && auth.token) {
//       requestUser(auth.token);
//     } else {
//       logout();
//       setShowSplashScreen(false);
//     }
//   }, []);

//   return "hello";
// };

// export { AuthProvider, AuthInit, useAuth };


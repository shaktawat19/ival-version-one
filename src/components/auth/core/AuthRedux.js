// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { getUserByToken } from "./_requests";

// export const actionTypes = {
//   Login: "[Login] Action",
//   Logout: "[Logout] Action",
//   Register: "[Register] Action",
//   UserRequested: "[Request User] Action",
//   UserLoaded: "[Load User] Auth API",
//   SetUser: "[Set User] Action",
//   SetPermissions: "[Set Permissions] Action",
// };

// const initialAuthState = {
//   user: undefined,
//   authToken: undefined,
//   permissions: [],
// };

// export const reducer = persistReducer(
//   { storage, key: "inn4smart1-auth", whitelist: ["user", "authToken"] },
//   (state = initialAuthState, action) => {
//     switch (action.type) {
//       case actionTypes.Login: {
//         const { authToken } = action.payload;
//         return { authToken, user: undefined, permissions: [] };
//       }

//       case actionTypes.Register: {
//         const { authToken } = action.payload;
//         return { authToken, user: undefined, permissions: [] };
//       }

//       case actionTypes.Logout: {
//         return initialAuthState;
//       }

//       case actionTypes.UserLoaded: {
//         const { user } = action.payload;
//         return { ...state, user };
//       }

//       case actionTypes.SetUser: {
//         const { user } = action.payload;
//         return { ...state, user };
//       }

//       case actionTypes.SetPermissions: {
//         return { ...state, permissions: action.payload };
//       }

//       default:
//         return state;
//     }
//   }
// );

// export const actions = {
//   login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
//   register: (authToken) => ({ type: actionTypes.Register, payload: { authToken } }),
//   logout: () => ({ type: actionTypes.Logout }),
//   requestUser: () => ({ type: actionTypes.UserRequested }),
//   fulfillUser: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
//   setUser: (user) => ({ type: actionTypes.SetUser, payload: { user } }),
//   setPermissions: (data) => ({ type: actionTypes.SetPermissions, payload: data }),
// };

// export const thunkActions = {
//   loginUser: (authToken) => async (dispatch) => {
//     dispatch(actions.login(authToken));
//     dispatch(actions.requestUser());

//     try {
//       const response = await getUserByToken(authToken);
//       const user = response.data;
//       dispatch(actions.fulfillUser(user));
//     } catch (error) {
//       // Handle error
//     }
//   },

//   registerUser: (authToken) => async (dispatch) => {
//     dispatch(actions.register(authToken));
//     dispatch(actions.requestUser());

//     try {
//       const response = await getUserByToken(authToken);
//       const user = response.data;
//       dispatch(actions.fulfillUser(user));
//     } catch (error) {
//       // Handle error
//     }
//   },
// };

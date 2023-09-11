// import { createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { rootReducer } from "./reducer";
// // import rootReducer from "./reducer";

// const middleware = [thunk];

// const persistConfig = {
//   key: 'root', // Key for the root object in the storage
//   storage, // Storage engine to use for persisting data
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// export const persistor = persistStore(store);
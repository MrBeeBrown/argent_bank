import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";

const Store = configureStore({
  reducer: {
    user: userSlice,
  },
});
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default Store;
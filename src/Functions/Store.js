import { configureStore } from "@reduxjs/toolkit";
import FeatureReducer from './Slice'



const store = configureStore({
     reducer: {
      feature: FeatureReducer,
    }
})
   
export default store
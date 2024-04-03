import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
  name:'search',
  initialState:{},
  reducer:{
    cachesearch:(state,action)=>{
        state=Object.assign(state,action.payload);
    }
  }

})

export const{cachesearch}=searchSlice.actions
export default searchSlice.reducer



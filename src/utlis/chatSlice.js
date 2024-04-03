import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";



const chatSlice= createSlice({

  

    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{

        addMessage:(state,action)=>{
            //state.messages.splice(10,1)
            state.messages.unshift(action.payload)
        }
    }

})

export const{addMessage}=chatSlice.actions
export default chatSlice.reducer
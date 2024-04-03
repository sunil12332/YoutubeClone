import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import React, { useEffect, useState } from "react";
import { addMessage } from "../utlis/chatSlice";
import { generate_name } from "../utlis/Helper";
import { Link } from "react-router-dom";

const LiveChat=()=>{

  //  const[Livemessage,setLivemessage]=useState(" ")
    const dispatch=useDispatch()

    
    const searchmessage= useSelector((store)=>store.chat.messages);
  useEffect(()=>{

    const i= setTimeout(()=>{
    //  console.log("APi Polling")
       
      dispatch(
        addMessage({
            name:generate_name(),
            message:'Hi sunil is here'
        })
      );
      

    },200);
   
  return()=>clearInterval(i);
   
  },)

    return(
    <>
   
    <div className="  flex-col-reverse w-full h-[600px] ml-2 p-2 border-2 border-black bg-slate-100 rounded-lg overflow-y-scroll ">
        {
        searchmessage.map((c,index)=>
        <ChatMessage 
        name={c.name}
        message={c.message}
        key={index}/>)
        }
    </div>
    <form className="w-full p-2 ml-2 border border-black bg-gray-800"
     onSubmit={(e)=>{

     // e.defaultPrevented();
      console.log("clicked")
      dispatch(
       addMessage(
         {
           name:"sunil chaudhary",
         //  message:Livemessage
         }
         
       )
      )
       }}>
      <input className="w-[320px] border-2 border-black cursor-pointer  z-50 " type='text'  placeholder="hello" //value={Livemessage} //onChange={(e)=>{
        // setLivemessage(e.target.value)}}
        />

        
       
      <button className="  px-2 mx-2 bg-green-100">Send</button>

  
    </form >
    <input className="border-2 border-black" type='text'></input>

    </>

    )
}

export default LiveChat
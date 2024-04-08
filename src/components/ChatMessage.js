import React from "react";
import { useSelector } from "react-redux";


const ChatMessage=({name,message})=>{


    return(
        <div className="flex items-center px-2 py-2">
        <img
        className="h-8"
        alt="user"
        src="https://clipground.com/images/user-icon-vector-png-6.png"
        />
        <div className="flex flex-col px-2">
        <span>{name}</span>
        <span>{message}</span>
        </div>
       

        </div>
    )
}

export  default ChatMessage;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utlis/appSlice";
import { useSearchParams } from "react-router-dom";
import { Comment_API } from "../utlis/contants";
import { GOOGLE_API_KEY } from "../utlis/contants";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat"



const WatchPAge=()=>{
    const[searchParams]=useSearchParams()
    console.log(searchParams.get("v"))

    const[commentSec,setcommentSection]=useState();
   
    const dispatch=useDispatch();

    useEffect(()=>{
    dispatch(closeMenu());
    CommentSection();
    },[])

    const CommentSection = async()=>{

        const data=await fetch(Comment_API+"raVpp00Z3nQ"+"&key="+GOOGLE_API_KEY);

        const json= await data.json();
         
        console.log(json);
    }
    
   

    
    return(
        <div className="flex flex-col">
            <div className="flex flex-row">
        <div className="p-10">
            
            <iframe width="1000" height="500"
             src={"https://www.youtube.com/embed/"+searchParams.get("v")}
             title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
              </iframe>     
        </div>
        <div className="w-[420px] h-[420px]">
          <LiveChat/>
        </div>
        </div>
          <div className="px-10 flex flex-col gap-8">
          <CommentContainer className="flex my-6"/>
      </div>
      </div>
    )
}
export default WatchPAge
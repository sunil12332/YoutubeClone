import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utlis/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer =()=>{
   
    const[videos,setVideos]=useState([]);

    useEffect(()=>{
         getVideos();
    },[]);

    const getVideos=async()=>{

        const data=await fetch(YOUTUBE_VIDEOS_API);
        const json= await data.json();
     //   console.log(json.items);
        setVideos(json.items)
    } 

    return(
        <div>
            <div>sunil</div>
        <div className="flex flex-wrap">
        {
              
            videos.map((video) =>
            
            <Link to={"/watch?v="+video.id}><VideoCard  key={video.id} Id={video.id} info={video}/></Link>
            
            )
        }
        </div>
        </div>
    )
}

export default VideoContainer;
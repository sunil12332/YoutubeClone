import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice';
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { cachesearch } from '../utlis/searchSlice';

const Header = ()=>{

  const[searchQuery,setsearchquery]=useState(" ");
  const[suggestion,setsuggestion]=useState([]);
  const[showsuggestion,setshowsuggestion]=useState(false);
  const dispatch=useDispatch();

  const presentsearch=useSelector((store)=>store.search)

    useEffect(()=>{

    const timer= setTimeout(()=>
    { if(presentsearch[searchQuery])
      {
      setsuggestion(presentsearch[searchQuery]);
      }
      else
      {
        fetchquery()
      }
      },200)

    return()=>{
      clearTimeout(timer);
    };



  },[searchQuery])

 

  const fetchquery= async()=>{
     
    const data= await fetch("http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="+searchQuery);
    const json= await data.json();
     
  
    setsuggestion(json[1]);

    // dispatch(cachesearch({
    //   searchQuery:json[1]
    // }))

  }


  

  const toogleMenuHandler=()=>{
    dispatch(toggleMenu());
  }


  const clickfunction=(c)=>{
    console.log(c);
   //  setsearchquery(c)
  }

  return(
<div className=' sticky top-0 absolute  bg-gray-100  grid grid-flow-col p-2 m-2 shadow-lg'>
  <div className='flex col-span-1 cursor-pointer'>
    <img
    onClick={()=>toogleMenuHandler()}
    className='h-8' src='https://th.bing.com/th/id/OIP.ob73mXaLtmbUgANF_XWvFwHaHa?rs=1&pid=ImgDetMain'/>
    <img className='h-8 mx-2' src='https://pngimg.com/uploads/youtube/youtube_PNG102349.png'/>
  </div>

  <div className='col-span-10 px-10'>
   <input  
   className='border-2 border-gray-400 w-1/2 p-2 rounded-l-full'
   type='text'
   value={searchQuery}
   onFocus={()=>setshowsuggestion(true)}
   onBlur={()=>setshowsuggestion(false)}
   onChange={(e)=>setsearchquery(e.target.value)}
   >
  
   </input>
   <button className='border h-[2.71rem] border-gray-400 px-5 -py-5 rounded-r-full bg-gray-100 relative top-[1px]'><CiSearch /></button>
     <ul className='fixed top-15 bg-white w-[36rem]  mx-3 border-2 rounded-lg border-x-yellow-50 shadow-lg '>
       {
        showsuggestion&&
        suggestion.map((c,index) => (
          <li className='p-2 hover:bg-gray-200 flex gap-2 cursor-pointer' key={index} onClick={()=>clickfunction(c)}>
            <FiSearch className='cursor-pointer'  />
            {c}
          </li>
        ))
          

       }
     </ul>
   </div >


  <div className='col-span-1'>
  <img className='h-8' src='https://clipground.com/images/user-icon-vector-png-6.png'/>
  </div>

</div>

  )
}


export default  Header;
import React from "react";


const CommentsData=[
    {
        name:"sunil",
        text:"Loreum",
        replies:[
            {
                name:"sunil",
                text:"Loreum" 
            },
            {
                name:"sunil",
                text:"Loreum" 
            }, 
        ]
    },
    {
        name:"sunil",
        text:"Loreum",
        replies:[
            {
                name:"sunil",
                text:"Loreum" 
            },
            {
                name:"sunil",
                text:"Loreum" 
            }, 
        ]
    },
    {
        name:"sunil",
        text:"Loreum",
        replies:[
            {
                name:"sunil",
                text:"Loreum" 
            },
            {
                name:"sunil",
                text:"Loreum" 
            }, 
        ]
    },
    {
        name:"sunil",
        text:"Loreum",
         replies:[
            {
                name:"sunil",
                text:"Loreum" 
            },
            {
                name:"sunil",
                text:"Loreum" 
            }, 
        ]
    },
    {
        name:"sunil",
        text:"Loreum",
        replies:[
            {
                name:"sunil",
                text:"Loreum" 
            },
            {
                name:"sunil",
                text:"Loreum" 
            }, 
        ]
    },
    {
        name:"sunil",
        text:"Loreum",
        replies:[
            {
                name:"sunil",
                text:"Loreum" 
            },
            {
                name:"sunil",
                text:"Loreum" 
            }, 
        ]
    },
]


const Comment=({data})=>{
    const{name,text,replies}=data;
    console.log(replies);
    return(
        <div className="flex shadow-lg bg-gray-200 rounded-l py-2  border-b-2 border-black">
        <div>
        <img 
        className="w-12 h-12"
        alt="user"
        src='https://clipground.com/images/user-icon-vector-png-6.png'
        />
        </div>

        <div className="px-5 ">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
        </div>
    )
}

const CommentList=({comments})=>{
    console.log(comments)
    return comments.map((comment,index)=>(
        <div>
        <Comment key={index} data={comment}/>
        <div className="pl-5 border border-l-black ml-5"
        >
          {/* { <CommentList comments={comment.replies}></CommentList> } */}
        </div>

        </div>
    )   
       
       
    
        
    )
}





const CommentContainer=()=>{
    return(
        <div className="m-5 p-2">
         <h1 className="text-2xl font-bold"> Comments</h1>
          <CommentList comments={CommentsData}></CommentList>
         
        </div>
    )
}


export  default  CommentContainer;
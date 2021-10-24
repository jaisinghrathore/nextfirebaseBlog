import React,{useState} from 'react'
import {db} from "../../firebase";
import { useRouter } from 'next/router'

export default function blogs({blog,commentsData}) {
  const[comment,setComment] = useState("");
  const[allComm,setAllComm] = useState(commentsData);

  const router = useRouter();
  const {blogs} = router.query;


    const click = async() => {
        console.log(allComm)
        await db.collection('blogs').doc(blogs).collection('comments').add({
            comment:comment,
            comment_by:blog.created_by
        })

        const commentss = await db.collection("blogs").doc(blogs).collection('comments').get();
        const AllComments = commentss.docs.map(comDocSnap=>comDocSnap.data());
        console.log(AllComments);
        setAllComm(AllComments);
        setComment('');
    }



  if(router.isFallback){
      return <p>Loading...</p>
  }

    return (
        <div style={{display: 'flex',flexDirection:"column",alignItems:"center",padding:"0 100px"}}>
        <h1>{blog.title}</h1>  
        <p>Created at ---- {new Date(blog.created_at).toDateString()}</p>
        <img style={{width:"400px",height:"400px"}} src={blog.imageUrl}></img><br/>
        <p>{blog.body}</p>


        <input value={comment} onChange={(e)=>setComment(e.target.value)} style={{backgroundColor:"#F2F2F2",border:"none",borderBottom:"1px solid #000",height:'36px',borderRadius:"6px",width:"100%"}} placeholder="add a comment."></input><br/>
        <button onClick={click} style={{backgroundColor:"#3598DC",border:"none",borderRadius:"6px",color:"white",padding:"6px 20px"}} >Make Comment</button>

<div style={{width:"100%",paddingTop:"40px"}}>
<ol>

{
    allComm && allComm.length > 0 ?
    allComm.map((val,ind)=>(
        <li key={ind}>{val.comment}</li>
    )) : null
}

</ol>            
</div>

</div>
    )
}



export async function getServerSideProps(context){
        const idd = context.params.blogs;
        const querySnap = await db.collection("blogs").doc(idd).get();
        const comments = await db.collection("blogs").doc(idd).collection('comments').get();

        const AllComments = comments.docs.map(comDocSnap=>comDocSnap.data());
    

  return{
    props:{
        blog:{
            ...querySnap.data(),
            created_at: querySnap.data().created_at.toMillis(),
        },
        commentsData:AllComments
    }
  }
};
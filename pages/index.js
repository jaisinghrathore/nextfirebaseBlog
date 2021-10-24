import React,{useState,useEffect} from 'react'
import Card from "../components/Card"
import {db} from "../firebase";
import { useRouter } from 'next/router'

export default function index({AllBlogs}) {
  const router = useRouter()

  const[blogs,setBlogs]=useState(AllBlogs);
  const[end,setEnd]=useState(false);

  

  React.useEffect(async()=>{
    const querySnap = await db.collection("blogs").orderBy('created_at',"desc")
    .limit(blogs.length).get()
    const AllBlogs = querySnap.docs.map(docSnap=>{
      return{
        ...docSnap.data(),
        created_at: docSnap.data().created_at.toMillis(),
        id:docSnap.id
      }
    })
    setBlogs(AllBlogs);
  },[blogs.length,router.query.counter])


  const loadMore = async() => {
    const last = blogs[blogs.length-1]
    const res=await db.collection('blogs')
    .orderBy("created_at","desc")
    .startAfter(new Date(last.created_at))
    .limit(2)
    .get()
    const newBlogs = res.docs.map(docSnap=>{
      return{
        ...docSnap.data(),
        created_at: docSnap.data().created_at.toMillis(),
        id:docSnap.id
      }
    });
    setBlogs(blogs.concat(newBlogs));
    if(newBlogs.length < 2){
      setEnd(true)
    }
  }

  React.useEffect(()=>{
    router.push(`/?counter=${blogs.length}`, undefined, { shallow: true })
  },[blogs])

    return (
    <>
        <div style={{backgroundColor:"#3598DC",minHeight:'100vh',width:'100%',zIndex:'-1',display:"grid",placeItems:'center',padding:"20px 0 0 0"}}>
        {
          blogs && blogs.length>0 ?
          <>
         { blogs.map((data,ind)=>(
            <div key={ind}>
           <Card 
             imageLink={data.imageUrl} 
             title={data.title}
             body={data.body}
             ReadMoreLink={data.id}
           />
           </div>
          ))}
          {
            end==false? 
          <button onClick={loadMore} style={{border:"none",borderRadius:"6px",padding:"5px 10px",backgroundColor:"white",color:"#3598DC",marginBottom:"20px"}} >Load More.</button>
          :
          <p>No items left.</p>
          }
          </>
          :
          null
        }
        </div>
    </>
  )
}


export async function getServerSideProps(context){

  let count=3;

  if(context.query.counter){
      count = context.query.counter
  }

    const querySnap = await db.collection("blogs").orderBy('created_at',"desc")
    .limit(count).get()
    const AllBlogs = querySnap.docs.map(docSnap=>{
      return{
        ...docSnap.data(),
        created_at: docSnap.data().created_at.toMillis(),
        id:docSnap.id
      }
    })

    return{
    props:{
      AllBlogs:AllBlogs
    }
  }
}
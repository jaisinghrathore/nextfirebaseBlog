import React from 'react';
import Link from "next/link"

export default function Card({imageLink,title,body,ReadMoreLink}) {
    return (
        <>
             <div style={{width:"400px",height:"400px",borderRadius:"4px",overflow:"hidden",border:"none",backgroundColor:"white",boxShadow:"1px 1px 1px 1px black",marginBottom:"20px"}}>
                <div style={{width:"100%",height:"280px",position:"relative"}}>
                  <img src={imageLink} height="100%" width="100%" ></img>
                  <h4 style={{position:"absolute",bottom:"10px",padding:"0 0 0 10px",color:"white"}}>{title}</h4>
                </div>
                <div style={{width:"100%",height:"120px",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"10px"}}>
                      <p style={{whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis",padding:"10px 0",borderBottom: "1px solid silver"}} >{body}</p>
                      <Link href={`/blogs/${ReadMoreLink}`} ><h4 style={{textAlign: "center",color:"#3598DC",cursor: "pointer"}}>Read More</h4></Link>
                </div>
            </div>            
        </>
    )
}

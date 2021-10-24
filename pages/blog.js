import Footer from "../components/Footer"
import Nav from "../components/Nav"
import {useAuth} from "../components/Context"


function Blog() {


    return (
        <div style={{display: 'flex',flexDirection:"column",alignItems:"center",padding:"0 100px"}}>
                <h1>How to Start a Bike</h1>  
                <p>Created on -- Thu Mar 25 2021</p>
                <img style={{width:"400px",height:"400px"}} src="https://images.unsplash.com/photo-1631953335466-0a45c7a6a035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img><br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                <input style={{backgroundColor:"#F2F2F2",border:"none",borderBottom:"1px solid #000",height:'36px',borderRadius:"6px",width:"100%"}} placeholder="add a comment."></input><br/>
                <button style={{backgroundColor:"#3598DC",border:"none",borderRadius:"6px",color:"white",padding:"6px 20px"}} >Make Comment</button>

        <div style={{width:"100%",paddingTop:"40px"}}>
        <ol>
            <li>This is jai singh rahtore and i am so glad that you are here.</li>
        </ol>            
        </div>

        </div>
    )
}

export default Blog;

Blog.getLayout = function PageLayout(page){
    return(
        <>
            <Nav/>
            {page}
            <Footer/>
        </>
    );
}

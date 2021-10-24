import Link from "next/link";
import {useAuth} from "./Context"

export default function Nav() {

  const{user,signOut}=useAuth();
  
  const signOt = async(e) => {
    await signOut();
  }
  

    return (
        <div>
<nav class="navbar navbar-expand-sm " style={{backgroundColor:'#681215'}} >
  <a class="navbar-brand text-white" href="/">LogoPogo</a>
  <ul class="navbar-nav ml-auto">

    {
      user?
    <>
    <li class="nav-item mx-5 text-white"  style={{padding:'8px 0'}}>
      <Link  href="/">Home</Link>
    </li>
    <li class="nav-item mx-5 text-white">
      <a class="nav-link" href="/createblogs" >Create Blogs</a>
    </li>
    <li class="nav-item mx-5 text-white">
      <a class="nav-link" href="" onClick={signOt}>signOut</a>
    </li>
    </>
    :
    <>
     <li class="nav-item mx-5 text-white">
      <Link class="nav-link" href="/signin">signIn</Link>
    </li>
    <li class="nav-item mx-5 text-white">
      <Link class="nav-link" href="/signup">signUp</Link>
    </li>
    </>
    
    }
   
  </ul>
</nav>            
        </div>
    )
}

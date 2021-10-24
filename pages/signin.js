import React,{useState} from "react"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle , AiOutlineTwitter } from 'react-icons/Ai';
import {Formik,Form} from "formik";
import * as Yup from 'yup';
import Input from "../components/forms/Input"
import {useAuth} from "../components/Context"

export default function signin() {

    const[check,setCheck]=useState(false);

    const {signIn,user} = useAuth();


    const initialValues={
        email:"",
        password:""
    }

  
    const validationSchema = Yup.object({
        email:Yup.string().email("Enter a valid mail!").required("Field Required!"),
        password:Yup.string().required("Field Required!")
    });

    const onSubmit = async(values,formik)=> {
        if(check){
            try{
        const result = await signIn(values.email,values.password);
        console.log(result);
            }catch(e){
                console.log(e);
            }
        formik.resetForm();
        }else{
            alert("aggree with terms and conditions!");
        }
    };

    return (
        <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            {
                formik=>{
                    return(
                    <>
          <div style={{backgroundColor:"#5D8FC9",height:'100vh',width:'100%',position:'absolute',top:'0',zIndex:'-1',display:"grid",placeItems:'center'}}>
                <div style={{backgroundColor:"white",borderRadius:"6px",width:"30%",height:"330px",padding:"16px",position:"relative"}}>
                    <h3><strong>Sign In</strong></h3>
                    <p style={{color:"grey",fontSize:"14px"}}>Please Login your account here.</p>
                    <hr></hr>
                    <Form>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:"space-between",height:"170px",backgroundColor:"transparent"}}>
                    <Input name="email" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"100%"}} label="Email"></Input>
                    <Input  name="password" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"100%"}} label="Password"></Input>

                    <div>
                    <input onChange={()=>setCheck(!check)} type="checkbox" /> <span style={{fontSize:"14px"}}> I accept the <span style={{color:"#3598DC"}} >Terms</span> of Use & Privacy Policy</span>
                    </div>
                    <button type="submit" style={{backgroundColor:"#3598DC",border:"none",borderRadius:"6px",color:"white",padding:"6px 20px"}} >SignUp</button>
                    </div>
                    </Form>


                    <div style={{position:"absolute",bottom:"-20px",left:"50%",transform:"translate(-50%,0)"}}>
                <div style={{backgroundColor:"#007BFF",width:"50px",height:"50px",borderRadius:"50%",border:"3px solid transparent",display:"grid",placeItems:"center",float:'left',marginLeft:"4px"}}>
                <FaFacebookF style={{color:"white",fontSize:"22px"}} />
                </div>
                <div style={{backgroundColor:"#18A2B8",width:"50px",height:"50px",borderRadius:"50%",border:"3px solid transparent",display:"grid",placeItems:"center",float:'left',marginLeft:"4px"}}>
                <AiOutlineTwitter style={{color:"white",fontSize:"22px"}} />
                </div>
                <div style={{backgroundColor:"#DC3545",width:"50px",height:"50px",borderRadius:"50%",border:"3px solid transparent",display:"grid",placeItems:"center",float:'left',marginLeft:"4px"}}>
                <AiOutlineGoogle style={{color:"white",fontSize:"22px"}} />
                </div>
                    </div>
            
                </div>
          </div>
        </>
                    )
                }
            }
        </Formik>
    );
}

import * as Yup from 'yup';
import {Formik,Form} from "formik";
import Input from "../components/forms/Input"
import React,{useState} from "react"
import {useAuth} from "../components/Context"


export default function signUp() {
    const[check,setCheck]=useState(false);
    const {signUp} = useAuth();

    const initialValues={
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    }

    const validationSchema = Yup.object({
        firstName:Yup.string().required("Field Required!"),
        lastName:Yup.string().required("Field Required!"),
        email:Yup.string().email("Enter a valid mail!").required("Field Required!"),
        password:Yup.string().required("Field Required!"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const onSubmit = async(values,formik)=> {
        if(check){
            try{
        const result = await signUp(values.email,values.password);
        console.log(result);
            }catch(e){
                console.log(e);
            }
        formik.resetForm();
        }else{
            alert("aggree with terms and conditions!");
        }
    };

    return(
        <Formik
           initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                (formik)=>{
                    return (
        <>
          <div style={{backgroundColor:"#3598DC",height:'100vh',width:'100%',position:'absolute',top:'0',zIndex:'-1',display:"grid",placeItems:'center'}}>
                <div style={{backgroundColor:"white",borderRadius:"6px",width:"30%",height:"400px",padding:"16px"}}>
                    
                    <h3><strong>Sign Up</strong></h3>
                    <p style={{color:"grey",fontSize:"14px"}}>Please fill in this form to create an account.</p>
                    <hr></hr>
                    <Form>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:"space-between",height:"260px",backgroundColor:"transparent"}}>
                    
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Input name="firstName" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"49%"}} label="First Name"></Input>
                    <Input name="lastName" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"49%"}} label="Last Name"></Input>
                    </div>

                    <Input name="email" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"100%"}} label="Email"></Input>
                    <Input name="password" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"100%"}} label="Password"></Input>
                    <Input name="confirmPassword" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"100%"}} label="Confirm password"></Input>
                    <div>
                    <input onChange={()=>setCheck(!check)} type="checkbox" /> <span style={{fontSize:"14px"}}> I accept the <span style={{color:"#3598DC"}} >Terms</span> of Use & Privacy Policy</span>
                    </div>
                    <button style={{backgroundColor:"#3598DC",border:"none",borderRadius:"6px",color:"white",padding:"6px 20px"}} >SignUp</button>
                </div>
                </Form>

                </div>
          </div>
        </>
    );
                }
            }
        </Formik>
    );
    
}

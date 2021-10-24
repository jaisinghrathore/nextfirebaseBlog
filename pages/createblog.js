import React from "react";
import {useAuth} from "../components/Context"
import {Formik,Form} from "formik";
import * as Yup from 'yup';
import Input from "../components/forms/Input"

export default function signin() {

    const {insertData,user} = useAuth();
    const[img,setCurrentimg]=React.useState(null);


    const changi = (e) =>{
        setCurrentimg(e.target.files[0]);
    }

    const clicky = () => {
        document.querySelector("#the_real_file_Input").click();
    }

    const initialValues={
        title:"",
        body:"",
    }

    const validationSchema = Yup.object({
        title:Yup.string().required("Field Required!"),
        body:Yup.string().required("Field Required!")
    });

    const onSubmit = (values,formik)=> {
        if(img){
            insertData(values,img);
            formik.resetForm();
        }else{
            alert("select image");
        }
    };

   return(
     <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
            >
        {
             formik=>{
                return (
        <>
          <div style={{backgroundColor:"#5D8FC9",height:'100vh',width:'100%',position:'absolute',top:'0',zIndex:'-1',display:"grid",placeItems:'center'}}>
                <div style={{backgroundColor:"white",borderRadius:"6px",width:"30%",height:"330px",padding:"16px",position:"relative"}}>
                    <h3><strong>Create A Blog .</strong></h3>
                    <hr></hr> 
                    <Form>
                    <div style={{display:"flex",flexDirection:'column',justifyContent:"space-between",height:"200px",backgroundColor:"transparent"}}>

                    <Input name="title" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"100%"}} label="Title"></Input>
                    <Input name="body" style={{backgroundColor:"#F2F2F2",border:"none",height:'36px',borderRadius:"6px",width:"100%"}} label="Body"></Input>

                <div style={{borderBottom:"1px solid black"}} >
                    <button type="button" style={{width:"60px",border:"none",borderRadius:"4px",backgroundColor:"#3598DC",color:"white",padding:"6px 0"}} onClick={clicky}>FILE</button>
                </div>


                    <input onChange={changi} name="imageUrl" type="file" id='the_real_file_Input' style={{width:"30px",display:"none"}}></input>

                    <button type="submit" style={{backgroundColor:"#3598DC",border:"none",borderRadius:"6px",color:"white",padding:"6px 20px"}} >Post</button>
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

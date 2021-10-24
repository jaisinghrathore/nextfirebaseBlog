import React from 'react'
import {Field,ErrorMessage} from "formik";

export default function Input(props) {
    const {label,name,...rest} = props;
    return (
        <>  
            <Field name={name}>
            
                {
                    ({field,form,meta})=>{
                        return(
                            <>
                                <input placeholder={label} {...field} {...rest} ></input>   
                                {meta.touched && meta.error ? <p style={{color:"red"}}>{meta.error}</p> : null}
                            </>
                        );
                    }
                }

            </Field>

        </>
    )
}

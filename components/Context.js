import React,{useContext} from 'react';
import {auth,db,storage,serverTimestamp} from "../firebase";
import {v4 as uuidv4} from "uuid";

const datas=React.createContext();

const useAuth = () => {
    return useContext(datas);
}

export default function Context({children}) {

    const[user,setCurrentUser]=React.useState(null);
    
    React.useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
        })
    },[user]);

    const signUp = (email,password) => {
        return auth.createUserWithEmailAndPassword(email,password);
    }
    
    const signIn = (email,password) => {
        return auth.signInWithEmailAndPassword(email,password);
    }

    const signOut = () => {
        return auth.signOut();
    }

    const insertion = (data) => {              
        console.log(data);
             db.collection('blogs').add(
               data
            );
    };

    const insertData = async(data,image) => {
        if(user){
        const uploadTask = storage.ref(`image/${uuidv4()}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {},
        (error) => {
            console.log(error);
        },
        ()=>{
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                if(downloadURL){
                data.created_at = serverTimestamp();
                data.created_by=user.uid;
                data.imageUrl=downloadURL;
                insertion(data);
                }else{
                    alert("select the image first");
                }

            });
        })
        }else{
            alert("first login");
        }
    };

 

 
    const value={
        signUp,
        signIn,
        signOut,
        insertData,
        user
    };
    
    return (
        <datas.Provider value={value}>
            {children}
        </datas.Provider>
    )
}

export {useAuth}

import '../styles/globals.css'
import Head from 'next/head'
import Context from "../components/Context"
import React from 'react';
import Nav from "../components/Nav"


function MyApp({ Component, pageProps }) {
  
  if(Component.getLayout){
  return( 
    <>
    <Context>
    <Head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
     </Head>
    {Component.getLayout(<Component {...pageProps} />)}
    </Context>
    </>
    )
  }

  return(
    <>
    <Context>
    <Nav/>
     <Head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
     </Head>
    <Component {...pageProps}/>
    
    </Context>
    </>
  );
  
}

export default MyApp


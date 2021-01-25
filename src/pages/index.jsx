import React from "react"
import Lolly from "../components/lolly"
//import {  useMutation } from "@apollo/client";
//import { useQuery } from "@apollo/client";

import "./index.css"
import { navigate } from "gatsby";

const IndexPage = () => {
 
  /*const {data,error,loading}=useQuery(GET_LOLLY)
console.log(data)*/
// if (loading)
  //   return <h2>loading..</h2>
  // if (error)
  //   return <h2>error</h2>

  return (
    <div className="container-top">
      <div >
      <h1>virtual lollipop</h1>
      <p class="subtitle">because we all know someone who deserves some sugar.</p>
      <div> <Lolly top="#d52358" middle="#e95946" bottom="#deaa43" />
        <Lolly top="#deaa43" middle="#d52358" bottom="#e95946" />
        <Lolly top="#e95946"middle="#deaa43" bottom="#d52358" /></div>
       
        <button  onClick={()=>navigate(`/newLolly`)}>New Lolly</button>

      </div>
      

      </div>
    
  )
}


export default IndexPage

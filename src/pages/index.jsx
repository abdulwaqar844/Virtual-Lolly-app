import React from "react"
import Lolly from "../components/lolly"
import "./index.css"
import { navigate } from "gatsby";
const IndexPage = () => {
  return (
    <div className="container-top">
      <div className="title">
      <h1>virtual lollipop</h1>
      <p class="subtitle">because we all know someone who deserves some sugar.</p>
      <div className="lollies">
         <Lolly top="#d52358" middle="#e95946" bottom="#deaa43" />
        <Lolly top="#deaa43" middle="#d52358" bottom="#e95946" />
        <Lolly top="#e95946"middle="#deaa43" bottom="#d52358" /></div>
       
        <button  onClick={()=>navigate(`/newLolly`)}>New Lolly</button>

      </div>
      

      </div>
    
  )
}


export default IndexPage

import React from "react"
import { useState } from "react";
import { useRef } from "react";
import Lolly from "./../components/lolly"
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import "./index.css"
import { navigate } from "gatsby";
const GET_LOLLY=gql`
{
  getLolly  {
id 
  c1 
  c2 
  c3 
  sender 
  message 
  rec 
  link 
}
}`

const ADD_LOLLY = gql`
mutation addLolly($c1: String!,$c2: String!,$c3: String!, $sender: String!,$message: String!,$rec: String!){
  addLolly(c1: $c1,c2: $c2,c3:$c3,sender: $sender,message: $message, rec: $rec){
    c1
    c2
    c3
    sender
    message
    rec
    }
    }`
const IndexPage = () => {
  const [addLolly]=useMutation(ADD_LOLLY)
  const [c1, setC1] = useState("#d52358");
  const [c2, setC2] = useState("#e95946");
  const [c3, setC3] = useState("#deaa43");
  const senderField = useRef();
  const recField = useRef();
  const msgField = useRef();
  const handleSubmit = () => {
    addLolly({
      variables:{
        c1,
        c2,
        c3,
        sender:senderField.current.value,
        message:msgField.current.value,
        rec:recField.current.value,
      },

    })
navigate("/template")
  }
  const {data,error,loading}=useQuery(GET_LOLLY)
console.log(data)
  return (
    <div className="container">
      <h1>Virtual Lolly App</h1>
      <div className="main-container">
        <Lolly top={c1} middle={c2} bottom={c3} />
        <input type="color" value={c1} onChange={(e) => { setC1(e.target.value) }} />
        <input type="color" value={c2} onChange={(e) => { setC2(e.target.value) }} />
        <input type="color" value={c3} onChange={(e) => { setC3(e.target.value) }} />
        
         <div className="form-container">
          <input type="text" placeholder="To" ref={recField} />
          <textarea placeholder="Enter your message!" ref={msgField}></textarea>
          <input type="text" placeholder="From" ref={senderField} />
          <button onClick={handleSubmit}>Send</button>
        </div>
        </div>
      </div>
  )
}


export default IndexPage

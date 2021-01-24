import React from "react"
import { useState } from "react";
import { useRef } from "react";
import Lolly from "../components/lolly"
import gql from "graphql-tag";
import {  useMutation } from "@apollo/client";
import  {Formik}  from "formik"
import TextField from '@material-ui/core/TextField';
import "./newLolly.css"
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from "gatsby";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const ADD_LOLLY = gql`
mutation addLolly($c1: String!,$c2: String!,$c3: String!, $sender: String!,$message: String!,$rec: String!){
  addLolly(c1: $c1,c2: $c2,c3:$c3,sender: $sender,message: $message, rec: $rec){
  link
  }
    }`
const IndexPage = () => {
  const classes = useStyles();
  const [addLolly]=useMutation(ADD_LOLLY)
  const [c1, setC1] = useState("#d52358");
  const [c2, setC2] = useState("#e95946");
  const [c3, setC3] = useState("#deaa43");
  const senderField = useRef();
  const recField = useRef();
  const msgField = useRef();
 /* const handleSubmit = () => {
   
  }
  const {data,error,loading}=useQuery(GET_LOLLY)
console.log(data)*/
// if (loading)
  //   return <h2>loading..</h2>
  // if (error)
  //   return <h2>error</h2>

  return (
    <div className="container">
      <div>     
         <h1>Virtual Lolly App</h1>
</div>
      <div className="main-container"><div>
        <Lolly top={c1} middle={c2} bottom={c3} />
        <p>Make a New Lolly Using Colors</p>
        <input type="color" value={c1} onChange={(e) => { setC1(e.target.value) }} />
        <input type="color" value={c2} onChange={(e) => { setC2(e.target.value) }} />
        <input type="color" value={c3} onChange={(e) => { setC3(e.target.value) }} /></div>
         <div className="form-container">
         <Formik
          initialValues={{ rec: '', message: '' ,from:''}}
          validate={values => {
            const errors = {};
            if (!values.rec) {
              errors.rec = 'Required';
            } if (!values.message) {
              errors.message = 'Required';
            } if (!values.from) {
              errors.from = 'Required';
            }
            
            
            return errors;

          }}
          onSubmit={(values, { resetForm }) => {
             addLolly({
      variables:{
        c1,
        c2,
        c3,
        sender: values.from,
        message:values.message,
        rec:values.rec,
      },
    }).then(result => {
      setTimeout(()=>navigate(`/lollies/${result.data.addLolly.link}`),5000)
  });
            resetForm({})

          }



          }
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            /* and other goodies */
          }) => (
            <form className={classes.root} noValidate autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="standard-basic"
                label="To"
                type="text"
                name="rec"
                ref={recField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rec}

              /><br />

              {errors.rec && touched.rec && errors.rec}
              <br />

              <textarea
                id="standard-basic"
                                label="Message"
                type="text"
                name="message"
                ref={msgField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}

              /><br />
              {errors.message && touched.message && errors.message}
              <br />

              <TextField
                id="standard-basic"
              
                label="From"
                type="text"
                name="from"
                ref={senderField} 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.from}

              /><br />
              {errors.from && touched.from && errors.from}
              <br />


                        <button className="add-new" type="submit">Send</button>

            </form>
          )}
        </Formik>
        
        </div>
        </div>
      </div>
  )
}


export default IndexPage

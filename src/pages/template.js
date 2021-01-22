import React from 'react'
import Lolly from "../components/lolly"
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { navigate } from 'gatsby';
const GET_DATA = gql`{
  getLolly{
    id
     c1
     c2
     c3
     message
     rec
     sender
     link    
  }
}`;
export default function Template({pageContext}) {
  const { loading, error, data } = useQuery(GET_DATA);
  console.log("query data in Te", data)
  if (loading)
    return <h2>loading..</h2>
  if (error)
    return <h2>error</h2>
  return (
    <>
      <div>
        <h1>Share lolly with this link:</h1>
            <div className="container-lolly">
              <div key={pageContext.data.id} className="display-lolly">
                <div className="lol">
                  <Lolly top={pageContext.data.c1} middle={pageContext.data.c2} bottom={pageContext.data.c3} />
                  <h1>{`http://localhost:8888/template/${pageContext.data.link}`}</h1>
                </div>
                <div className="resultCard">
                  <p className="reciever">To:{pageContext.data.rec}</p>
                  <p className="message">Message:{pageContext.data.message}</p>
                  <p className="sender">From:{pageContext.data.sender}</p>
                </div>
              </div>


            </div>   )


        <button onClick={() => navigate("/")}>Go Back</button>





      </div>
    </>)
}
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
export default function Template(getLolly) {
  const { loading, error, data } = useQuery(GET_DATA);
  console.log("query data in Template", data)
  if (loading) {
    return <h2>loading..</h2>
  } if (error) {
    return <h2>error</h2>
  } return (

    <div>
      <h1>Share lolly with this link:</h1>
      {data.getLolly.map((d, i) => {

        console.log("In template return", d)


        return (<>
          <div className="container-lolly" key={d.id}>
            <div  className="display-lolly">
              <div className="lol" >
                <Lolly top={d.c1} middle={d.c2} bottom={d.c3} />
                <h1>{`http://localhost:8888/${d.link}`}</h1>
              </div>
              <div className="resultCard"  >
                <p className="reciever">To:{d.rec}</p>
                <p className="message">Message:{d.message}</p>
                <p className="sender">From:{d.sender}</p>

              </div>
            </div>


          </div>   </>)

      })}

      <button onClick={() => navigate("/")}>Go Back</button>





    </div>
  )
}
import React from 'react'
import Lolly from "./lolly"
import "./template.css"
import { navigate } from 'gatsby';
export default function Template({ pageContext }) {
  console.log(pageContext.d.link)
  //console.log(data)
  /* if (loading)
     return <h2>loading..</h2>
   if (error)
     return <h2>error</h2>*/
  return (
    <>
      <div className="container">
        <div className="container-lolly">
          <div key={pageContext.d.id} className="display-lolly">
            <div className="lol">
              <Lolly top={pageContext.d.c1} middle={pageContext.d.c2} bottom={pageContext.d.c3} />
            </div>
              <div>
              <p>Share lolly with this link:</p>
        <p className="share">{`http://localhost:8888/lollies/${pageContext.d.link}`}</p>
        <div className="details">

              <p className="reciever">To:{pageContext.d.rec}</p>
              <p className="message">Message:{pageContext.d.message}</p>
              <p className="from">From:{pageContext.d.sender}</p>
            </div>
              </div>
          </div>


        </div>


        <button onClick={() => navigate("/")}>Go Back</button>





      </div>
    </>)
}
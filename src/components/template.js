import React from 'react'
import Lolly from "./lolly"
import { navigate } from 'gatsby';
export default function Template(pageContext) {
  let data =pageContext.pathContext  ;
//console.log(data)
 /* if (loading)
    return <h2>loading..</h2>
  if (error)
    return <h2>error</h2>*/
  return (
    <>
      <div>
        <h1>Share lolly with this link:</h1>
        <p>{`http://localhost:8888/lollies/${data.link.link}`}</p>
            <div className="container-lolly">
{           <div key={data.link.id} className="display-lolly">
                <div className="lol">
                  <Lolly top={data.link.c1} middle={data.link.c2} bottom={data.link.c3} />
                </div>
                <div className="resultCard">
                  <p className="reciever">To:{data.link.rec}</p>
                  <p className="message">Message:{data.link.message}</p>
                  <p className="sender">From:{data.link.sender}</p>
                </div>
  </div>}


            </div>   


        <button onClick={() => navigate("/")}>Go Back</button>





      </div>
    </>)
}
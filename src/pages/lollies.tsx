import React from 'react'
import { Router } from '@reach/router';
import { useQuery,  } from '@apollo/client';
import Lolly from '../components/updatedLolly';
import gql from 'graphql-tag';
import { ProgressBar } from 'react-bootstrap';
const GET_LOLLY=gql`
query MyQuery {
  
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
    }
  
`;
export default function VirtualLolly() {
    const { data, loading, error } = useQuery(GET_LOLLY);
    if (loading) {
        return <ProgressBar animated now={100} />
    }
    if (error) {
      return <h1>Error...</h1>
  }
    return (
        <Router basepath="/lollies">
           {data.getLolly.map((value,key)=>{
               return( 
               <Lolly key={key} pageContext={value} path={`/${value.link}`}> </Lolly>
               )
           })}
        </Router>
    )
}
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//
import { useState  } from 'react';
//

import foodData from "../data"
import { useDispatch } from 'react-redux';
import {ADD} from '../Actions/action'


function Home() {
  

  const [data, setData]= useState(foodData)
  console.log(data)

  const dispatch = useDispatch()

  const send = (e, item)=>{
    dispatch(ADD(item));
    console.log(item)
  }
 
    

  return (
      <>
  <style type='text/css'>
    {`
    
    .container{
      display : flex ;
      flex-wrap : wrap ;
      justify-content: center;
     

    },

    .item-img{
      height : 250px ;
    }

    .cards{
      width: 18rem;
      // box-shadow: 5px 5px 20px 2px black;
    }
    .cards:hover{
         box-shadow: 0 8px 16px 0  rgb(52, 227, 131); 
    }


    `}

  </style>

      <div className="container mt-3">
{
  data?.length > 0 ? (
    
        data.map((item)=>{
      return(

        <Card style={{ width: '18rem' }} key= {item.id} className=" cards my-3 mx-3">
        <Card.Img variant="top" src={item.image} style={{height: '250px'}}  />
        <Card.Body>
          <Card.Title className='mx-1 text '  style={{fontFamily: 'monospace', textShadow:'0px 2px 2px aquamarine', fontSize:'1.6rem' , letterSpacing:'1px'}} >{item.title}</Card.Title>
          <Card.Text style={{fontFamily: 'monospace' , display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <li className='mx-1'> Rs. {item.price}</li> 
           <i>
            ~ {item.location}            
            </i> 
          
          </Card.Text>
          
          
          <Button 
          onClick={ (e) => (send( e, item))}
          variant="dark"  className='col-lg-12' >Add</Button>

        </Card.Body>
      </Card>

      )
    }
     

    ))

   
  : (

    <div className="empty">
      No data
    </div>
  )

}
    
 
    </div>

    </>
  )
}

export default Home ;
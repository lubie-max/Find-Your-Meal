import React, { useState } from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom' ;
import {REMOVE , ADD , REMOVE_ONE} from '../Actions/action.js';


function ItemDetails() {

  //getting exact item
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const { id } = useParams()
  const dispatch = useDispatch()
  const atHome = useNavigate()

  const getData = useSelector((state) => state.cartReducer.itemsInCart)

  const getMatch = () => {
    let match = getData.filter((item) => {
      return item.id == id
    })
    setData(match)
  }

// console.warn(data)

  // Total
  const totalCost = () => {
    let totalPrice = 0
    data.map((item, k) => {
      totalPrice += item.price * item.qnt
    })
    setTotal(totalPrice)

  }
// console.log('total', total)


//DELETE fun
const remove = (id)=>{
  atHome( '/' )
 dispatch(REMOVE(id))
}



  useEffect(() => {
    getMatch();

  }, [id])

  console.log('total', total)

useEffect(()=>{
  totalCost();

}, [totalCost])


//

// quentity adding machanisam

const add = (item) =>{
  dispatch(ADD(item))
}

// qnt decreasing
const removeOne = (item)=>{
  dispatch(REMOVE_ONE(item))
}

  return (

    <>



      <h1 className='text text-center mt-3'>Item Details</h1>

      {
        data.map((item, key) => {
          return (

            <>
              <div className="container ">
                <Card style={{ width: '30rem', height: 'auto' }} key={key} className="my-3 mx-3 mx-auto shadow ">
                  <div className=' d-flex justify-content-center '>
                    <Card.Img variant="top" src={item.image} className="shadow bg-image hover-zoom" style={{ height: '17rem', width: '25rem', marginTop: '2rem', borderRadius: '1.2rem', border: 'none' }} />
                  </div>
                  <Card.Body style={{ fontFamily: 'monospace' }}>
                    <Card.Title style={{ textAlign: 'center', margin: '10px' }} ><h4>{item.title} </h4></Card.Title>

                    <Card.Text style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}>

                      <h5><strong> About :</strong></h5> &nbsp;
                      <h6> <i> {item.description}  </i>
                      </h6>
                    </Card.Text>
                    <Card.Text style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}>

                      <h5><strong> Address :</strong></h5> &nbsp;
                      <h6> <i> {item.location}   </i>
                      </h6>
                    </Card.Text>

                    <Card.Text style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}>

                      <h5><strong> Category :</strong></h5> &nbsp;
                      <h6> <i>{item.category} </i>
                      </h6>
                    </Card.Text>

                    <Card.Text style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}>

                      <h5><strong> Price :</strong></h5> &nbsp;
                      <h6><i> {item.price}  </i>
                      </h6>
                    </Card.Text>

                    <Card.Text style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}>

                      <h5><strong> Quentity :</strong></h5> &nbsp;

                      <div style={{ backgroundColor: '#56d7c5' , width:'70px' , height:'30px', display:'flex', flexWrap:'nowrap', justifyContent:'space-around', alignItems:'center', borderRadius:'5px', cursor:'pointer'}}>
                        <span onClick={() => { removeOne(item) }}> - </span>
                        <span style={{ backgroundColor:'#56d7c5' , padding:'3px'}}>{item.qnt}</span>
                        <span onClick={() => {add(item) }} style={{fontSize:'larger'}}> +</span>
                      </div>

                    </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'space-around' , alignItems:'flex-end' , flexWrap:'wrap' }}>
                    <h5> Total :<b> Rs. {total} </b> </h5>
                      <Button  className='btn btn-danger round  col-lg-6' onClick={() => { remove(item.id) }}> <strong>Delete</strong></Button>
                    </div>
                    {/* <Button variant="dark"  className='mt-3 col-lg-12' >Add</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </>
          )
        })
      }

    </>
  )
}

export default ItemDetails;
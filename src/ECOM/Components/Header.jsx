import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
//
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
//
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE , ADD } from '../Actions/action.js'

function Header() {
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch();

  //data
  const getData = useSelector((state) => state.cartReducer.itemsInCart)
  console.log(getData)

  // REMOVE functionality
  const remove = (id) => {
    dispatch(REMOVE(id));
  }


  // total 
  const totalPrice = () => {
    let price = 0;
    getData.map((item, k) => {
      return price += item.price * item.qnt
    })
    setTotal(price)

  }

  //useEffect HOOK
  useEffect(() => {
    totalPrice()
  }, [totalPrice])



  //
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //
  return (
    <>
      <style type="text/css">
        {`
    .img {
        width : 40px; 
        border-radius: 14px;

    }
    .bedge{
     
      position: absolute;
      top: -3px;
      right: 10px;
      background-color: #25c28d;
      width: 22px;
      border-radius: 50%;
      color: whitesmoke;
            }

      .nav{
        font-family: monospace ;
        letter-spacing: 2px;
        font-size: larger;
        text-decoration: none;
        color: aquamarine;
        text-shadow: 1px 1px 10px #06d45d;
      }
    `}
      </style>

      <Navbar variant='dark' bg='dark' className='sticky-top'>
        <Container>
          <NavLink to="/" className='nav' >FindYOurMEAL</NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}>
                  <img className='img' src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-2.jpg" alt={getData.length} />
                  {
                    getData.length !== 0 ? (
                      <i className='bedge'>
                        {getData.length}
                      </i>

                    ) : (
                      <div></div>
                    )

                  }


                </Button>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
        {/* // Menu */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}  style={{ display:'flex' }}>

          <div className="container" style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', width: '35rem' }}>
            <Button className='btn btn-xs' style={{ position: 'absolute', top: '4px', right: '1px' }} onClick={handleClose}>x</Button>

            {getData.length > 0 ? (
              <div >
                {
                  getData.map((item, key) => {
                    return (
                      <Card style={{ width: '30rem', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} key={key} className=" cards my-3 mx-3" >
                        <i style={{ position: 'absolute', top: '1px', right: '10px', textDecoration: 'pointer' }} onClick={() => { remove(item.id) }}> ✖ </i>
                        <NavLink to={`/detail/${item.id}`} >
                          <Card.Img className='img ' onClick={handleClose} src={item.image} style={{ height: '8rem', width: '8rem', margin: '20px', marginLeft: '20px', }} />
                        </NavLink>
                        <Card.Body>
                          <Card.Title className='mx-2 text ' style={{ fontFamily: 'monospace', fontSize: '1.6rem', letterSpacing: '1px' }} ><i>{item.title}</i></Card.Title>
                          <li className='mx-1 text-strong'><h5> <strong> Qnt -</strong> &nbsp; {item.qnt}</h5> </li>

                          <Card.Text style={{ fontFamily: 'monospace', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <li className='mx-1'> Rs.{item.price} </li>
                            <i>
                              ~  {item.location}
                            </i>

                          </Card.Text>

                          <Button variant='danger' onClick={() => { remove(item.id) }} className='btn btn-danger round  col-lg-6  '  > Delete </Button>

                        </Card.Body>
                      </Card>

                    )
                  })
                }
                <div className='sticky-bottom m-3' style={{ paddingLeft: '62%', borderRadius: '20px' }}>
                  <span style={{ backgroundColor: 'rgb(24 202 192 / 49%', padding: '3%' }}>
                    <i> Total Price</i> : <b>Rs. {total}</b>
                  </span>
                </div>
              </div>
            ) :

              (
                <div style={{ padding: '10px' }}>
                  <p style={{ fontFamily: 'cursive', margin: '10px' }}>
                    Cart is Empty!
                  </p>
                  <p className='mx-auto' style={{ display: 'flex', justifyContent: 'center' }}>
                    🛒
                  </p>

                </div>

              )}

          </div>
        </Menu>

      </Navbar>
    </>
  )
}



export default Header
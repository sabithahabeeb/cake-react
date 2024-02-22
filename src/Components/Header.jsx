import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
       <Navbar style={{color:'gold'}}  className="bg-body-dark  ">
        <Container>
          <Navbar.Brand href="">
          <div className='d-flex justify-content-center align-items-center'>
            <img width={'80px'} height={'80px'} src="data:image/png;base64,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" alt="" />{' '}
              <h4>CAKE WORLD</h4>
          </div>
          </Navbar.Brand>
          <input style={{
            

          }} className='rounded' placeholder='search...' type="text" />
          
          
        </Container>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-plus ps-3"></i>
        <h3 className='p-3 ' style={{fontSize:'20px',color:'white'}}>LOGin</h3>
      </Navbar>
    </div>
  )
}

export default Header
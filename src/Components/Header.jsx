import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
       <Navbar  className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="">
          <i class="fa-solid fa-cake-candles"></i>{' '}
            CAKE WORLD
          </Navbar.Brand>
          <input style={{
            

          }} className='rounded' type="text" />
          
        </Container>
        <h3 className='p-3 ' style={{fontSize:'20px',color:'black'}}>LOGOUT</h3>
      </Navbar>
    </div>
  )
}

export default Header
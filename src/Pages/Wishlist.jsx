import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Wishlist() {
  return (
    <div >
       

    <Row className='d-flex flex-row mb-3 mt-5 '>
      <Col sm={12} md={6} lg={4}>
      <Card className='ms-5 mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/b9/fd/ca/b9fdca83ca8c97b553c74b0408f6aa96.jpg" />
      <Card.Body>
        <Card.Title className='text-center'>Black Forest</Card.Title>
        {/* <Card.Text>
      A type of large chocolate cake, made with layers of chocolate cake, cherries, and cream, originally from the Black Forest area of Germany....
        </Card.Text> */}
        <Card.Text className='text-center'>
     $123.00
        </Card.Text>
       <div className='d-flex justify-content-center'>
        
          <Button variant="light">ADD TO CART<i style={{color:'red'}} class="fa-solid fa-cart-shopping"></i></Button>
         
       </div>
      </Card.Body>
    </Card>
      </Col>
      <Col sm={12} md={6} lg={4}>
      <Card className='ms-5 mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/b9/fd/ca/b9fdca83ca8c97b553c74b0408f6aa96.jpg" />
      <Card.Body>
        <Card.Title className='text-center'>Black Forest</Card.Title>
        {/* <Card.Text>
      A type of large chocolate cake, made with layers of chocolate cake, cherries, and cream, originally from the Black Forest area of Germany....
        </Card.Text> */}
        <Card.Text className='text-center'>
     $123.00
        </Card.Text>
       <div className='d-flex justify-content-center'>
        
          <Button variant="light">ADD TO CART<i style={{color:'red'}} class="fa-solid fa-cart-shopping"></i></Button>
         
       </div>
      </Card.Body>
    </Card>
      </Col>
      <Col sm={12} md={6} lg={4}>
      <Card className='ms-5 mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/b9/fd/ca/b9fdca83ca8c97b553c74b0408f6aa96.jpg" />
      <Card.Body>
        <Card.Title className='text-center'>Black Forest</Card.Title>
        {/* <Card.Text>
      A type of large chocolate cake, made with layers of chocolate cake, cherries, and cream, originally from the Black Forest area of Germany....
        </Card.Text> */}
        <Card.Text className='text-center'>
     $123.00
        </Card.Text>
       <div className='d-flex justify-content-center'>
        
          <Button variant="light">ADD TO CART<i style={{color:'red'}} class="fa-solid fa-cart-shopping"></i></Button>
         
       </div>
      </Card.Body>
    </Card>
      </Col>
      <Col sm={12} md={6} lg={4}>
      <Card className='ms-5 mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/b9/fd/ca/b9fdca83ca8c97b553c74b0408f6aa96.jpg" />
      <Card.Body>
        <Card.Title className='text-center'>Black Forest</Card.Title>
        {/* <Card.Text>
      A type of large chocolate cake, made with layers of chocolate cake, cherries, and cream, originally from the Black Forest area of Germany....
        </Card.Text> */}
        <Card.Text className='text-center'>
     $123.00
        </Card.Text>
       <div className='d-flex justify-content-center'>
        
          <Button variant="light">ADD TO CART<i style={{color:'red'}} class="fa-solid fa-cart-shopping"></i></Button>
         
       </div>
      </Card.Body>
    </Card>
      </Col>
    </Row>
    </div>
   
  )
}

export default Wishlist
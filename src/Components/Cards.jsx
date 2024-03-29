import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards() {
  return (
    <div style={{marginTop:'80px'}}>
       <Card className='ms-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/b9/fd/ca/b9fdca83ca8c97b553c74b0408f6aa96.jpg" />
      <Card.Body>
        <Card.Title>Black Forest</Card.Title>
        <Card.Text>
      A type of large chocolate cake, made with layers....
        </Card.Text>
        <Card.Text>
     $125.00
        </Card.Text>
       <div className='d-flex justify-content-between'>
          <Button variant="light"><i style={{color:'red'}} class="fa-solid fa-cart-shopping"></i></Button>
          <Button variant="warning"><i class="fa-solid fa-heart"></i></Button>
       </div>
      </Card.Body>
    </Card>

    
    </div>
  )
}

export default Cards
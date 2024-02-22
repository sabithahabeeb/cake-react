import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Slice() {
  const [hoveredIndex,setHoveredIndex] = useState(null)
  return (
<div style={{paddingTop:'150px'}}>
      <div className='pt-5 pb-5 text-center'>
          <h1>SLICE OF HEAVEN</h1>
          <h3 className='ch'>choclate artista</h3>
  
      </div>
      <div className='d-flex justify-content-evenly'> 
      <Card className='ms-5 hovered' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/08/home6-product-2-img-1.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>White Choclate Cake</Card.Title>
        <Card.Text>
      Homemade
        </Card.Text>
       <Card.Text>
        $132.00
       </Card.Text>
      </Card.Body>
    </Card>
    <Card className='ms-5 hovered' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/08/home6-product-1-img-1.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>Pinapple $ Coconut</Card.Title>
        <Card.Text>
      Homemade
        </Card.Text>
       <Card.Text>
        $142.00
       </Card.Text>
      </Card.Body>
    </Card>
    <Card className='ms-5 hovered' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/08/home6-product-4-img-1.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>Butterfly Cake</Card.Title>
        <Card.Text>
      Homemade
        </Card.Text>
       <Card.Text>
        $128.00
       </Card.Text>
      </Card.Body>
    </Card>
    <Card className='ms-5 hovered' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/08/home6-product-3-img-1.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>Fruite Choclate Cake</Card.Title>
        <Card.Text>
      Homemade
        </Card.Text>
       <Card.Text>
        $132.00
       </Card.Text>
      </Card.Body>
    </Card>
      </div>

     <div style={{paddingTop:'250px'}} className='w-100 h-100  pb-5 d-flex justify-content-center align-items-center'> <iframe width="1400" height="506" src="https://www.youtube.com/embed/7V6NrAFEEyE" title="Chocolate Cake With Chocolate Ganache Glaze" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
</div>
  )
}

export default Slice
import React from 'react'
import Cards from '../Components/Cards'
import { Col, Row } from 'react-bootstrap'

function Chocolate() {
  return (
    <div>
       <div className="d-flex justify-content-center align-items-center  w-100">
        <div className="d-flex border w-50 rounded">
          <input   type="text" className='form-control' placeholder='Search Project by Cake' />
          <i style={{ marginLeft: '-40px' }} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </div>
      </div>
     <Row className='d-flex flex-row mb-3 mt-5 '>
        <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col>
        <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col> <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col> <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col> <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col> <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col> <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col> <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col> <Col sm={12} md={6} lg={4} >
          <Cards/>
          
        </Col>
     </Row>

    </div>
  )
}

export default Chocolate
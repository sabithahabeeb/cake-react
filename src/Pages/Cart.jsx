import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Cart() {
  return (
    <div>
      <Row className=''>
        <Col sm={12} md={6} lg={4}>
          <table>
            <thead>
              <tr>
                <th  className='p-3'>#</th>
                <th className='p-3'>NAme</th>
                <th className='p-3'>Quantity</th>
                <th className='p-3'>Price</th>
                <th className='p-3'>delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>cake</td>
                <td>2</td>
                <td>456</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Col>

      </Row>
    </div>
  )
}

export default Cart
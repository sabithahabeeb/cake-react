import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Cart() {
  return (
    <div className='pt-5 m-5 d-flex '>
      <Row className=''>
        <Col >
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
              <tr className='trs'>
                <td className='p-3'>1</td>
                <td className='p-3'>cake</td>
                <td className='p-3'><button className='btn m-1'><i class="fa-solid fa-minus"></i></button>2 <button className='btn'><i class="fa-solid fa-plus"></i></button></td>
                <td className='p-3'>456</td>
                <td className='p-3'><button className='btn'><i class="fa-solid fa-trash"></i></button></td>
              </tr>
              <tr  className='trs'>
                <td className='p-3'>1</td>
                <td className='p-3'>cake</td>
                <td className='p-3'><button className='btn m-1'><i class="fa-solid fa-minus"></i></button>2 <button className='btn'><i class="fa-solid fa-plus"></i></button></td>
                <td className='p-3'>456</td>
                <td className='p-3'><button className='btn'><i class="fa-solid fa-trash"></i></button></td>
              </tr>
              <tr  className='trs'>
                <td className='p-3'>1</td>
                <td className='p-3'>cake</td>
                <td className='p-3'><button className='btn m-1'><i class="fa-solid fa-minus"></i></button>2 <button className='btn'><i class="fa-solid fa-plus"></i></button></td>
                <td className='p-3'>456</td>
                <td className='p-3'><button className='btn'><i class="fa-solid fa-trash"></i></button></td>
              </tr>
            </tbody>
          </table>
        </Col>

      </Row>

      <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className='border p-3 rounded shadow'>
                <h1 className="text-secondary">Cart Summary</h1>
                <div className='border mt-3 p-3 rounded show'>
                  <h4 className='mt-3'>Total Products: <span>3</span></h4>
                  <h4>Total  : <span className='text-danger fw-bolder  fs-2'>456</span></h4>
                  <div className='d-grid mt-5'>
                    <button  className='btn btn-success rounded mt-2'>Check Out</button>
                  </div>
                </div>
              </div>

            </div>



    </div>
  )
}

export default Cart
import React from 'react'
import Cards from '../Components/Cards'

function Chocolate() {
  return (
    <div>
       <div className="d-flex justify-content-center align-items-center  w-100">
        <div className="d-flex border w-50 rounded">
          <input   type="text" className='form-control' placeholder='Search Project by Technology used' />
          <i style={{ marginLeft: '-40px' }} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </div>
      </div>
      <Cards/>
    </div>
  )
}

export default Chocolate
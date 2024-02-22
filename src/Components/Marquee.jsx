import React from 'react'

function Marquee() {
  return (
   <marquee scrollAmount={20}  >
        <div style={{paddingTop:'150px'}} className='d-flex justify-content-evenly pb-5'>
            <img className='marq' src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/07/h6-img-1.jpg" alt="no image" />
            <img  className='marq'src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/09/h6-slider-img-5.jpg" alt="no image" />
            <img  className='marq'src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/09/h6-slider-img-3.jpg" alt="no image" />
            <img  className='marq'src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/07/h6-img-2.jpg" alt="no image" />
            <img className='marq' src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/09/h6-slider-img-4.jpg" alt="no image" />
        <img className='marq' src="https://www.fnp.com/images/pr/m/v20221130121944/vanilla-cake-with-gulab-jamun-half-kg.jpg" alt="" />
        </div>
   </marquee >
  )
}

export default Marquee
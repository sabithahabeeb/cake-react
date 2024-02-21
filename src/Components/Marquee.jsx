import React from 'react'

function Marquee() {
  return (
   <marquee scrollAmount={10} >
        <div className='d-flex pb-5'>
            <img className='marq' src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/07/h6-img-1.jpg" alt="no image" />
            <img  className='marq'src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/09/h6-slider-img-5.jpg" alt="no image" />
            <img  className='marq'src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/09/h6-slider-img-3.jpg" alt="no image" />
            <img  className='marq'src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/07/h6-img-2.jpg" alt="no image" />
            <img className='marq' src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/09/h6-slider-img-4.jpg" alt="no image" />
        </div>
   </marquee >
  )
}

export default Marquee
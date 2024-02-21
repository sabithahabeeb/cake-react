import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column pt-5 mt-5 ' style={{ width: '100%', height: '300px' }}>
      <div>
        <h3 className='p-2'><i class="fa-solid fa-cake-candles"></i>{' '}CAKE WORLD</h3>
        <h4 className='mb-5' style={{ color: 'lightpink', fontFamily:'cursive' }}>world of chocolate</h4>
      </div>
      <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">


        <div className="links d-flex justify-content-center  flex-colum ">
          <div >
            <div>
              <h5>INFORMATIONS</h5>
              <div>

                Sestrasse 21,Zurich, Ch

              </div>
              <div>avelina@example.com</div>
              <div> +1234569</div>
              <div> +1234569</div>

            </div>
          </div>
        </div>

        <div className="links d-flex justify-content-center  flex-colum ">
          <div >
            <div>
              <h5>Products</h5>
              <div>
                Vegan chocolates
              </div>
              <div>Milk chocolate</div>
              <div> Gift boxes</div>
              <div> Truffles $ Pralines</div>

            </div>
          </div>
        </div>


        <div className="links d-flex justify-content-center  flex-colum ">
          <div >
            <div>
              <h5>Customer service</h5>
              <div>
                Payment $ Delivery
              </div>
              <div>Support</div>
              <div>Frequently asked questions</div>
              <div>Shipping $ returning</div>

            </div>
          </div>
        </div>

        <div className="links d-flex justify-content-center  flex-colum ">
          <div >
            <div>
              <h5>Recipes</h5>
              <div>
                Pistachio cake with dark chocolate
              </div>
              <div>Fresh almond cheese cake</div>
              <div> Resberry pralines with gold</div>
              <div>Macadamia nuts $cocunut cake</div>

            </div>
          </div>
        </div>


        

      </div>
      <div className="contact d-flex justify-content-center pt-5 mt-5  flex-colum ">
          <div >
            <div>
              {/* <h4>Contact Us</h4> */}
              <div>
                <input type="text" className='mb-3' placeholder='Enter Youre Email...' style={{ width: '600px', height: '40px', borderRadius: '10px' }} />
                <button className="bg-info" style={{ width: '100px', height: '40px', borderRadius: '10px', margin: '10px' }}>Submit</button>
              </div>
              <div className='d-flex justify-content-between align-items-center '>

                <Link style={{ fontSize: '30px', color: 'white' }}><i className="fa-brands fa-facebook-f"></i></Link>

                <Link style={{ fontSize: '30px', color: 'white' }}><i className="fa-brands fa-twitter"></i></Link>
                <Link style={{ fontSize: '30px', color: 'white' }}><i className="fa-brands fa-linkedin-in"></i></Link>
                <Link style={{ fontSize: '30px', color: 'white' }}><i className="fa-brands fa-instagram"></i></Link>
                <Link style={{ fontSize: '30px', color: 'white' }}> <i className="fa-brands fa-whatsapp"></i></Link>


              </div>

            </div>
          </div>
        </div>
      <div className='pt-3'> <p>Copyright © 2023 Cake World. Built with Docusaurus.</p></div>


    </div>
  )
}

export default Footer
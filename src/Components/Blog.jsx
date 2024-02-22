import React from 'react'

function Blog() {

    return (
        <div style={{paddingTop:'150px'}} className=' pb-5'>
            <div className='pt-5 pb-5  text-center '>
                <h2>READ OUR BLOG</h2>
                <h3 className='ch'>weekly</h3>

            </div>
            <div className='d-flex justify-content-evenly ms-5'>
                <a style={{ textDecoration: 'none', color: 'gray' }} href='https://avelina.qodeinteractive.com/a-truffle-a-rich-chocolate-candy-of-joy/' target='_blank'>
                    <div>
                        <img className='blog' width={300} src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/08/h6-blog-img-2.jpg" alt="" />
                       <div style={{color:'white'}} className='pt-4'>
                            <p>
                                Avelina Lavigne-CakesVegan</p><p>
                                ALMOND CAKE WITH WHITE CHOCOLATE & ORANGE</p>
                       </div>
                    </div>
                </a>
                <a style={{ textDecoration: 'none', color: 'gray' }} href='https://avelina.qodeinteractive.com/a-truffle-a-rich-chocolate-candy-of-joy/' target='_blank' >
                    <div>
                        <img className='blog' width={300} src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/08/h6-blog-img-4.jpg" alt="" />
                       <div style={{color:'white'}} className='pt-4'>
                            <p>
                                Avelina Lavigne - Choclate, Truffles</p><p>
                                A TRUFFLE - A RICH CHOCOLATE CANDY OF JOY</p>
                       </div>
                    </div>
                </a>
                <a style={{ textDecoration: 'none', color: 'gray' }} href='https://avelina.qodeinteractive.com/special-occasions-gifts/' target='_blank'>
                    <div>
                        <img className='blog' width={300} src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/08/h6-blog-img-1.jpg" alt="" />
                       <div style={{color:'white'}} className='pt-4'>
                            <p>
                                Avelina Lavigne - Cakes, Chocolate</p><p>
                                SPECIAL OCCASIONS - GIFTS</p>
                       </div>
                    </div>
                </a>
                <a style={{ textDecoration: 'none', color: 'gray' }} href='https://avelina.qodeinteractive.com/the-most-craved-chocolate-bars/' target='_blank'>
                    <div>
                        <img className='blog' width={300} src="https://avelina.qodeinteractive.com/wp-content/uploads/2023/08/h6-blog-img-3.jpg" alt="" />
                       <div style={{color:'white'}} className='pt-4'>
                            <p >
                                Avelina Lavigne - Truffles, Vegan</p><p>
                               THE MOST CRAVED CHOCLATE BARS</p>
                       </div>
                    </div>
                </a>
            </div>

            <div style={{ border: '2px sold white' }} className=' d-flex flex-row justify-content-center align-items-center            w-100 mt-5  p-3  pt-5 mt-5 shadow'>
                <img className='m-5 p-5' width={900} height={'600px'} src="https://thumbs.dreamstime.com/b/confectioner-work-cream-cake-decorating-cook-table-preparing-gray-background-150087484.jpg" alt="" />
                <div className='work d-flex flex-column justify-content-center align-items-center w-50 ' style={{ fontSize: '20px' }}>
                    <div>
                        <h3 className='' style={{ color: 'gray' }}>FEBRUARY ONLINE WORKSHOP</h3>
                        <h3 style={{ color: 'gray' }}>IS FOR ALMOND CAKE</h3>
                        <p className='mt-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
                        <p className='mt-5'>Date & Time: 19th February @ 6pm</p>
                        <p className='mt-3'>Duration: 1 hour</p>
                        <p className='mt-3'>Price: $49 (only PayPal available for internatioanal payments)</p>
                    </div>
                    <button style={{ border: '1px solid white', color: 'white' }} className=' btn  m-5 p-3 '>REGISTER</button></div>
            </div>
        </div>
    )
}

export default Blog
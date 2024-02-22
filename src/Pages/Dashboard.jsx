import React from 'react'
import Slice from '../Components/Slice'
import Marquee from '../Components/Marquee'
import Blog from '../Components/Blog'
import Team from '../Components/Team'

function Dashboard() {
  return (
    <div>
       <Slice/>
      <Marquee/>
      <Blog/>
      <Team/>
    </div>
  )
}

export default Dashboard
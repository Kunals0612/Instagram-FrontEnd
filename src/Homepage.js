import React from 'react'
import './Homepage.css'
import Timeline from './Timeline/Timeline'
import Sidenav from './Navigation/Sidenav'
function Homepage() {
  return (
    <div>
      <div className="homepage">
          <div className="hompage_nav">
          <Sidenav/>
          </div>
          <div className="homepage_timeline">
          <Timeline/>
          </div>
      </div>
    </div>
  )
}

export default Homepage

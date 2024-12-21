/* eslint-disable no-unused-vars */
import React from 'react'
import Catagory from '../all/Catagory'
import Navbar from './Navbar'

function TopSection() {
  return (
    <div className="grid grid-flow-row sticky">
        <div>
            <Navbar/>
        </div>
        <div>
          <Catagory/>
        </div>
      </div>
  )
}

export default TopSection
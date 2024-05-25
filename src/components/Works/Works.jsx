import React from 'react'
import './Works.css'
import landing from '../../img/landing.svg'
import web from '../../img/web.svg'
import rocked from '../../img/rocked.svg'
import shopping from '../../img/shopping.svg'
import geom from '../../img/geom.svg'
import trick from '../../img/trick.svg'
import hall from '../../img/hall.svg'
import vell from '../../img/vell.svg'

function Works() {
  return (
    <div className='Works'> 
      <div className="container">
        <h4 className='partners'>Works</h4>
        <h2 className='partners__text'>Portfolio</h2>
        <p className='pertners__p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="works__img">
            <img src={landing} alt="" />
            <img src={web} alt="" />
            <img src={rocked} alt="" />
            <img src={shopping} alt="" />
            <img src={geom} alt="" />
            <img src={trick} alt="" />
            <img src={hall} alt="" />
            <img src={vell} alt="" />
        </div>
        <button className='cards__btn'>Learn me</button>
      </div>
    </div>
  )
}

export default Works

import React from 'react'
import './Team.css'
import first from '../../img/first.svg'
import second from '../../img/second.svg'
import thirt from '../../img/thirt.svg'  
import fourt from '../../img/fourt.svg'
function Team() {
  return (
    <div className='team'>
      <div className="container">
        <h4 className='partners'>Team</h4>
        <h2 className='partners__text'>Our Talents</h2>
        <p className='pertners__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sapiente quia.</p>
        <div className='cards'>
          <div className="cards__team"><img src={first} alt="" />
            <h3>Peg Legge</h3>
            <p>CEO</p>
          </div>
          <div className="cards__team"><img src={second} alt="" />
            <h3>Richard Guerra</h3>
            <p>CTO</p>
          </div>
          <div className="cards__team"><img src={thirt} alt="" />
            <h3>Alexandra Stolz</h3>
            <p>DESIGNER</p>
          </div>
          <div className="cards__team"><img src={fourt} alt="" />
            <h3>Janet Bray</h3>
            <p>DEVELOPER</p>
          </div>
        </div>
          <button className='cards__btn'>Learn me</button>
      </div>
    </div>
  )
}

export default Team

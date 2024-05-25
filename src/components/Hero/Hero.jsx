import React from 'react'
import './Hero.css'
import team from '../../img/team.svg'

function Hero() {
    return (
        <div className='hero'>
            <div className="container hero__inner">
                <div>
                <h4>Welcome</h4>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                <button>Explore</button>
                </div>
            <img src={team} alt="" />
            </div>
        </div>
    )
}

export default Hero

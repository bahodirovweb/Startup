import React from 'react'
import './Partners.css'
import partners__img from '../../img/partners__img.svg'
import partners from '../../img/partners.svg'
import google from '../../img/google.svg'
import microsof from '../../img/microsof.svg'
import airbnb from '../../img/airbnb.svg'
import facebook from '../../img/facebook.svg'
import spotify from '../../img/spotify.svg'
 

function Partners() {
    return (
        <div className="Partners">
            <div className='container'>
                <h4 className='partners'>Partners</h4>
                <h2 className='partners__text'>Lorem, ipsum dolor.</h2>
                <p className='pertners__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='brends'>
                    <ul className='brends__ul'>
                        <li className='brends__inner'><img src={google} alt="" /></li>
                        <li className='brends__inner'> <img src={microsof} alt="" /></li>
                        <li className='brends__inner'> <img src={airbnb} alt="" /></li>
                        <li className='brends__inner'> <img src={facebook} alt="" /></li>
                        <li className='brends__inner'> <img src={spotify} alt="" /></li>
                    </ul>
                    <button className='cards__btn'>Learn me</button>
                </div>
                <div className="partners__info">
                    <img className='partners_info_img' src={partners__img} alt="" />
                    <div className='partner'>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim molestiae beatae maiores libero consequatur sed debitis possimus, nostrum explicabo, dolor magni porro ducimus odio.</p>
                        <button className='partners__bt'>Learn me</button>
                    </div>
                </div>
                <div className="partners__info">
                    <div className='partner'>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim molestiae beatae maiores libero consequatur sed debitis possimus, nostrum explicabo, dolor magni porro ducimus odio.</p>
                        <button className='partners__bt'>Learn me</button>
                    </div>
                    <img className='partners_info_img' src={partners} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners

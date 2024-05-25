import React from 'react'
import './Plans.css'
import chek from '../../img/chek.svg'
function Plans() {
    return (
        <div className='plans'>
            <div className="container">
                <h4 className='partners'>Planes</h4>
                <h2 className='partners__text'>Our Services</h2>
                <p className='pertners__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="plans">
                    <div className="plan">
                        <p>Basic</p>
                        <h2 className="price">$100 <span>/ month</span></h2>
                        <p className='pi'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam.</p>
                        <ul>
                        <li className='check__item'>
                                <img src={chek} alt="" />
                                <p className='pip'>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p className='pip'>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p className='pip'> Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p className='pip'>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p className='pip'>Lorem ipsum dolor sit amet.</p>
                            </li>     
                        </ul>
                        <button>Learn More</button>
                    </div>
                    <div className="plan">
                        <p>Plus</p>
                        <h2 className="price">$250 <span>/ month</span></h2>
                        <p className='pi'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam.</p>
                        <ul>
                        <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <button>Learn More</button>
                    </div>
                    <div className="plan">
                        <p>Pro</p>
                        <h2 className="price">$400 <span>/ month</span></h2>
                        <p className='pi'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam.</p>
                        <ul>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li className='check__item'>
                                <img src={chek} alt="" />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plans

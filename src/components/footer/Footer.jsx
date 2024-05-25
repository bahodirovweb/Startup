import React from 'react'
import './Footer.css'
import footer__f from '../../img/footer__f.svg'
import footer__i from '../../img/footer__i.svg'
import footer__t from '../../img/footer__t.svg'
import footer__p from '../../img/footer__p.svg'
import footer__tik from '../../img/footer__tik.svg'
import footer__w from '../../img/footer__w.svg'
import footer__y from '../../img/footer__y.svg'
function Footer() {
    return (
        <div className='footer'>
            <div className="container footer__container">
                <div className='footer__img'>
                    <img src={footer__f} alt="" />
                    <img src={footer__i} alt="" />
                    <img src={footer__t} alt="" />
                    <img src={footer__p} alt="" />
                    <img src={footer__tik} alt="" />
                    <img src={footer__w} alt="" />
                    <img src={footer__y} alt="" />
                </div>
                <p className='footer_p' >© Start, 2022. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import REG_trans from "../../public/img/REG-trans.svg"
import Image from 'next/image'
const CommingSoon = () => {
  return (
    <section class="comming-soon">
        <div class="comming-wrapper">
            <div class="logo">
                <Image src={REG_trans} alt="logo"/>
            </div>
            <div class="comming-title">
                <h1>Comming soon</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, illum?</p>
            </div>
            <div class="contact-detail">
                <div class="contact-mail">
                    <a href="mailto:contact@reig.uk" aria-label=""> contact@reig.uk</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommingSoon
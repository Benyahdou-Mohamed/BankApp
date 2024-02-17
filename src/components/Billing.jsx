import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import { apple,bill,google } from '../assets';
export default function Billing () {
  return (
    <section id ="features" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
      </div>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple}  className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" alt="" />
        <img src={google}  className="w-[128px] h-[42px] object-contain cursor-pointer" alt="" />

      </div>

      </div>

    </section>
  )
}

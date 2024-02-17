import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
export const Getstarted = () => {
  return (
    <div className={`flex-1 ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient 
    p-[2px] cursor-pointer`}>
        <div className={`flex-1 ${styles.flexCenter} w-[100%] h-[100%] flex-col rounded-full bg-primary`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-popping font-medium text-[18px] leading-[23px] mr-2">
                    <span className="text-gradient"> Get</span>
                </p>
                <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt="" />
            </div>
            <p className="font-popping font-medium text-[18px] leading-[010px]">
                    <span className="text-gradient"><br/> Started</span>
                       
                </p>

        </div>
    </div>
  )
}

import React,{useState} from 'react'
import {close,logo,menu} from '../assets'
import { navLinks } from '../constants'
console.log(navLinks)
export default function NavBar  () {
  return (
    <div className="wfull flex py-6 justify-between items-center navbar">
        <img src={logo} alt="bank"  className="w-[124px] h-[32px]"/>
        <ul className='list-nom sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav,index)=>
                <li
                className={`font-poppins font-normal cursor-pointer text-[16px] 
                   text-white mr-10 ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  key={nav.id}
                  
                >
                    <a href={`#${nav.id}`}>{nav.title}</a>

                </li>
            )}
        </ul>
    </div>
  )
}

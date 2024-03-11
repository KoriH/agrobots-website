import React from 'react';
import { LOGO } from "../../assets";

function Footer() {
    return (
        <footer className="text-[#88BE22] w-full flex p-10">

            <div className='w-[20%] text-center bg-[#f8f7f1]'>
                <img src={LOGO} alt="footer logo" className="inline-block w-[70%]"></img>
            </div>
            <div className='w-[80%] text-[18px]'>
                <ul className='w-full pt-1 font-bold capitalize flex justify-evenly flex-wrap'>
                    <li className='px-[10px]'><a href="/">Home</a></li>
                    <li className='px-[10px]'>
                        <a href="/portfolio">Portfolio </a>
                        <ul className='text-[#2a2a2a] font-normal leading-6'>
                            <li><a href="/agrobot">AgroBot</a></li>
                            <li><a href="/agroponics">AgroPonics</a></li>
                        </ul>
                    </li>
                    <li className='px-[10px]'><a href="/sponsorship">Sponsorship</a></li>
                    <li className='px-[10px]'><a href="/recruitment">Recruitment</a></li>
                    <li className='px-[10px]'><a href="/contactus">Contact Us</a></li>
                    <li className='px-[10px]'><a href="/aboutus">About Us</a></li>
                    <li className='px-[10px]'><a href="/shop">Shop</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

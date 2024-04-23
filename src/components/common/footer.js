import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from "../../assets";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="text-[#8CBC24] w-full p-10 bg-[#202020]">
            <div className='flex'>
                <div className='w-0 md:w-[20%] bg-[#3A3A3A] flex justify-center items-center rounded-xl'>
                    <img src={LOGO} alt="footer logo" className="w-[70%]"></img>
                </div>

                <div className='w-full md:w-[80%] text-[18px]'>
                    <ul className='w-full font-bold capitalize  flex flex-col md:flex-row md:justify-evenly'>
                        <li className='p-[10px]'><Link to="/">Home</Link></li>
                        <li className='p-[10px]'>
                            <Link to="/portfolio">Portfolio </Link>
                            <ul className='font-normal leading-6 text-left'>
                                <li><Link to="/agrobot">AgroBot</Link></li>
                                <li><Link to="/agroponics">AgroPonics</Link></li>
                            </ul>
                        </li>
                        <li className='p-[10px]'><Link to="/sponsorship">Sponsorship</Link></li>
                        <li className='p-[10px]'><Link to="/recruitment">Recruitment</Link></li>
                        <li className='p-[10px]'><Link to="/contactus">Contact Us</Link></li>
                        <li className='p-[10px]'><Link to="/aboutus">About Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className='py-7'><hr className="border-[#3A3A3A]"></hr></div>

            <div className='flex justify-between'>
                <div className="">Copright © 2024. All rights Reserved.</div>

                <div>
                    <a
                        className="underline pt:2 md:pt-0 inline-block"
                        href="https://www.instagram.com/ubcagrobots"
                        target="_blank"
                    > <FaInstagram size={30} /> </a>{" "}

                    <a
                        className="underline pt:2 md:pt-0 inline-block"
                        href="https://www.linkedin.com/company/ubc-agrobot"
                        target="_blank"
                    > <FaLinkedin size={30} /> </a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;

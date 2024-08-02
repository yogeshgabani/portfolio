import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa'
import logofooter from '../../Assets/yg.png'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Footer() {
    const [activeTab, setActiveTab] = useState('services');

    const scrollToSection = (id) => {
        setActiveTab(id);
        // navigate('/');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className="bg-[#140c1c] pt-[50px] pb-[20px]">
                <div className='container mx-auto px-10'>


                    <div className=''>
                        <img className='m-auto h-[50px] w-[80px]' src={logofooter} alt="" />
                    </div>
                    <div>
                        <ul className='menu-header flex justify-center items-center flex-wrap xl:gap-[35px] gap-[20px] my-[27px]'>
                            <li className='relative'>
                                <Link to='services'><a className='text-white text-[15px] font-bold py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#">Services.</a></Link>
                            </li>
                            <li className='relative'>
                            <Link to='portfolio'><a className='text-white text-[15px] font-bold py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#">Works.</a></Link>
                            </li>
                            <li className='relative'>
                            <Link to=''><a className='text-white text-[15px] font-bold py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('resume')}>Experience.</a></Link>
                            </li>
                            <li className='relative'>
                            <Link to=''><a className='text-white text-[15px] font-bold py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('skill')}>Skills.</a></Link>
                            </li>
                            <li className='relative'>
                            <Link to='blog'><a className='text-white text-[15px] font-bold py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#">Blog.</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center copy-right'>
                        <div>
                        <p className='text-[15px] font-normal text-[#8750f7]'>Designed and Developed by&nbsp;&nbsp;<a className='font-bold py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px] hover:text-white' href="#">Yogesh Gabani</a></p>
                        <p className='text-[15px] font-normal text-[#8750f7]'>© 2024 All Rights Reserved</p>
                        </div>   
                        {/* social media link */}
                        <div className='social-icon'>
                            <ul className='flex  items-center gap-5'>
                                <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                    <a href="#" target='_blank'><FaFacebookF className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                </li>
                                <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                    <a href="#" target='_blank'><FaLinkedinIn className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                </li>
                                <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                    <a href="https://github.com/yogeshgabani" target='_blank'><FaXTwitter className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                </li>
                                <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                    <a href="# target='_blank'"><FaInstagramSquare className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                </li>
                                <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                    <a href="https://github.com/yogeshgabani" target='_blank'><FaGithub className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
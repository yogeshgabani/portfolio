import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Listmenu() {

    const [activeTab, setActiveTab] = useState('services');
    const navigate = useNavigate();
    const scrollToSection = (id) => {
        setActiveTab(id);
        navigate('/');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
            <ul className='menu-header lg:flex items-center flex-wrap xl:gap-x-[35px] gap-x-[25px] hidden'>
                <li className={activeTab === 'home' ? 'relative active' : 'relative'} >
                   <Link to='/'> <a className='text-white text-[15px] font-medium py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('home')}>Home</a></Link>
                </li>
                <li className={activeTab === 'services' ? 'relative active' : 'relative'} >
                    <Link to='services'><a className='text-white text-[15px] font-medium py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('services')}>Services</a></Link>
                    <ul style={{ boxShadow: '0 20px 40px 0px rgba(135, 80, 247, 0.1)', }} className='sub-menu z-[1] absolute bg-[#050709] w-[250px] py-[10px] top-[30px] scale-y-0 tran'>
                        <li className='group'>
                            <Link to='/portfolio'><a className='py-[10px] px-[20px] block transition-all duration-500 ease-in-out delay-0a group-hover:text-[#8750f7] group-hover:pl-[25px]' href="#">Portfolios</a></Link>
                        </li>
                    </ul>
                </li>
                <li className={activeTab === 'works' ? 'relative active' : 'relative'} >
                    <a className='text-white text-[15px] font-medium py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('works')}>Works</a>
                </li>
                <li className={activeTab === 'resume' ? 'relative active' : 'relative'} >
                    <a className='text-white text-[15px] font-medium py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('resume')}>Resume</a>
                </li>
                <li className={activeTab === 'skill' ? 'relative active' : 'relative'} >
                    <a className='text-white text-[15px] font-medium py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('skill')}>Skills</a>
                </li>
                <li className={activeTab === 'blog' ? 'relative active' : 'relative'} >
                    <a className='text-white text-[15px] font-medium py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('blog')}>Blog</a>
                </li>
                <li className={activeTab === 'contacts' ? 'relative active' : 'relative'} >
                    <a className='text-white text-[15px] font-medium py-[17px] relative after:absolute after:[""] after:h-[2px] after:w-full after:left-0 after:bottom-[10px]' href="#" onClick={() => scrollToSection('contacts')}>Contacts</a>
                </li>
            </ul>
        </>
    )
}
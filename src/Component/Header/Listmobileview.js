import { useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Listmobileview({ click, setclick }) {

    const [open, setopen] = useState(false)

    const scrollToSection2 = (id) => {
        const element = document.getElementById(id);
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setclick(!click)
        }
    };

    return (
        <>
            <ul className='container mx-auto py-5 sm:px-10 px-3 mx-w-[65%]'>
                <li className={open ? 'uppercase w-full block open' : 'uppercase w-full block'}>
                    <div className='relative' onClick={() => setopen(!open)}>
                        <a className='sm:text-[25px] text-[22px] leading-[1.2] sm:py-[15px] py-[12px] sm:tracking-[1px] tracking-[0] block' href="#">services</a>
                        <FaPlus className={open ? 'absolute right-0 top-[22px] hidden' : 'absolute right-0 top-[22px] block'} />
                        <AiOutlineMinus className={open ? 'absolute right-0 top-[22px] block' : 'absolute right-0 top-[22px] hidden'} />
                    </div>
                    <ul className={open ? 'mx-auto visible opacity-100 h-max transition-all ease-in-out duration-300 delay-0 scale-y-100' : 'mx-auto invisible opacity-0 h-0 transition-all ease-in-out duration-300 delay-0 scale-y-0'}>
                        <li className='pl-4'>
                            <Link to='portfolio'><a className='sm:text-[22px] text-[20px] capitalize block py-[10px] tracking-[0] leading-[1.2]' href="#">portfolio</a></Link>
                        </li>
                    </ul>
                </li>
                <li className='uppercase w-full block' onClick={() => scrollToSection2('works')}>
                    <a className='sm:text-[25px] text-[22px] leading-[1.2] sm:py-[15px] py-[12px] sm:tracking-[1px] tracking-[0] block' href="#">works</a>
                </li>
                <li className='uppercase w-full block' onClick={() => scrollToSection2('resume')}>
                    <a className='sm:text-[25px] text-[22px] leading-[1.2] sm:py-[15px] py-[12px] sm:tracking-[1px] tracking-[0] block' href="#">resume</a>
                </li>
                <li className='uppercase w-full block' onClick={() => scrollToSection2('skill')}>
                    <a className='sm:text-[25px] text-[22px] leading-[1.2] sm:py-[15px] py-[12px] sm:tracking-[1px] tracking-[0] block' href="#">skills</a>
                </li>
                <li className='uppercase w-full block' onClick={() => scrollToSection2('blog')}>
                    <a className='sm:text-[25px] text-[22px] leading-[1.2] sm:py-[15px] py-[12px] sm:tracking-[1px] tracking-[0] block' href="#">blog</a>
                </li>
                <li className='uppercase w-full block' onClick={() => scrollToSection2('contacts')}>
                    <a className='sm:text-[25px] text-[22px] leading-[1.2] sm:py-[15px] py-[12px] sm:tracking-[1px] tracking-[0] block' href="#">contact</a>
                </li>
            </ul>
        </>
    )
}
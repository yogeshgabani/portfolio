import '../Header/Header.css';
import { useEffect, useState } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import Headermenu from './headermenu';
// import '../../Component/Header/Header.css'

export default function Header() {


    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setScroll(true);
              } else {
                setScroll(false);
              }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    };


    return (
        <>
            <div className={scroll ? 'bg-[#050709] header-2 relative sticky-header z-[2] active' : 'bg-[#0f0715] lg:pt-10 pt-5 lg:pb-5 relative z-[2] pb-4'}>
                <Headermenu />
            </div>

            {/* sticky header */}
            {/* <div className={scroll ? "bg-[#050709] header-2 sticky-header active" : "bg-[#050709] header-2 stick-out"}>
                <Headermenu />
            </div> */}


            {/* scroll-top button */}
            <div className={scroll ? 'fixed sm:w-[45px] w-9 sm:h-[45px] h-9 sm:bottom-[25px] bottom-4 sm:right-[30px] right-2 rounded-full visible opacity-100 scroll-top cursor-pointer scroll' : 'cursor-pointer fixed sm:w-[45px] w-9 sm:h-[45px] h-9 sm:bottom-[25px] bottom-4 sm:right-[30px] right-2 rounded-full opacity-0 invisible scroll-top'} onClick={scrollToTop}>
                <IoMdArrowRoundUp className='text-[#8750f7] text-[24px] transition-all duration-300 ease-linear delay-0  hover:rotate-[360deg]' />
            </div>
        </>
    )
}

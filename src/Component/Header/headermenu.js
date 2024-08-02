import { useState } from 'react';
import web_logo from '../../Assets/yg.png';
import Listmenu from './Listmenu';
import Listmobileview from './Listmobileview';
import { Link } from 'react-router-dom';


export default function Headermenu() {

    const [click, setclick] = useState(false)
    

    return (
        <>
            <div className="container mx-auto xl:px-10 lg:px-2 px-3">
                <div className="grid grid-cols-3">
                    <div className="flex items-center">
                        <div>
                            <Link to='/'><img className='min-w-[80px] h-[50px]' src={web_logo} alt="" /></Link>
                        </div>
                        <div className='ml-1 xl:ml-9 mr-auto hidden md:inline-block'>
                            <a href='mailto:gabaniyogesh@gmail.com' className='text-[15px] text-white font-medium transition-all duration-300 ease-out delay-0 hover:text-[#8750f7] no-underline md:block hidden'>gabaniyogesh@gmail.com</a>
                        </div>
                    </div>
                    <div className='col-span-2 flex justify-end'>
                        <Listmenu  />
                        
                        {/* <div className='xl:ms-10 md:ms-3 ms-0 flex'>
                            <button className='hire-btn text-[15px] font-bold rounded-[50px]  px-[36px] transition-all duration-300'>Hire Me!</button>
                        </div> */}

                        {/* mobile view */}
                        <div className={click ? 'lg:hidden mobile-menu flex items-center ml-3 clicked' : 'mobile-menu flex items-center ml-3 lg:hidden'}>
                            <button className='relative rotate-0 transition-all duration-300 ease-in-out delay-0 origin-center h-[25px] flex flex-col justify-between' onClick={() => setclick(!click)}>
                                <span className='h-[3px] w-[35px] block bg-white transition-all duration-300 ease-in-out delay-0 ml-auto'></span>
                                <span className='h-[3px] w-[40px] block bg-white transition-all duration-300 ease-in-out delay-200 ml-auto'></span>
                                <span className='h-[3px] w-[30px] block bg-white transition-all duration-300 ease-in-out delay-0 ml-auto'></span>
                                <span style={{ transition: 'height 400ms' }} className='absolute top-[-8px] left-2/4 -translate-x-2/4 h-0 w-[3px] block bg-white ml-auto'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view menu open */}
            <div className={click ? 'absolute bg-[#2a1454] lg:top-[110px] top-[85px] left-0 w-full min-h-[90vh]  scale-y-1 transition-all duration-500 ease-in-out delay-0 z-[2] origin-top' : 'absolute z-[2] bg-[#2a1454] lg:top-[110px] top-[85px] left-0 w-full min-h-[90vh]  scale-y-0 transition-all duration-500 ease-in-out delay-0 origin-top'}>
                <Listmobileview click={click} setclick={setclick} />
            </div>
        </>
    )
}
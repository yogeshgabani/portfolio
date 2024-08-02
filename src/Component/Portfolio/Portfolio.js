
import { useEffect, useState } from 'react';
import { filterdata } from '../Filter';
import { GoArrowUpRight } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';
import 'animate.css/animate.min.css';
import WOW from 'wowjs';

export default function Portfolio() {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

     // filter data
     const [alldata, setalldata] = useState(filterdata)
     const [activeBtn, setActiveBtn] = useState("All");
     // console.log(alldata)
     const clickbtn = (e) => {
         let word = e.target.value;
         console.log(word)
         if (word === "All") {
             setalldata(filterdata);
         } else {
             const filtered = filterdata.filter(item => item.data === word);
             setalldata(filtered);
         }
         setActiveBtn(word);
     }
     useEffect(() => {
        new WOW.WOW().init();
      }, []);

    return (
        <>
            <div>
                <div className='max-w-[660px] w-full text-center m-auto sm:mb-[50px] mb-6'>
                    <h1 className='md:text-[45px] text-[30px] section-title leading-[1.2]  mb-4 font-bold wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">My Recent Works</h1>
                </div>
                <div className='container mx-auto sm:px-10 px-3'>
                    <div className='bg-[#050709] w-max rounded-[60px] py-[6px] sm:px-[8px] px-0 m-auto wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">
                        <button value="All" onClick={clickbtn} className={activeBtn === "All" ? "bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0 active-bg-color" : "bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0"}>All</button>
                        <button value="Web Designer" onClick={clickbtn} className={activeBtn === "Web Designer" ? "bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0 active-bg-color" : "bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0"}>Web Designer</button>
                        <button value="Branding" onClick={clickbtn} className={activeBtn === "Branding" ? "bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0 active-bg-color" : "bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0"}>branding</button>
                        <button value="UX/UI" onClick={clickbtn} className={activeBtn === "UX/UI" ? "bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0 active-bg-color" : "bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0"}>UX/UI</button>
                        {/* <button className='bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0 active-bg-color' >All</button>
                        <button className='bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0 active-bg-color' >Web Designer</button>
                        <button className= 'bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0 active-bg-color' >Branding</button>
                        <button className='bg-transparent text-white sm:text-[15px] text-[12px] sm:py-3 py-1 sm:px-6 px-2 rounded-[50px] border-0 active-bg-color' >UX/UI</button> */}
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-[50px] gap-10 relative before:absolute before:content-[""] before:w-[35%] before:h-[35%] before:rounded-full before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 portfolio wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                        {
                            alldata.map(index => (
                                <div className='group bg-[#140c1c] relative rounded-[10px] px-[36px] pt-[36px]'>
                                    <div>
                                        <img className='w-full h-full bg-cover' src={index.image} alt="" />
                                    </div>
                                    <Link to={`/portfolio/${index.link}`}> <div className='bg-blue absolute w-[calc(100%-40px)] bottom-[20px] left-[20px] transition-all duration-300 ease-linear delay-0 md:p-5 p-3 rounded-[15px] translate-y-[20px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:cursor-pointer'>
                                        <h3 className='md:text-[30px] text-[22px] font-bold text-white leading-[1.2] md:mb-[15px] mb-2'>{index.title}</h3>
                                        <p className='text-[16px] text-[#dddddd]'>{index.subtitle}</p>
                                        <GoArrowUpRight className='absolute right-6 md:top-[40%] top-7 -translate-y-2/4 md:text-[40px] text-[26px] transition-all duration-500 ease-in group-hover:rotate-[360deg]' />
                                    </div></Link>
                                </div>
                                
                            ))
                        }
                        {/* <div className='group bg-[#140c1c] relative rounded-[10px] px-[36px] pt-[36px]'>
                            <div>
                                <img className='w-full h-full bg-cover' src={portfolio_one} alt="" />
                            </div>
                            <div className='bg-blue absolute w-[calc(100%-40px)] bottom-[20px] left-[20px] transition-all duration-300 ease-linear delay-0 md:p-5 p-3 rounded-[15px] translate-y-[20px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:cursor-pointer'>
                                <h3 className='md:text-[30px] text-[22px] font-bold text-white leading-[1.2] md:mb-[15px] mb-2'>Deloitte</h3>
                                <p className='text-[16px] text-[#dddddd]'>Project was about precision and information.</p>
                                <GoArrowUpRight className='absolute right-6 md:top-[40%] top-7 -translate-y-2/4 md:text-[40px] text-[26px] transition-all duration-500 ease-in group-hover:rotate-[360deg]' />
                            </div>
                        </div>
                        <div className='group bg-[#140c1c] relative rounded-[10px] px-[36px] pt-[36px]'>
                            <div>
                                <img className='w-full h-full bg-cover' src={portfolio_two} alt="" />
                            </div>
                            <div className='bg-blue absolute w-[calc(100%-40px)] bottom-[20px] left-[20px] transition-all duration-300 ease-linear delay-0 md:p-5 p-3 rounded-[15px] translate-y-[20px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:cursor-pointer'>
                                <h3 className='md:text-[30px] text-[22px] font-bold text-white leading-[1.2] md:mb-[15px] mb-2'>New Age</h3>
                                <p className='text-[16px] text-[#dddddd]'>Project was about precision and information.</p>
                                <GoArrowUpRight className='absolute right-6 md:top-[40%] top-7 -translate-y-2/4 md:text-[40px] text-[26px] transition-all duration-500 ease-in group-hover:rotate-[360deg]' />
                            </div>
                        </div>
                        <div className='group bg-[#140c1c] relative rounded-[10px] px-[36px] pt-[36px]'>
                            <div>
                                <img className='w-full h-full bg-cover' src={portfolio_three} alt="" />
                            </div>
                            <div className='bg-blue absolute w-[calc(100%-40px)] bottom-[20px] left-[20px] transition-all duration-300 ease-linear delay-0 md:p-5 p-3 rounded-[15px] translate-y-[20px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:cursor-pointer'>
                                <h3 className='md:text-[30px] text-[22px] font-bold text-white leading-[1.2] md:mb-[15px] mb-2'>Sebastian</h3>
                                <p className='text-[16px] text-[#dddddd]'>Project was about precision and information.</p>
                                <GoArrowUpRight className='absolute right-6 md:top-[40%] top-7 -translate-y-2/4 md:text-[40px] text-[26px] transition-all duration-500 ease-in group-hover:rotate-[360deg]' />
                            </div>
                        </div>
                        <div className='group bg-[#140c1c] relative rounded-[10px] px-[36px] pt-[36px]'>
                            <div>
                                <img className='w-full h-full bg-cover' src={portfolio_four} alt="" />
                            </div>
                            <div className='bg-blue absolute w-[calc(100%-40px)] bottom-[20px] left-[20px] transition-all duration-300 ease-linear delay-0 md:p-5 p-3 rounded-[15px] translate-y-[20px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:cursor-pointer'>
                                <h3 className='md:text-[30px] text-[22px] font-bold text-white leading-[1.2] md:mb-[15px] mb-2'>Mochnix</h3>
                                <p className='text-[16px] text-[#dddddd]'>Project was about precision and information.</p>
                                <GoArrowUpRight className='absolute right-6 md:top-[40%] top-7 -translate-y-2/4 md:text-[40px] text-[26px] transition-all duration-500 ease-in group-hover:rotate-[360deg]' />
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}
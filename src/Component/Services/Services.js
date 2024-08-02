import { Link, useLocation } from 'react-router-dom';
import background from '../../Assets/breadcrumb-bg.webp';
import { GoArrowUpRight } from 'react-icons/go';
import '../Services/services.css';
import WOW from 'wowjs';
import { useEffect } from 'react';

export default function Services() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        new WOW.WOW().init();
      }, []);
    return (
        <>
            <div className="portfoliomain bg-cover bg-no-repeat bg-center md:min-h-[350px] min-h-[200px] md:pt-[100px] pt-[50px] relative z-[1] after:absolute after:content-[''] after:top-0 after:z-[-1] after:left-0 after:w-full after:h-full after:bg-[#140c1cb3]" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1 className='sm:text-[50px] text-[30px] leading-[1.2] text-white text-center font-bold'>Archieves: Services</h1>
                    <h5 className='text-[16px] flex justify-center items-center font-normal text-white mt-4 text-center'>
                        <Link to='/'><a className='hover:underline' href="#">Home</a></Link>&nbsp;&nbsp;&gt;
                        &nbsp;&nbsp;<span href='#'>Service </span>&nbsp;
                    </h5>
                </div>
            </div>
            <div className='bg-[#050709] py-[100px]'>
                <div className='container mx-auto xl:px-10 px-0 relative'>
                    <Link to='branding-design'><div className=' group services-box flex lg:flex-row flex-col box-one lg:items-center items-start lg:gap-[20px] gap-0 border-b-[1px] border-b-solid border-b-[#2a1454] relative md:px-[30px] px-5 z-[1] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                        <div className='flex items-center gap-[20px] xl:py-[30px] py-0 lg:pt-0 pt-3 lg:w-[calc(40%-10px)] w-full'>
                            <span className='text-[#8750f7] text-[20px] font-bold transition-all duration-500 ease-linear delay-0 group-hover:text-white'>01</span>
                            <h3 className='xl:text-[30px] lg:text-[22px] font-bold text-white leading-[1.2]'>Branding Design</h3>
                        </div>
                        <div className='xl:py-[30px] lg:py-[20px] sm:py-[10px] py-2  lg:pr-[22%] lg:w-[calc(100%-10px)] w-full pr-0' >
                            <p className='sm:text-[16px] text-[14px] text-[#dddddd]'>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                        </div>
                        <div className='absolute lg:top-2/4 top-6 -translate-y-2/4 md:right-8 right-1'>
                            <GoArrowUpRight className='text-[#8750f7] icon text-[35px]' />
                        </div>
                    </div>
                    </Link>
                    <Link to='web-design'><div className='flex group services-box lg:flex-row flex-col box-one lg:items-center items-start lg:gap-[20px] gap-0 border-b-[1px] border-b-solid border-b-[#2a1454] relative md:px-[30px] px-5 wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className='flex items-center gap-[20px] lg:py-[30px] py-0  pt-3 lg:w-[calc(40%-10px)] w-full'>
                            <span className='text-[#8750f7] text-[20px] font-bold transition-all duration-500 ease-linear delay-0 group-hover:text-white'>02</span>
                            <h3 className='xl:text-[30px] lg:text-[22px] font-bold text-white leading-[1.2]'>Web Design</h3>
                        </div>
                        <div className='xl:py-[30px] lg:py-[20px] sm:py-[10px] py-2  lg:pr-[22%] lg:w-[calc(100%-10px)] w-full pr-0'>
                            <p className='sm:text-[16px] text-[14px] text-[#dddddd]'>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                        </div>
                        <div className='absolute lg:top-2/4 top-6 -translate-y-2/4 md:right-8 right-1'>
                            <GoArrowUpRight className='text-[#8750f7] icon text-[35px]' />
                        </div>
                    </div>
                    </Link>
                    {/* <div className='active-bg xl:h[130px]  xl:mx-10 mx-0'>
                    </div> */}
                </div>
            </div>
        </>
    )
}
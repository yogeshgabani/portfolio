import { Link, useLocation } from 'react-router-dom';
import background from '../../Assets/breadcrumb-bg.webp';
import pitnik from '../../Assets/pitnik.png'
import pit_1 from '../../Assets/pit-1.png'
import pit_2 from '../../Assets/pit-2.png'
import pit_3 from '../../Assets/pit-3.png'
import pit_4 from '../../Assets/pit-4.png'
import pit_5 from '../../Assets/pit-5.png'

import { GoArrowUpRight } from 'react-icons/go';
import Slider from "react-slick";
import { useEffect } from 'react';



export default function Pitnik() {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="portfoliomain bg-cover bg-no-repeat bg-center md:min-h-[350px] min-h-[200px] md:pt-[100px] pt-[50px] relative z-[1] after:absolute after:content-[''] after:top-0 after:z-[-1] after:left-0 after:w-full after:h-full after:bg-[#140c1cb3]" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1 className='sm:text-[50px] text-[30px] leading-[1.2] text-white text-center capitalize font-bold'>pitnik</h1>
                    <h5 className='text-[16px] font-normal text-white mt-4 text-center'>
                        <Link to='/'><a className='hover:underline' href="#">Home</a></Link>&nbsp;&nbsp;&gt;
                        <Link to='/portfolio'>&nbsp;&nbsp;<a className='hover:underline ' href='#'>Portfolios </a>&nbsp;&gt;</Link>
                        <span>&nbsp;&nbsp;pitnik</span></h5>
                </div>
            </div>
            <div className='bg-[#050709]'>
                <div className='container mx-auto md:px-10 px-3 md:py-[100px] py-[70px]'>
                    <div className='bg-[#2A1454] px-[60px] pt-[60px]'>
                        <div>
                            <img className='w-full h-full bg-cover bg-no-repeat' src={pitnik} alt="" />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 pt-[50px] gap-5'>
                        <div className=''>
                            <h2 className='text-[45px] font-bold leading-[1.2] mb-3 text-white'>Pitnik</h2>
                            <p className='text-[16px] text-[#dddddd] '>They are was greater open above shelter lets itself under appear sixth open gathering made upon can't own above midst gathering gathered he one us saying can't divide.</p>
                            <button className='hire-btn text-[15px] font-bold rounded-[50px] mt-8 px-[35px] py-[17px] transition-all duration-300 '><a className='flex items-center gap-2' href="https://pitnik-demo-tailwindcss-react.vercel.app/" target='_blank'>Live Preview<GoArrowUpRight className='text-[20px]' /></a></button>
                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 md:mt-0 mt-4 gap-3'>
                            <div>
                                <h6 className='text-[#dddddd] text-[16px] font-normal tracking-[0.3px] mb-2'>Category</h6>
                                <h5 className='text-[18px] font-medium leading-[1.2] text-white'>Web Design</h5>
                            </div>
                            <div>
                                <h6 className='text-[#dddddd] text-[16px] font-normal tracking-[0.3px] mb-2'>Client</h6>
                                <h5 className='text-[18px] font-medium leading-[1.2] text-white'>-</h5>
                            </div>
                            <div>
                                <h6 className='text-[#dddddd] text-[16px] font-normal tracking-[0.3px] mb-2'>Start Date</h6>
                                <h5 className='text-[18px] font-medium leading-[1.2] text-white'>Jan 20, 2024</h5>
                            </div>
                            <div>
                                <h6 className='text-[#dddddd] text-[16px] font-normal tracking-[0.3px] mb-2'>Designer</h6>
                                <h5 className='text-[18px] font-medium leading-[1.2] text-white'>-</h5>
                            </div>
                        </div>

                    </div>
                    <div className="slider-container my-10">
                        <Slider {...settings}>
                            <div className=''>
                                <div className='mx-3 '>
                                    <img className='w-full h-full' src={pit_1} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className='mx-3'>
                                    <img src={pit_2} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className='mx-3'>
                                    <img src={pit_3} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className='mx-3'>
                                    <img src={pit_4} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className='mx-3'>
                                    <img src={pit_5} alt="" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='mt-[80px]'>
                        <h2 className='md:text-[45px] sm:text-[30px] text-[24px] leading-[1.2] font-bold mb-4'>Project Description</h2>
                        <p className='text-[16px] text-[#dddddd] mb-4'>The goal is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='text-[16px] text-[#dddddd] '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                    <div className='mt-10 flex lg:flex-nowrap flex-wrap gap-5'>
                        <div className=''>
                            <h1 className='w-[220px] text-[24px] text-white leading-[1.2] font-bold'>THE STORY</h1>
                        </div>
                        <div className=''>
                        <p className='text-[16px] text-[#dddddd] '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>
                    <div className='mt-7 flex lg:flex-nowrap flex-wrap gap-5'>
                        <div className=''>
                            <h1 className='w-[220px] text-[24px] text-white leading-[1.2] font-bold'>OUR APPROACH</h1>
                        </div>
                        <div className=''>
                        <p className='text-[16px] text-[#dddddd] '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
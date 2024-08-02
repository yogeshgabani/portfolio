import { Link, useLocation } from 'react-router-dom';
import background from '../../Assets/breadcrumb-bg.webp';
import blog_one from '../../Assets/blog-2.webp';
import blog_two from '../../Assets/blog-3.webp';
import blog_three from '../../Assets/blog-41.webp';
import blogrec_one from '../../Assets/blog-0-150x150.webp';
import blogrec_two from '../../Assets/blog-1-150x150.webp';
import blogrec_three from '../../Assets/blog-2-150x150.webp';
import { FaCalendarDays } from 'react-icons/fa6';
import { PiChatsCircle } from 'react-icons/pi';
import { FaRegUser, FaSearch } from 'react-icons/fa';
import '../Blogs/Blog.css'
import WOW from 'wowjs';
import { useEffect } from 'react';

export default function BlogMain() {
    const title = "The Role of Technology in Modern Logistics Management";

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        new WOW.WOW().init();
      }, []);
    return (
        <>
            <div className="portfoliomain bg-cover bg-no-repeat bg-center  md:min-h-[350px] min-h-[200px] md:pt-[100px] pt-[50px] relative z-[1] after:absolute after:content-[''] after:top-0 after:z-[-1] after:left-0 after:w-full after:h-full after:bg-[#140c1cb3]" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1 className='text-[50px] leading-[1.2] text-white text-center font-bold'>Blog</h1>
                    <h5 className='text-[16px] font-normal text-white mt-4 text-center'>
                        <Link to='/'><a className='hover:underline' href="#">Home</a>&nbsp;&nbsp;&gt;&nbsp;</Link>
                        <span>Blog</span></h5>
                </div>
            </div>
            <div className='bg-[#0F0715] md:py-[120px] sm:py-[70px] py-[50px]'>
                <div className='container mx-auto xl:px-10 lg:px-0 md:px-3 px-2'>
                    <div className='grid md:grid-cols-4 grid-cols-1 lg:gap-6 gap-2'>
                        <div className='col-span-3 wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                            <div className=' bg-[#140c1c]  blog-one  relative rounded-t-[15px] mx-auto overflow-hidden transition-all duration-500 ease-out delay-0'>
                                <img className='rounded-t-[15px] transition-all duration-700 ease-in-out delay-0 hover:scale-110' src={blog_three} alt="" />
                                <a className='category absolute top-4 left-4' href="#">Design</a>
                            </div>
                            <div className='blog-content z-[1] bg-[#140c1c] sm:p-7 p-2 group-hover:after:opacity-100'>
                                <div className='mb-5'>
                                    <ul className='flex items-center sm:flex-nowrap flex-wrap sm:gap-4 gap-2'>
                                        <li className='xl:text-[16px] text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium hover:text-[#8750f7]'><FaRegUser className='me-1 text-[#8750f7]' />By Gerold</li>
                                        <li className='xl:text-[16px] text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium '><FaCalendarDays className='me-1 text-[#8750f7]' />May 10, 2024</li>
                                        <li className='xl:text-[16px] text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium hover:text-[#8750f7]'><PiChatsCircle className='text-[18px] me-1 text-[#8750f7]' />No Comments</li>
                                    </ul>
                                </div>
                                <div className='blog-title'>
                                    <Link to={`/blog/${encodeURIComponent(title)}`}><h4 className='sm:text-[30px] text-[18px] text-white font-semibold leading-[1.3] transition-all duration-500 ease-in-out delay-0 capitalize'><a href="#">{title}</a></h4></Link>
                                    <p className='text-[16px] text-[#dddddd] mt-5'>Explore the transformative impact of technology on logistics management. Discuss how technologies like IoT, AI, and blockchain are reshaping the industry and improving efficiency.</p>
                                    <button className='hire-btn text-[15px] font-bold rounded-[50px] sm:mt-8 mt-4 sm:px-[35px] px-6 sm:py-[17px] py-[10px] transition-all duration-300 flex items-center gap-2'>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#140c1c] py-[30px] px-[25px] mb-[30px] flex rounded-[8px] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                                <input id='' className='bg-[#050709] border-[1px] border-solid rounded-r-none border-[#22272c] text-white text-[16px] w-full leading-[1.5] py-[14px] px-5 rounded-[8px] outline-0 transition-all duration-300 ease-out delay-0 focus:border-[#8750f7] placeholder:text-[#dddddd]' type="text" placeholder='search...' />
                                <button className='bg-[#8750f7] text-[20px] text-white min-w-[60px] flex justify-center items-center transition-all duration-300 ease-in-out delay-0 rounded-r-[5px] hover:bg-[#2a1454]'><FaSearch /></button>
                            </div>
                            <div className='bg-[#140c1c] py-[30px] px-[25px] mb-[30px] rounded-[8px] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">
                                <h4 className='uppercase text-[20px] mb-6 tracking-[0.6px] font-bold'>Categories</h4>
                                <ul>
                                    <li className='mb-5 flex justify-between items-center gap-3 text-[#8750f7] text-[16px]'>
                                        <a className=' text-[#dddddd] transition-all duration-300 ease-in-out delay-0 hover:text-[#8750f7]' href="#">Analysis</a>(1)
                                    </li>
                                    <li className='mb-5 flex justify-between items-center gap-3 text-[#8750f7] text-[16px]'>
                                        <a className=' text-[#dddddd] transition-all duration-300 ease-in-out delay-0 hover:text-[#8750f7]' href="#">Design</a>(1)
                                    </li>
                                    <li className='mb-5 flex justify-between items-center gap-3 text-[#8750f7] text-[16px]'>
                                        <a className=' text-[#dddddd] transition-all duration-300 ease-in-out delay-0 hover:text-[#8750f7]' href="#">Portfolio</a>(4)
                                    </li>
                                    <li className='mb-5 flex justify-between items-center gap-3 text-[#8750f7] text-[16px]'>
                                        <a className=' text-[#dddddd] transition-all duration-300 ease-in-out delay-0 hover:text-[#8750f7]' href="#">Developement</a>(2)
                                    </li>
                                </ul>

                            </div>
                            <div className='bg-[#140c1c] py-[30px] lg:px-[25px] px-[15px] mb-[30px] rounded-[8px] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.5s">
                                <h4 className='uppercase text-[20px] mb-6 tracking-[0.6px] font-bold'>Recent post</h4>
                                <div className='flex lg:flex-nowrap flex-wrap gap-2 mb-4'>
                                    <div className='max-w-[80px] max-h-[80px]'>
                                        <img className='' src={blogrec_one} alt="" />
                                    </div>
                                    <div>
                                        <ul className='flex items-center gap-2 mb-1'>
                                            <li className=' text-[12px]  text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 '><FaCalendarDays className='me-1 text-[#8750f7]' />May 10, 2024</li>
                                            <li className=' text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 hover:text-[#8750f7]'><PiChatsCircle className='text-[18px] me-1 text-[#8750f7]' />(0)</li>
                                        </ul>
                                        <h4 className='text-[16px] text-white font-semibold leading-[1.2] transition-all duration-500 ease-in-out delay-0 capitalize hover:text-[#8750f7]'>Want To Upgrade Your Brain? Stop...</h4>
                                    </div>
                                </div>
                                <div className='flex lg:flex-nowrap flex-wrap gap-2 mb-4'>
                                    <div className='max-w-[80px] max-h-[80px]'>
                                        <img className='' src={blogrec_two} alt="" />
                                    </div>
                                    <div>
                                        <ul className='flex items-center gap-2 mb-1'>
                                            <li className=' text-[12px]  text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 '><FaCalendarDays className='me-1 text-[#8750f7]' />May 10, 2024</li>
                                            <li className=' text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 hover:text-[#8750f7]'><PiChatsCircle className='text-[18px] me-1 text-[#8750f7]' />(0)</li>
                                        </ul>
                                        <h4 className='text-[16px] text-white font-semibold leading-[1.2] transition-all duration-500 ease-in-out delay-0 capitalize hover:text-[#8750f7]'>The Role of Technology in Modern...</h4>
                                    </div>
                                </div>
                                <div className='flex lg:flex-nowrap flex-wrap gap-2 mb-4'>
                                    <div className='max-w-[80px] max-h-[80px]'>
                                        <img className='' src={blogrec_three} alt="" />
                                    </div>
                                    <div>
                                        <ul className='flex items-center gap-2 mb-1'>
                                            <li className=' text-[12px]  text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 '><FaCalendarDays className='me-1 text-[#8750f7]' />May 10, 2024</li>
                                            <li className=' text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 hover:text-[#8750f7]'><PiChatsCircle className='text-[18px] me-1 text-[#8750f7]' />(0)</li>
                                        </ul>
                                        <h4 className='text-[16px] text-white font-semibold leading-[1.2] transition-all duration-500 ease-in-out delay-0 capitalize hover:text-[#8750f7]'>Digital Marketo to Their New Office.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#140c1c] py-[30px] px-[25px] mb-[30px] rounded-[8px] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.6s">
                                <h4 className='uppercase text-[20px] mb-6 tracking-[0.6px] font-bold'>Popular tag</h4>
                                <ul className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3 grid-cols-1 gap-4'>
                                    <li className='text-[16px] border-[1px] border-[#747779] border-solid py-[10px] px-[15px] rounded-[50px] transition-all duration-300 cursor-pointer  ease-in-out delay-0 hover:bg-[#8750f7] hover:border-[#8750f7] hover:text-white'>Analysis</li>
                                    <li className='text-[16px] border-[1px] border-[#747779] border-solid py-[10px] px-[15px] rounded-[50px] transition-all duration-300 cursor-pointer  ease-in-out delay-0 hover:bg-[#8750f7] hover:border-[#8750f7] hover:text-white'>Business</li>
                                    <li className='text-[16px] border-[1px] border-[#747779] border-solid py-[10px] px-[15px] rounded-[50px] transition-all duration-300 cursor-pointer  ease-in-out delay-0 hover:bg-[#8750f7] hover:border-[#8750f7] hover:text-white'>Design</li>
                                    <li className='text-[16px] border-[1px] border-[#747779] border-solid py-[10px] px-[15px] rounded-[50px] transition-all duration-300 cursor-pointer  ease-in-out delay-0 hover:bg-[#8750f7] hover:border-[#8750f7] hover:text-white'>Development</li>
                                    <li className='text-[16px] border-[1px] border-[#747779] border-solid py-[10px] px-[15px] rounded-[50px] transition-all duration-300 cursor-pointer  ease-in-out delay-0 hover:bg-[#8750f7] hover:border-[#8750f7] hover:text-white'>Technology</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
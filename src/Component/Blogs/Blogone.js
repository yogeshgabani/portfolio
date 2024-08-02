import { Link, useLocation, useParams } from "react-router-dom";
import background from '../../Assets/breadcrumb-bg.webp';
import { FaCheckCircle, FaRegUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { PiChatsCircle } from "react-icons/pi";
import blog_three from '../../Assets/blog-41.webp';
import { useEffect } from "react";
import WOW from 'wowjs';



export default function Blogone() {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
    const { name } = useParams();
    useEffect(() => {
        new WOW.WOW().init();
      }, []);
    return (
        <>
            <div className="portfoliomain bg-cover bg-no-repeat bg-center md:min-h-[350px] min-h-[200px] md:pt-[100px] pt-[50px] relative z-[1] after:absolute after:content-[''] after:top-0 after:z-[-1] after:left-0 after:w-full after:h-full after:bg-[#140c1cb3]" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1 className='sm:text-[50px] text-[30px] leading-[1.2] text-white text-center font-bold'>{decodeURIComponent(name)}</h1>
                    <h5 className='text-[16px] flex justify-center items-center font-normal text-white mt-4 text-center'>
                        <Link to='/'><a className='hover:underline' href="#">Home</a></Link>&nbsp;&nbsp;&gt;
                        <Link to='/blog'>&nbsp;&nbsp;<a className='hover:underline' href='#'>Blog </a>&nbsp;&gt;</Link>
                        <span className="w-[200px] inline-block whitespace-nowrap overflow-hidden text-ellipsis" href='#'>&nbsp;&nbsp;{decodeURIComponent(name)}</span></h5>
                </div>
            </div>
            <div className="bg-[#0F0715] md:py-[120px] sm:py-[70px] py-[50px]">

                <div className='container mx-auto xl:px-10 lg:px-0 md:px-3 px-2 wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className=' bg-[#140c1c]  blog-one  relative rounded-t-[15px] mx-auto overflow-hidden transition-all duration-500 ease-out delay-0'>
                        <img className='rounded-t-[15px] transition-all duration-700 ease-in-out delay-0 hover:scale-110' src={blog_three} alt="" />
                        <a className='category absolute top-4 left-4' href="#">Design</a>
                    </div>
                    <div className='blog-content z-[1]  sm:p-7 p-2 group-hover:after:opacity-100'>
                        <div className='mb-5'>
                            <ul className='flex items-center sm:flex-nowrap flex-wrap sm:gap-4 gap-2'>
                                <li className='xl:text-[16px] text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium hover:text-[#8750f7]'><FaRegUser className='me-1 text-[#8750f7]' />By Gerold</li>
                                <li className='xl:text-[16px] text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium '><FaCalendarDays className='me-1 text-[#8750f7]' />May 10, 2024</li>
                                <li className='xl:text-[16px] text-[12px] text-white flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium hover:text-[#8750f7]'><PiChatsCircle className='text-[18px] me-1 text-[#8750f7]' />No Comments</li>
                            </ul>
                        </div>
                        <div className='blog-title'>
                            <p className='text-[16px] text-[#dddddd] mt-5'>Explore the transformative impact of technology on logistics management. Discuss how technologies like IoT, AI, and blockchain are reshaping the industry and improving efficiency.</p>
                            <p className='text-[16px] text-[#dddddd] mt-5'>Welcome to our blog, where we celebrate our achievement as an AWS SaaS Competency Partner and share insights on how we accomplished this significant milestone.</p>
                            <p className='text-[16px] text-[#dddddd] mt-5'>As businesses unlock growth opportunities in the digital age, harnessing the power of cloud computing has become essential. Amazon Web Services (AWS) offers the AWS SaaS Competency Partner program, recognizing companies with exceptional expertise in delivering Software-as-a-Service solutions on the AWS platform.</p>
                            <p className='text-[16px] text-[#dddddd] mt-5'>In this blog, we will delve into the strategies, best practices, and key factors that accelerated our business growth and earned us the prestigious AWS SaaS Competency Partner status.</p>
                        </div>
                    </div>
                    <div className="mt-6 p-10 bg-[#140c1c] rounded-[3px]">
                        <p className="text-[16px] text-[#dddddd]">“Welcome to our blog, where we celebrate our achievement as an AWS SaaS Competency Partner and share insights on how we accomplished this significant milestone. As businesses unlock growth opportunities in the digital age, harnessing the power of cloud computing has become essential. Amazon Web Services (AWS) offers the AWS SaaS Competency.”</p>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-[24px] font-bold leading-[1.2]">The Role of Technology in Modern Logistics Management</h4>
                        <p className='text-[16px] text-[#dddddd] mt-5'>Explore the transformative impact of technology on logistics management. Discuss how technologies like IoT, AI, and blockchain are reshaping the industry and improving efficiency.</p>
                        <p className='text-[16px] text-[#dddddd] mt-5'>Welcome to our blog, where we celebrate our achievement as an AWS SaaS Competency Partner and share insights on how we accomplished this significant milestone.</p>
                        <p className='text-[16px] text-[#dddddd] mt-5'>As businesses unlock growth opportunities in the digital age, harnessing the power of cloud computing has become essential. Amazon Web Services (AWS) offers the AWS SaaS Competency Partner program, recognizing companies with exceptional expertise in delivering Software-as-a-Service solutions on the AWS platform.</p>
                        <p className='text-[16px] text-[#dddddd] mt-5'>In this blog, we will delve into the strategies, best practices, and key factors that accelerated our business growth and earned us the prestigious AWS SaaS Competency Partner status.</p>
                        <h6 className="text-[18px] font-bold my-4">Key Points</h6>
                        <ul>
                            <li className="mb-3 text-[16px] flex items-center text-[#dddddd]"><FaCheckCircle className="me-2 text-[#8750f7]" />IoT and Real-Time Tracking</li>
                            <li className="mb-3 text-[16px] flex items-center text-[#dddddd]"><FaCheckCircle className="me-2 text-[#8750f7]" />Artificial Intelligence in Route Optimization and Predictive Analytics</li>
                            <li className="mb-3 text-[16px] flex items-center text-[#dddddd]"><FaCheckCircle className="me-2 text-[#8750f7]" />Blockchain for Enhanced Transparency and Security</li>
                            <li className="mb-3 text-[16px] flex items-center text-[#dddddd]"><FaCheckCircle className="me-2 text-[#8750f7]" />Warehouse Automation and Robotics</li>
                        </ul>
                        <h4 className="text-[24px] my-5 font-bold leading-[1.2]">Conclusion</h4>
                        <p className='text-[16px] text-[#dddddd] mt-5'>Emphasize the long-term benefits of integrating sustainable practices into logistics operations, both for the planet and a company’s reputation.</p>
                        <p className='text-[16px] text-[#dddddd] mt-5'>These outlines can be expanded into comprehensive blog posts, each providing valuable insights and information on the respective topics.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
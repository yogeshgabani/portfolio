import { CgSoftwareDownload } from 'react-icons/cg';
import '../Home/Home.css';
import profileimg from '../../Assets/hero_img.webp'
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from 'react';
import CountUpAnimation from '../Counter';
import { GoArrowUpRight } from 'react-icons/go';
import recomand from '../../Assets/recommendation.png';
import education from '../../Assets/mortarboard.png';
import html from '../../Assets/HTML5.png';
import css from '../../Assets/CSS3.png';
import bootstrap from '../../Assets/Bootstrap.png';
import js from '../../Assets/js.webp';
import react from '../../Assets/react.webp';
import node from '../../Assets/Nodejs.png';
import clientlogo from '../../Assets/testi-logo-1.webp';
import clientimage from '../../Assets/testi-1.webp';
import blog_one from '../../Assets/blog-2.webp';
import blog_two from '../../Assets/blog-3.webp';
import blog_three from '../../Assets/blog-4.webp';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { FaCalendarDays, FaXTwitter } from 'react-icons/fa6';
import { PiChatsCircle } from 'react-icons/pi';
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import cv_download from '../../CV/Vinit_Mepani_CV.pdf';
import Portfolio from '../Portfolio/Portfolio';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css';
import WOW from 'wowjs';
import emailjs from '@emailjs/browser';


export default function Home() {
    const title = "The Role of Technology in Modern Logistics Management";


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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






    // form validation
    const [firstName, setFirstName] = useState('') // useState to store First Name
    const [lastName, setLastName] = useState('') // useState to store Last Name
    const [email, setEmail] = useState('') // useState to store Email address of the user
    const [mobile, setMobile] = useState('') // useState to store Mobile Number
    const [select, setselect] = useState('') // useState to store select
    const [message, setmessage] = useState('') // useState to store message
    const [errors, setErrors] = useState({}); //show require this field error
    const [formMessage, setFormMessage] = useState(''); //show submit successfull message

    const validate = () => {
        let formErrors = {};

        if (!firstName.trim()) formErrors.firstName = 'First name is required';
        if (!lastName.trim()) formErrors.lastName = 'Last name is required';
        if (!email) formErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email address is invalid';
        if (!mobile) formErrors.mobile = 'Phone number is required';
        else if (!/^\d{10}$/.test(mobile)) formErrors.mobile = 'Phone number is invalid';
        if (!select) formErrors.select = 'Please select an option';
        if (!message.trim()) formErrors.message = 'Message is required';

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const submitData = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log({
                firstName,
                lastName,
                email,
                mobile,
                select,
                message,
            });
            emailjs
            .sendForm('service_128dfgu', 'template_kgtq9t3', form.current, {
              publicKey: 'G4hbCYylmLGZ35HuS',
            })
            .then(
              (result) => {
                console.log(result.text)
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
            setFirstName('');
            setLastName('');
            setEmail('');
            setMobile('');
            setselect('');
            setmessage('');
            setErrors({});

            // Set the success message
            setFormMessage('Thank you for your message. It has been sent.');
            console.log(formMessage)
        }
    };

    useEffect(() => {
        if (formMessage) {
            const timer = setTimeout(() => {
                setFormMessage('');
            }, 5000); // Hide after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [formMessage]);

    useEffect(() => {
        new WOW.WOW().init();
      }, []);
      const form = useRef();
      

    return (
        <>
            {/* main page info */}
            <div className="bg-[#0f0715] sm:py-[100px] py-[50px] section-one relative before:absolute before:contents-[''] before:top-0 before:right-0 before:w-[322px] before:h-[308px] before:rounded-full before:bg-[#8750f7] wow fadeInOut" data-wow-duration="2s" data-wow-delay="0.5s" id='home'>
                <div className="container mx-auto sm:px-10 px-[15px]">
                    <div className='grid md:grid-cols-2 grid-cols-1 relative'>
                        <div className='z-[1] lg:mb-0 mb-10'>
                            <h2 className='lg:text-[36px] sm:text-[25px] text-[22px] font-bold md:mb-[20px] mb-2'>I am Yogesh Gabani</h2>
                            <h1 className='lg:text-[65px] text-[30px] max-w-[580px] title font-bold leading-[1.2] mb-[15px]'>Web Developer + Web Designer</h1>
                            <div className='md:max-w-[440px] max-w-[80%] relative profile-photo w-full md:my-8 my-4 md:hidden block m-auto z-[1]'>
                                <img className='rounded-[38px] border-[2px] border-solid border-[#2a1454]' src={profileimg} alt="" />
                            </div>
                            <p className='max-w-[550px] text-[20px] w-full font-normal '>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                            <div className='mt-12 flex md:justify-start justify-center items-center lg:flex-nowrap flex-wrap gap-6'>
                                <div className='group'>
                                    <a href={cv_download} download="Vinit_Mepani_CV.pdf"><button className='text-[#8750f7] flex items-center justify-center text-[15px] font-medium py-[17px] px-[35px] transition-all duration-300 leading-[1] rounded-[50px] border-[1px] border-[#8750f7] border-[solid] tracking-[1px] group-hover:bg-[#8750f7] group-hover:text-white'>Download CV<CgSoftwareDownload className='text-[#8750f7] ms-2 text-[20px] transition-all duration-300 group-hover:text-white' />

                                    </button> </a>
                                </div>
                                {/* social media link */}
                                <div className='social-icon'>
                                    <ul className='flex  items-center gap-5'>
                                        <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                            <a href="https://www.facebook.com/yogeshgabani1" target='_blank'><FaFacebookF className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                        </li>
                                        <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                            <a href="https://www.linkedin.com/in/gabaniyogesh" target='_blank'><FaLinkedinIn className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                        </li>
                                        <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                            <a href="https://x.com/gabaniyogesh" target='_blank'><FaXTwitter className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                        </li>
                                        <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                            <a href="https://www.instagram.com/gabaniyogesh" target='_blank'><FaInstagramSquare className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                        </li>
                                        <li className='w-[35px] h-[35px] cursor-pointer relative flex items-center justify-center rounded-full border-[1px] border-solid border-[#8750f7]'>
                                            <a href="https://github.com/yogeshgabani" target='_blank'><FaGithub className='text-[#8750f7] text-[17px] icon-sm transition-all duration-300' /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='max-w-[440px] relative profile-photo w-full md:block hidden m-auto z-[1]'>
                                <img className='rounded-[38px] border-[2px] border-solid border-[#2a1454]' src={profileimg} alt="" />
                            </div>
                        </div>
                        <div className='absolute hi-title top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                            <text className='hi-text'>HI</text>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 sm:pt-[100px] pt-[50px]'>
                        <div>
                            <CountUpAnimation
                                initialValue={0}
                                targetValue={4}
                                text="Years of"
                                subtext="Experience"
                            />
                        </div>
                        <div>
                            <CountUpAnimation
                                initialValue={0}
                                targetValue={8}
                                index="+"
                                text="Project"
                                subtext="Completed"
                            />
                        </div>
                        <div>
                            <CountUpAnimation
                                initialValue={0}
                                targetValue={15}
                                index="+"
                                text="Happy"
                                subtext="Clients"
                            />
                        </div>
                        <div>
                            <CountUpAnimation
                                initialValue={0}
                                targetValue={2}
                                text="Years of"
                                subtext="Experience"
                            />
                        </div>



                    </div>
                </div>
            </div>

            {/* quality services */}
            <div className='bg-[#050709] md:py-[120px] sm:py-[70px] py-[50px] ' id='services'>
                <div className='max-w-[660px] w-full sm:px-0 px-2 text-center m-auto'>
                    <h1 className='md:text-[45px] text-[30px] section-title leading-[1.2]  mb-4 font-bold wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">My Quality Services</h1>
                    <p className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
                <div className='container mx-auto xl:px-10 px-0 mt-[50px] relative'>
                    <Link to='/services/branding-design'><div className='group flex active-bg lg:flex-row flex-col box-one lg:items-center items-start lg:gap-[20px] gap-0 border-b-[1px] border-b-solid border-b-[#2a1454] relative md:px-[30px] px-5 wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                        <div className='flex items-center gap-[20px] xl:py-[30px] py-0 pt-3 lg:w-[calc(40%-10px)] w-full'>
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
                    <Link to='/services/web-design'><div className='group flex active-bg lg:flex-row flex-col box-one lg:items-center items-start lg:gap-[20px] gap-0 border-b-[1px] border-b-solid border-b-[#2a1454] relative md:px-[30px] px-5 wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className='flex items-center gap-[20px] lg:py-[30px] py-0pt-3 lg:w-[calc(40%-10px)] w-full'>
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

            {/* my recent works / portfolio */}
            <div className='bg-[#0F0715] md:py-[120px] sm:py-[70px] py-[50px]' id='works'>
                <Portfolio />
            </div>

            {/* my experience and education */}
            <div className='bg-[#050709] md:py-[100px] sm:py-[70px] py-[50px]' id='resume'>
                <div className='container mx-auto lg:px-10 px-3'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                        {/* my experience */}
                        <div>
                            <div className='md:mb-[50px] mb-6 flex items-center wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                                <img className='w-[45px] h-[45px] text-red me-4' src={recomand} alt="" />
                                <h1 className='md:text-[45px] text-[30px] section-title leading-[1.2] font-bold'>My Experience</h1>
                            </div>
                            <div className='bg-[#140c1c] py-5 px-[30px] rounded-[20px] relative md:mb-8 mb-4 z-10 after:absolute after:content=[""] after:w-full after:h-full after:top-0 after:left-0 after:rounded-[20px] after:z-[-1] edu-box wow animate__fadeInLeft' data-wow-duration="2s" data-wow-delay="0.3s">
                                <h3 className='md:text-[20px] text-[15px] font-extrabold text-[#8750f7] transition-all mb-2 duration-400 ease-in-out delay-0' >2024 - Present</h3>
                                <h1 className='md:text-[25px] text-[18px] uppercase text-white font-bold leading-[1.2] mb-2 transition-all duration-400 ease-in-out delay-0' >Full Stack Developer</h1>
                                <h5 className='text-[16px] text-[#dddddd]' >Surat, Gujarat</h5>
                            </div>
                            <div className='bg-[#140c1c] py-5 px-[30px] rounded-[20px] relative md:mb-8 mb-4 z-10 after:absolute after:content=[""] after:w-full after:h-full after:top-0 after:left-0 after:rounded-[20px] after:z-[-1] edu-box wow animate__fadeInLeft' data-wow-duration="2s" data-wow-delay="0.4s">
                                <h3 className='md:text-[20px] text-[15px] font-extrabold text-[#8750f7] transition-all mb-2 duration-400 ease-in-out delay-0' >2022 - 2024</h3>
                                <h1 className='md:text-[25px] text-[18px] uppercase text-white font-bold leading-[1.2] mb-2 transition-all duration-400 ease-in-out delay-0' >Network engineer</h1>
                                <h5 className='text-[16px] text-[#dddddd]' >Surat, Gujarat</h5>
                            </div>
                            <div className='bg-[#140c1c] py-5 px-[30px] rounded-[20px] relative md:mb-8 mb-4 z-10 after:absolute after:content=[""] after:w-full after:h-full after:top-0 after:left-0 after:rounded-[20px] after:z-[-1] edu-box wow animate__fadeInLeft' data-wow-duration="2s" data-wow-delay="0.5s">
                                <h3 className='md:text-[20px] text-[15px] font-extrabold text-[#8750f7] transition-all mb-2 duration-400 ease-in-out delay-0' >2020 - 2022</h3>
                                <h1 className='md:text-[25px] text-[18px] uppercase text-white font-bold leading-[1.2] mb-2 transition-all duration-400 ease-in-out delay-0' >sr. telecom engineer</h1>
                                <h5 className='text-[16px] text-[#dddddd]' >Surat, Gujarat</h5>
                            </div>
                            <div className='bg-[#140c1c] py-5 px-[30px] rounded-[20px] relative md:mb-8 mb-4 z-10 after:absolute after:content=[""] after:w-full after:h-full after:top-0 after:left-0 after:rounded-[20px] after:z-[-1] edu-box wow animate__fadeInLeft' data-wow-duration="2s" data-wow-delay="0.6s">
                                <h3 className='md:text-[20px] text-[15px] font-extrabold text-[#8750f7] transition-all mb-2 duration-400 ease-in-out delay-0' >2018 - 2022</h3>
                                <h1 className='md:text-[25px] text-[18px] uppercase text-white font-bold leading-[1.2] mb-2 transition-all duration-400 ease-in-out delay-0' >jr. telecom engineer</h1>
                                <h5 className='text-[16px] text-[#dddddd]' >Surat, Gujarat</h5>
                            </div>
                        </div>
                        {/* my education */}
                        <div>
                            <div className='md:mb-[50px] mb-6 flex items-center wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                                <img className='w-[45px] h-[45px] text-red me-4' src={education} alt="" />
                                <h1 className='md:text-[45px] text-[30px] flex items-center section-title leading-[1.2] font-bold'>My Education</h1>
                            </div>
                            <div className='bg-[#140c1c] py-5 px-[30px] rounded-[20px] relative md:mb-8 mb-4 z-10 after:absolute after:content=[""] after:w-full after:h-full after:top-0 after:left-0 after:rounded-[20px] after:z-[-1] edu-box wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0.3s">
                                <h3 className='md:text-[20px] text-[15px] font-extrabold text-[#8750f7] transition-all mb-2 duration-400 ease-in-out delay-0' >2023 - 2024</h3>
                                <h1 className='md:text-[25px] text-[18px] uppercase text-white font-bold leading-[1.2] mb-2 transition-all duration-400 ease-in-out delay-0' >Full Stack Developer course</h1>
                                <h5 className='text-[16px] text-[#dddddd]' >Surat, Gujarat</h5>
                            </div>
                            <div className='bg-[#140c1c] py-5 px-[30px] rounded-[20px] relative md:mb-8 mb-4 z-10 after:absolute after:content=[""] after:w-full after:h-full after:top-0 after:left-0 after:rounded-[20px] after:z-[-1] edu-box wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0.4s">
                                <h3 className='md:text-[20px] text-[15px] font-extrabold text-[#8750f7] transition-all mb-2 duration-400 ease-in-out delay-0' >2014 - 2010</h3>
                                <h1 className='md:text-[25px] text-[18px] uppercase text-white font-bold leading-[1.2] mb-2 transition-all duration-400 ease-in-out delay-0' >b.e.e.c.</h1>
                                <h5 className='text-[16px] text-[#dddddd]' >Surat, Gujarat</h5>
                            </div>
                            <div className='bg-[#140c1c] py-5 px-[30px] rounded-[20px] relative md:mb-8 mb-4 z-10 after:absolute after:content=[""] after:w-full after:h-full after:top-0 after:left-0 after:rounded-[20px] after:z-[-1] edu-box wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0.5s">
                                <h3 className='md:text-[20px] text-[15px] font-extrabold text-[#8750f7] transition-all mb-2 duration-400 ease-in-out delay-0' >2009 - 2010</h3>
                                <h1 className='md:text-[25px] text-[18px] uppercase text-white font-bold leading-[1.2] mb-2 transition-all duration-400 ease-in-out delay-0' >h.s.c.</h1>
                                <h5 className='text-[16px] text-[#dddddd]' >Surat, Gujarat</h5>
                            </div>
                            <div className='bg-[#140c1c] py-5 px-[30px] rounded-[20px] relative md:mb-8 mb-4 z-10 after:absolute after:content=[""] after:w-full after:h-full after:top-0 after:left-0 after:rounded-[20px] after:z-[-1] edu-box wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0.6s">
                                <h3 className='md:text-[20px] text-[15px] font-extrabold text-[#8750f7] transition-all mb-2 duration-400 ease-in-out delay-0' >2007 - 2008</h3>
                                <h1 className='md:text-[25px] text-[18px] uppercase text-white font-bold leading-[1.2] mb-2 transition-all duration-400 ease-in-out delay-0' >s.s.c.</h1>
                                <h5 className='text-[16px] text-[#dddddd]' >Surat, Gujarat</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* my skills */}
            <div className='bg-[#0F0715]  md:py-[100px] sm:py-[70px] py-[50px]' id='skill'>
                <div className='max-w-[660px] w-full text-center m-auto mb-[50px] px-1'>
                    <h1 className='md:text-[45px] text-[30px] section-title leading-[1.2]  mb-4 font-bold wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">My Skills</h1>
                    <p className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
                <div className='container mx-auto md:px-10 px-3'>
                    <div className='grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                        <div className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                            <div className='group bg-[#140c1c] h-[200px] flex justify-center items-center text-center py-10 px-4 mb-4 border-[1px] border-solid border-transparent transition-all duration-500 ease-linear rounded-[25px] hover:bg-[#2a1454] hover:border-[#8750f7]'> 
                                    <img className='max-w-[80px] h-[70px] bg-cover  grayscale-[90%] transition-all duration-300 ease-linear group-hover:grayscale-0 group-hover:scale-[1.1]' src={html} alt="" />
                                {/* <div className='text-[#747779] font-extrabold text-[20px] transition-all duration-[400] ease-in-out delay-0 leading-1 group-hover:text-[#8750f7]'>
                                    90%
                                </div> */}
                            </div>
                            <p className='text-center text-[#8750f7] text-[16px] uppercase'>css</p>
                        </div>
                        <div className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">
                            <div className='group h-[200px] bg-[#140c1c] flex justify-center items-center text-center py-10 px-4 mb-4 border-[1px] border-solid border-transparent transition-all duration-500 ease-linear rounded-[25px] hover:bg-[#2a1454] hover:border-[#8750f7]'>
                                    <img className='max-w-[60px] h-[70px] bg-cover  grayscale-[90%] transition-all duration-300 ease-linear group-hover:grayscale-0 group-hover:scale-[1.1]' src={css} alt="" />
                                {/* <div className='text-[#747779] font-extrabold text-[20px] transition-all duration-[400] ease-in-out delay-0 leading-1 group-hover:text-[#8750f7]'>
                                    92%
                                </div> */}
                            </div>
                            <p className='text-center text-[#8750f7] text-[16px] uppercase'>html</p>
                        </div>
                        <div className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.5s" >
                            <div className='group h-[200px] bg-[#140c1c] flex justify-center items-center text-center py-10 px-4 mb-4 border-[1px] border-solid border-transparent transition-all duration-500 ease-linear rounded-[25px] hover:bg-[#2a1454] hover:border-[#8750f7]'>
                                    <img className='max-w-[75px] h-[70px] bg-cover  grayscale-[90%] transition-all duration-300 ease-linear group-hover:grayscale-0 group-hover:scale-[1.1]' src={bootstrap} alt="" />
                                {/* <div className='text-[#747779] font-extrabold text-[20px] transition-all duration-[400] ease-in-out delay-0 leading-1 group-hover:text-[#8750f7]'>
                                    80%
                                </div> */}
                            </div>
                            <p className='text-center text-[#8750f7] text-[16px] uppercase'>bootstrap</p>
                        </div>
                        <div className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.6s" >
                            <div className='group h-[200px] bg-[#140c1c] flex justify-center items-center text-center py-10 px-4 mb-4 border-[1px] border-solid border-transparent transition-all duration-500 ease-linear rounded-[25px] hover:bg-[#2a1454] hover:border-[#8750f7]'> 
                                    <img className='max-w-[70px] h-[70px] bg-cover  grayscale-[90%] transition-all duration-300 ease-linear group-hover:grayscale-0 group-hover:scale-[1.1]' src={js} alt="" />
                                {/* <div className='text-[#747779] font-extrabold text-[20px] transition-all duration-[400] ease-in-out delay-0 leading-1 group-hover:text-[#8750f7]'>
                                    70%
                                </div> */}
                            </div>
                            <p className='text-center text-[#8750f7] text-[16px] uppercase'>javascript</p>
                        </div>
                        <div className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.7s" >
                            <div className='group h-[200px] bg-[#140c1c] flex justify-center items-center text-center py-10 px-4 mb-4 border-[1px] border-solid border-transparent transition-all duration-500 ease-linear rounded-[25px] hover:bg-[#2a1454] hover:border-[#8750f7]'>
                                    <img className='max-w-[70px] h-[70px] bg-cover  grayscale-[90%] transition-all duration-300 ease-linear group-hover:grayscale-0 group-hover:scale-[1.1]' src={react} alt="" />
                                {/* <div className='text-[#747779] font-extrabold text-[20px] transition-all duration-[400] ease-in-out delay-0 leading-1 group-hover:text-[#8750f7]'>
                                    88%
                                </div> */}
                            </div>
                            <p className='text-center text-[#8750f7] text-[16px] uppercase'>react js</p>
                        </div>
                        <div className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.8s" >
                            <div className='group h-[200px] bg-[#140c1c] flex justify-center items-center text-center py-10 px-4 mb-4 border-[1px] border-solid border-transparent transition-all duration-500 ease-linear rounded-[25px] hover:bg-[#2a1454] hover:border-[#8750f7]'>           
                                    <img className='max-w-[90px] h-[70px] bg-cover  grayscale-[90%] transition-all duration-300 ease-linear group-hover:grayscale-0 group-hover:scale-[1.1]' src={node} alt="" />    
                                {/* <div className='text-[#747779] font-extrabold text-[20px] transition-all duration-[400] ease-in-out delay-0 leading-1 group-hover:text-[#8750f7]'>
                                    72%
                                </div> */}
                            </div>
                            <p className='text-center text-[#8750f7] text-[16px] uppercase'>node js</p>
                        </div>
                        {/* <div >
                            <div className='group h-[200px] bg-[#140c1c] text-center pt-10 px-4 mb-4 pb-[30px] border-[1px] border-solid border-transparent transition-all duration-500 ease-linear rounded-[25px] hover:bg-[#2a1454] hover:border-[#8750f7]'>
                                <div className='mb-[30px] flex justify-center'>
                                    <img className='max-w-[70px] h-[70px] bg-cover  grayscale-[90%] transition-all duration-300 ease-linear group-hover:grayscale-0 group-hover:scale-[1.1]' src={material} alt="" />
                                </div>
                                <div className='text-[#747779] font-extrabold text-[20px] transition-all duration-[400] ease-in-out delay-0 leading-1 group-hover:text-[#8750f7]'>
                                    82%
                                </div>
                            </div>
                            <p className='text-center text-[#8750f7] text-[16px] uppercase'>material ui</p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* client story */}
            <div className='bg-[#050709] md:py-[100px] sm:py-[70px] py-[50px]'>
                <div className='container mx-auto sm:px-10 px-2'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                        <div>
                            <h1 className='md:text-[45px] text-[30px] mb-2 section-title leading-[1.2] font-bold wow animate__fadeInLeft' data-wow-duration="2s" data-wow-delay="0.3s">My Client's Stories</h1>
                            <p className='text-[16px] text-[#dddddd] wow animate__fadeInLeft' data-wow-duration="2s" data-wow-delay="0.4s">Empowering people in new a digital journey with my super services</p>
                        </div>
                        <div className="slider-container wow animate__fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                            <Slider {...settings}>
                                <div>
                                    <div className='bg-[#140c1c] rounded-[15px] p-6 mx-2'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <img src={clientlogo} alt="" />
                                            </div>
                                            <div className='w-[40%] max-w-[120px]'>
                                                <img className='rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[125px]' src={clientimage} alt="" />
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <IoMdArrowDropleft className='text-[#8750f7] text-[60px] ml-[-22px]' />
                                            <IoMdArrowDropright className='text-[#8750f7] text-[60px] ml-[-40px]' />
                                        </div>
                                        <div>
                                            <p className='text-[16px] mb-[50px] text-[#dddddd]'>“Taylor is a professional Designer he really helps my business by providing value to my business.</p>
                                            <h1 className='text-[18px] font-bold mb-[5px] text-white'>Tim Bailey</h1>
                                            <h5 className='text-[15px] text-[#dddddd]'>SEO Specialist, Theme Junction</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='bg-[#140c1c] rounded-[15px] p-6 mx-2'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <img src={clientlogo} alt="" />
                                            </div>
                                            <div className='w-[40%] max-w-[120px]'>
                                                <img className='rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[125px]' src={clientimage} alt="" />
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <IoMdArrowDropleft className='text-[#8750f7] text-[60px] ml-[-22px]' />
                                            <IoMdArrowDropright className='text-[#8750f7] text-[60px] ml-[-40px]' />
                                        </div>
                                        <div>
                                            <p className='text-[16px] mb-[50px] text-[#dddddd]'>“Taylor is a professional Designer he really helps my business by providing value to my business.</p>
                                            <h1 className='text-[18px] font-bold mb-[5px] text-white'>Tim Bailey</h1>
                                            <h5 className='text-[15px] text-[#dddddd]'>SEO Specialist, Theme Junction</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='bg-[#140c1c] rounded-[15px] p-6 mx-2'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <img src={clientlogo} alt="" />
                                            </div>
                                            <div className='w-[40%] max-w-[120px]'>
                                                <img className='rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[125px]' src={clientimage} alt="" />
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <IoMdArrowDropleft className='text-[#8750f7] text-[60px] ml-[-22px]' />
                                            <IoMdArrowDropright className='text-[#8750f7] text-[60px] ml-[-40px]' />
                                        </div>
                                        <div>
                                            <p className='text-[16px] mb-[50px] text-[#dddddd]'>“Taylor is a professional Designer he really helps my business by providing value to my business.</p>
                                            <h1 className='text-[18px] font-bold mb-[5px] text-white'>Tim Bailey</h1>
                                            <h5 className='text-[15px] text-[#dddddd]'>SEO Specialist, Theme Junction</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='bg-[#140c1c] rounded-[15px] p-6 mx-2'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <img src={clientlogo} alt="" />
                                            </div>
                                            <div className='w-[40%] max-w-[120px]'>
                                                <img className='rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[125px]' src={clientimage} alt="" />
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <IoMdArrowDropleft className='text-[#8750f7] text-[60px] ml-[-22px]' />
                                            <IoMdArrowDropright className='text-[#8750f7] text-[60px] ml-[-40px]' />
                                        </div>
                                        <div>
                                            <p className='text-[16px] mb-[50px] text-[#dddddd]'>“Taylor is a professional Designer he really helps my business by providing value to my business.</p>
                                            <h1 className='text-[18px] font-bold mb-[5px] text-white'>Tim Bailey</h1>
                                            <h5 className='text-[15px] text-[#dddddd]'>SEO Specialist, Theme Junction</h5>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                </div>

            </div>

            {/* recent blogs */}
            <div className='bg-[#0F0715]  md:py-[100px] sm:py-[70px] py-[50px]' id='blog'>
                <div className='max-w-[660px] w-full text-center m-auto mb-[50px] px-1'>
                    <h1 className='md:text-[45px] text-[30px] section-title leading-[1.2]  mb-4 font-bold wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">Recent Blogs</h1>
                    <p className=' wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
                <div className='container mx-auto xl:px-10 px-3'>
                    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6'>
                        <div className='group bg-[#140c1c] max-w-[400px] blog-one border-[2px] border-solid border-[#2a1454] relative rounded-[15px] mt-0 mb-7 mx-auto overflow-hidden transition-all duration-500 ease-out delay-0 hover:border-[#8750f7] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                            <img className='rounded-[15px] transition-all duration-700 ease-in-out delay-0 group-hover:scale-110' src={blog_three} alt="" />
                            <a className='category absolute top-4 left-4' href="#">Design</a>
                            <div className='blog-content z-[1] bg-[#2a1454] absolute bottom-4 cursor-pointer left-0 right-0 mx-auto pt-4 pb-5 pr-4 pl-4 w-[calc(100%-20px)] rounded-[15px] group-hover:after:opacity-100'>
                                <div className='mb-2'>
                                    <ul className='flex items-center gap-4'>
                                        <li className='xl:text-[14px] text-[12px] text-[#8750f7] flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium group-hover:text-[#dddddd]'><FaCalendarDays className='me-1' />May 10, 2024</li>
                                        <li className='xl:text-[14px] text-[12px] text-[#8750f7] flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium group-hover:text-[#dddddd]'><PiChatsCircle className='text-[18px] me-1' />No Comments</li>
                                    </ul>
                                </div>
                                <div>
                                    <Link to={`/blog/${encodeURIComponent(title)}`}><h4 className='text-[20px] text-white font-semibold leading-[1.2] transition-all duration-500 ease-in-out delay-0 capitalize'>The Role of Technology in Modern...</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className='group bg-[#140c1c] blog-one border-[2px] border-solid border-[#2a1454] relative rounded-[15px] mt-0 mb-7 mx-auto overflow-hidden transition-all duration-500 ease-out delay-0 hover:border-[#8750f7] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">
                            <img className='rounded-[15px] transition-all duration-700 ease-in-out delay-0 group-hover:scale-110' src={blog_two} alt="" />
                            <a className='category absolute top-4 left-4' href="#">Design</a>
                            <div className='blog-content z-[1] bg-[#2a1454] absolute bottom-4 cursor-pointer left-0 right-0 mx-auto pt-4 pb-5 pr-4 pl-4 w-[calc(100%-20px)] rounded-[15px] group-hover:after:opacity-100'>
                                <div className='mb-2'>
                                    <ul className='flex items-center gap-4'>
                                        <li className='xl:text-[14px] text-[12px] text-[#8750f7] flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium group-hover:text-[#dddddd]'><FaCalendarDays className='me-1' />May 10, 2024</li>
                                        <li className='xl:text-[14px] text-[12px] text-[#8750f7] flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium group-hover:text-[#dddddd]'><PiChatsCircle className='text-[18px] me-1' />No Comments</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className='text-[20px] text-white font-semibold leading-[1.2] transition-all duration-500 ease-in-out delay-0 capitalize'>The services provide for design</h4>
                                </div>
                            </div>
                        </div>
                        <div className='group bg-[#140c1c] blog-one border-[2px] border-solid border-[#2a1454] relative rounded-[15px] mt-0 mb-7 mx-auto overflow-hidden transition-all duration-500 ease-out delay-0 hover:border-[#8750f7] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.5s">
                            <img className='rounded-[15px] transition-all duration-700 ease-in-out delay-0 group-hover:scale-110' src={blog_one} alt="" />
                            <a className='category absolute top-4 left-4' href="#">Design</a>
                            <div className='blog-content z-[1] bg-[#2a1454] absolute bottom-4 cursor-pointer left-0 right-0 mx-auto pt-4 pb-5 pr-4 pl-4 w-[calc(100%-20px)] rounded-[15px] group-hover:after:opacity-100'>
                                <div className='mb-2'>
                                    <ul className='flex items-center gap-4'>
                                        <li className='xl:text-[14px] text-[12px] text-[#8750f7] flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium group-hover:text-[#dddddd]'><FaCalendarDays className='me-1' />May 10, 2024</li>
                                        <li className='xl:text-[14px] text-[12px] text-[#8750f7] flex items-center gap-1 transition-all duration-500 ease-in-out delay-0 font-medium group-hover:text-[#dddddd]'><PiChatsCircle className='text-[18px] me-1' />No Comments</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className='text-[20px] text-white font-semibold leading-[1.2] transition-all duration-500 ease-in-out delay-0 capitalize'>digital markets to their new office.</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* contact us & lets work together */}
            <div className='bg-[#050709] md:py-[100px] sm:py-[70px] py-[50px]' id='contacts'>
                <div className='container mx-auto xl:px-10 px-3'>
                    <div className='flex justify-between items-center md:flex-nowrap flex-wrap gap-[30px]'>
                        <div className='bg-[#140c1c] rounded-[12px] lg:p-10 p-4'>
                            <div className='max-w-[660px] w-full m-auto mb-[50px] px-1'>
                                <h1 className='md:text-[45px] text-[30px] section-title leading-[1.2]  mb-4 font-bold wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">Let’s work together!</h1>
                                <p className=' wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                            </div>
                            <div>
                                <form ref={form} action="" onSubmit={submitData}>
                                    <div className='flex sm:flex-nowrap flex-wrap gap-5'>
                                        <div className='w-full'>
                                            <input id='firstname' name='firstname' className='bg-[#050709] border-[1px] border-solid border-[#22272c] text-white text-[16px] w-full leading-[1.5] py-[14px] px-5 rounded-[8px] outline-0 transition-all duration-300 ease-out delay-0 focus:border-[#8750f7] placeholder:text-[#dddddd]' type="text" value={firstName} placeholder='First name' onChange={(e) => setFirstName(e.target.value)} />
                                            {errors.firstName && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.firstName}</span>}
                                        </div>
                                        <div className='w-full'>
                                            <input id='lastname' name='lastname' className='bg-[#050709] border-[1px] border-solid border-[#22272c] text-white text-[16px] w-full leading-[1.5] py-[14px] px-5 rounded-[8px] outline-0 transition-all duration-300 ease-out delay-0 focus:border-[#8750f7] placeholder:text-[#dddddd]' type="text" value={lastName} placeholder='Last name' onChange={(e) => setLastName(e.target.value)} />
                                            {errors.lastName && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.lastName}</span>}

                                        </div>
                                    </div>
                                    <div className='flex sm:flex-nowrap flex-wrap gap-5 mt-5'>
                                        <div className='w-full'>
                                            <input id='email' name='email' className='bg-[#050709] border-[1px] border-solid border-[#22272c] text-white text-[16px] w-full leading-[1.5] py-[14px] px-5 rounded-[8px] outline-0 transition-all duration-300 ease-out delay-0 focus:border-[#8750f7] placeholder:text-[#dddddd]' type="email" value={email} placeholder='Email address' onChange={(e) => setEmail(e.target.value)} />
                                            {errors.email && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.email}</span>}
                                        </div>
                                        <div className='w-full'>
                                            <input id='number' name='number' className='bg-[#050709] border-[1px] border-solid border-[#22272c] text-white text-[16px] w-full leading-[1.5] py-[14px] px-5 rounded-[8px] outline-0 transition-all duration-300 ease-out delay-0 focus:border-[#8750f7] placeholder:text-[#dddddd]' type="number" value={mobile} placeholder='Phone number' onChange={(e) => setMobile(e.target.value)} />
                                            {errors.mobile && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.mobile}</span>}
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <select name="select" id="" value={select} className='w-full  bg-[#050709] py-[14px] px-5 border-[1px] border-solid border-[#22272c] rounded-[8px] focus-visible:border-[#8750f7] focus:outline-none' onChange={(e) => setselect(e.target.value)}>
                                            <option value="">Please Select Option</option>
                                            <option value="Branding">Branding</option>
                                            <option value="Web Design">Web Design</option>
                                            <option value="App Design">App Design</option>
                                        </select>
                                        {errors.select && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.select}</span>}
                                        <textarea value={message} name='message' className='bg-[#050709] mt-5 py-[14px] px-5 border-[1px] border-solid border-[#22272c] rounded-[8px] text-[16px] resize-none focus:border-[#8750f7] w-full focus:outline-none' placeholder='Message' id="" rows={5} cols={40} onChange={(e) => setmessage(e.target.value)}></textarea>
                                        {errors.message && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.message}</span>}

                                    </div>
                                    <div className='mt-4'>
                                        <button type='submit' value='send' className='hire-btn text-[15px] font-bold rounded-[50px]  sm:px-[30px] sm:py-4 px-5 py-3 transition-all duration-300'>Send Message</button>
                                    </div>
                                    {formMessage &&
                                        <div className='mt-8 border-[2px] py-[4px] px-4 text-[#dddddd] text-[16px] border-solid border-[#46b450]'>{formMessage}</div>}
                                </form>
                            </div>
                        </div>
                        <div className='lg:w-[40%] w-full'>
                            <ul className=''>
                                <li className='flex items-center mb-8 wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className='sm:me-8 me-3 w-[50px] h-[50px] bg-blue rounded-full flex justify-center items-center'>
                                        <MdOutlinePhoneInTalk className='text-[24px]' />
                                    </div>
                                    <div>
                                        <p className='text-[16px] text-[#dddddd] mb-1'>Phone</p>
                                        <a href="tel:+91-800-069-5423" className='sm:text-[20px] text-[16px] font-medium text-white transition-all duration-500 ease-out delay-0 hover:text-[#8750f7]'>+91 8000 69 54 23</a>
                                    </div>
                                </li>
                                <li className='flex items-center mb-8 wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div className='sm:me-8 me-3 min-w-[50px] h-[50px] bg-blue rounded-full flex justify-center items-center'>
                                        <MdOutlineMailOutline className='text-[24px]' />
                                    </div>
                                    <div>
                                        <p className='text-[16px] text-[#dddddd] mb-1'>Email</p>
                                        <a href='mailto:gabaniyogesh@gmail.com' className='sm:text-[20px] text-[16px] font-medium text-white transition-all duration-500 ease-out delay-0 hover:text-[#8750f7]'>gabaniyogesh@gmail.com</a>
                                    </div>
                                </li>
                                <li className='flex items-center mb-8 wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0.5s">
                                    <div className='sm:me-8 me-3 w-[50px] h-[50px] bg-blue rounded-full flex justify-center items-center'>
                                        <IoLocationOutline className='text-[24px]' />
                                    </div>
                                    <div>
                                        <p className='text-[16px] text-[#dddddd] mb-1'>Address</p>
                                        <h4 className='sm:text-[20px] text-[16px] font-medium text-white transition-all duration-500 ease-out delay-0 hover:text-[#8750f7]'>Katargam, Surat.</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
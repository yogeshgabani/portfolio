import { Link, useLocation } from 'react-router-dom';
import background from '../../Assets/breadcrumb-bg.webp';
import service_img from '../../Assets/service-img.webp';
import { FaCheck } from 'react-icons/fa';
import { SiAffinitydesigner, SiWebmoney } from 'react-icons/si';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import WOW from 'wowjs';
import emailjs from '@emailjs/browser'

export default function ServiceOne() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    // form validation
    const [firstName, setFirstName] = useState('') // useState to store First Name
    const [email, setEmail] = useState('') // useState to store Email address of the user
    const [message, setmessage] = useState('') // useState to store message
    const [errors, setErrors] = useState({}); //show require this field error
    const [formMessage, setFormMessage] = useState(''); //show submit successfull message

    const validate = () => {
        let formErrors = {};

        if (!firstName.trim()) formErrors.firstName = 'First name is required';
        if (!email) formErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email address is invalid';
        if (!message.trim()) formErrors.message = 'Message is required';

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };
    const form = useRef();
    const submitData = (e) => {
        e.preventDefault();


        if (validate()) {
            console.log({
                firstName,
                email,
                message,
            });
            emailjs
            .sendForm('service_128dfgu', 'template_m13ys3r', form.current, {
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
            setEmail('');
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

    return (
        <>
            <div className="portfoliomain bg-cover bg-no-repeat bg-center md:min-h-[350px] min-h-[200px] md:pt-[100px] pt-[50px] relative z-[1] after:absolute after:content-[''] after:top-0 after:z-[-1] after:left-0 after:w-full after:h-full after:bg-[#140c1cb3]" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1 className='sm:text-[50px] text-[30px] leading-[1.2] text-white text-center font-bold'>branding design</h1>
                    <h5 className='text-[16px] flex justify-center items-center font-normal text-white mt-4 text-center'>
                        <Link to='/'><a className='hover:underline' href="#">Home</a></Link>&nbsp;&nbsp;&gt;
                        <Link to='/services'>&nbsp;&nbsp;<a className='hover:underline' href='#'>services </a>&nbsp;&gt;</Link>
                        <span className="">&nbsp;&nbsp;branding design</span></h5>
                </div>
            </div>
            <div className='bg-[#050709] py-[100px]'>
                <div className='container mx-auto lg:px-10 md:px-3 px-2'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='col-span-2'>
                            <div className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                                <img src={service_img} alt="" />
                            </div>
                            <div className='mt-8 wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.4s">
                                <h3 className='md:text-[45px] text-[30px] leading-[1.2] font-bold'>Branding Design</h3>
                                <p className='text-[#dddddd] mb-3 text-[16px]'>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.</p>
                                <p className='text-[#dddddd] mb-3 text-[16px]'>Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old mucker starkers Queen’s English dropped a clanger bite your arm spiffing good time burke Why chancer. Hotpot bum bag cracking goal young delinquent naff bugger cup of chars bender loo it’s all gone to pot the nancy cheeky.</p>
                                <p className='text-[#dddddd] mb-3 text-[16px]'>At public school cras bog some dodgy chav Richard Why argy bargy vagabon William bender matie boy, off his nut chancer Jeffrey up the kyver say mufty you mug ummm telling pear shaped Oxford owt to do with me do one so said are you taking his.</p>
                                <h4 className='md:text-[30px] mb-4 text-[20px] leading-[1.2] font-bold'>Services Process</h4>
                                <p className='text-[#dddddd] mb-3 text-[16px]'>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.</p>
                                <ul className='my-4 grid md:grid-cols-2 grid-cols-1'>
                                    <li className='flex items-center mb-2'><FaCheck className='text-[#8750f7] me-3' />Reinvent Your Business to Better</li>
                                    <li className='flex items-center mb-2'><FaCheck className='text-[#8750f7] me-3' />Pioneering the Internet's First</li>
                                    <li className='flex items-center mb-2'><FaCheck className='text-[#8750f7] me-3' />Pioneering the Design World's First</li>
                                    <li className='flex items-center mb-2'><FaCheck className='text-[#8750f7] me-3' />IoT and Real-Time Tracking</li>
                                    <li className='flex items-center mb-2'><FaCheck className='text-[#8750f7] me-3' />Blockchain for Enhanced Transparency</li>
                                    <li className='flex items-center mb-2'><FaCheck className='text-[#8750f7] me-3' />Warehouse Automation and Robotics</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#140c1c] py-[30px] px-[25px] mb-[30px] rounded-[8px] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.3s">
                                <h4 className='uppercase text-[20px] mb-6 tracking-[0.6px] font-bold'>All Services</h4>
                                <ul className=''>
                                    <Link to='/services/branding-design'><li className='text-[16px] py-[15px] px-[20px] rounded-[8px] transition-all duration-300 cursor-pointer  ease-in-out delay-0 w-full flex items-center hover:bg-[#8750f7] capitalize hover:border-[#88f7] hover:text-white'><SiAffinitydesigner className='me-3' />branding design <MdKeyboardArrowRight className='ms-auto' /></li></Link>
                                    <Link to='/services/web-design'><li className='text-[16px] py-[15px] px-[20px] rounded-[8px] transition-all duration-300 cursor-pointer  ease-in-out delay-0 w-full flex items-center hover:bg-[#8750f7] capitalize hover:border-88750f7] hover:text-white'><SiWebmoney className='me-3' />web design <MdKeyboardArrowRight className='ms-auto' /></li></Link>
                                </ul>
                            </div>
                            <div className='bg-[#140c1c] py-[30px] px-[25px] mb-[30px] rounded-[8px] wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.5s">
                                <h4 className='uppercase text-[20px] mb-6 tracking-[0.6px] font-bold'>Get in Touch</h4>
                                <form action="" ref={form} onSubmit={submitData}>
                                    <div className='mb-6'>
                                        <input id='firstname' name='firstname' className='bg-[#050709] border-[1px] border-solid border-[#22272c] text-white text-[16px] w-full leading-[1.5] py-[14px] px-5 rounded-[8px] outline-0 transition-all duration-300 ease-out delay-0 focus:border-[#8750f7] placeholder:text-[#dddddd]' type="text" value={firstName} placeholder='First name' onChange={(e) => setFirstName(e.target.value)} />
                                        {errors.firstName && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.firstName}</span>}
                                    </div>
                                    <div className='mb-6'>
                                        <input id='email' name='email' className='bg-[#050709] border-[1px] border-solid border-[#22272c] text-white text-[16px] w-full leading-[1.5] py-[14px] px-5 rounded-[8px] outline-0 transition-all duration-300 ease-out delay-0 focus:border-[#8750f7] placeholder:text-[#dddddd]' type="email" value={email} placeholder='Email address' onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.email}</span>}
                                    </div>
                                    <div className=''>
                                        <textarea value={message} className='bg-[#050709] py-[14px] px-5 border-[1px] border-solid border-[#22272c] rounded-[8px] text-[16px] resize-none focus:border-[#8750f7] w-full focus:outline-none' name="Message" placeholder='Message' id="" rows={5} cols={40} onChange={(e) => setmessage(e.target.value)}></textarea>
                                        {errors.message && <span className='text-[#dc3232] text-[14px] font-normal pt-1 block'>{errors.message}</span>}
                                    </div>
                                    <div className='mt-4'>
                                        <button type='submit'value="Send" className='hire-btn w-full text-[15px] font-bold rounded-[50px]  sm:px-[30px] sm:py-4 px-5 py-3 transition-all duration-300'>Send Message</button>
                                    </div>
                                    {formMessage &&
                                        <div className='mt-8 border-[2px] py-[4px] px-4 text-[#dddddd] text-[16px] border-solid border-[#46b450]'>{formMessage}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
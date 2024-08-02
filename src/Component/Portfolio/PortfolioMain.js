import { Link, useLocation } from 'react-router-dom';
import background from '../../Assets/breadcrumb-bg.webp';
import Portfolio from './Portfolio';
import { useEffect } from 'react';

export default function PortfolioMain() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return (
        <>
            <div className="portfoliomain bg-cover bg-no-repeat bg-center  md:min-h-[350px] min-h-[200px] md:pt-[100px] pt-[50px] relative z-[1] after:absolute after:content-[''] after:top-0 after:z-[-1] after:left-0 after:w-full after:h-full after:bg-[#140c1cb3]" style={{ backgroundImage: `url(${background})` }}>
                <div>
                    <h1 className='text-[50px] leading-[1.2] text-white text-center font-bold'>Archives: <span>Portfolios</span></h1>
                    <h5 className='text-[16px] font-normal text-white mt-4 text-center'>
                        <Link to='/'><a className='hover:underline' href="#">Home</a>&nbsp;&nbsp;&gt;&nbsp;</Link>
                        <span>Portfolios</span></h5>
                </div>
            </div>
            <div className='bg-[#0F0715] md:py-[120px] sm:py-[70px] py-[50px]'>
                <Portfolio />
            </div>
        </>
    )
}
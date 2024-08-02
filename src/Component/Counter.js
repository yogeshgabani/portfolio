import { useEffect, useState } from "react";

export default function CountUpAnimation({ initialValue, targetValue, text, subtext, index }) {

    const [count, setCount] = useState(initialValue);
    const duration = 4000; // 4 seconds

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <>
            {/* <div className="">
                <div className="icon">{iconComponent}</div>
                <span className="num">{count}</span>
                <span className="text">{text}</span>
            </div> */}
            <div className='flex items-center md:justify-start sm:flex-row flex-col justify-center sm:gap-4 gap-0'>
                <div className=''>
                    <h1 className="text-count font-bold text-[64px] text-[#dddddd]">{count}{index}</h1>
                </div>
                <div>
                    <h4 className='text-[16px] text-[#dddddd]'>
                        {text} <br /> {subtext} 
                    </h4>
                </div>
            </div>
        </>
    )
}
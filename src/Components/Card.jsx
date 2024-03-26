import React, { useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

const Card = ({ category, title, description, image, text_color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative grid w-[281px] h-[444px] my-5 ${text_color} overflow-hidden`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image} alt="" className='absolute object-stretch h-full w-full z-0' />
            <div className='z-50 p-5 w-[100%]'>
                <div className='text-sm font-thin'>{category}</div>
                <div className='pt-2 text-lg '>{title}</div>
            </div>

            <div className={`w-full h-full absolute backdrop-blur-3xl transition-all ease-in-out duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <img src={image} alt="" className={`absolute object-stretch h-full w-full z-40 blur-2xl`} style={{ opacity: isHovered ? 1 : 0 }} />
                <div className='absolute w-full h-full grid place-content-end p-5 z-50'>
                    <div className='font-thin'>
                        {description}
                    </div>

                    <div className='pt-8 grid place-content-end'>
                        <div className='flex gap-2'>
                            <div className="expand-text">Expand</div>
                            <div className="grid place-content-center text-2xl"><RiArrowRightSLine /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

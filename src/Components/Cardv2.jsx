import React, { useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";


const Card = ({ category, title, description, image, text_color }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative grid w-[281px] h-[444px] my-5 ${text_color} overflow-hidden bg-white`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='p-5 z-50 h-[230px]'>
                <div className='font-thin text-sm'>{category}</div>
                <div className='pt-2 text-lg'>{title}</div>
            </div>
            <div>
                <img src={image} alt="" />
            </div>

            <div className={`${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity w-full h-full absolute backdrop-blur-3xl bg-white ease-in-out duration-500`}>
                <div className='absolute w-full h-full grid place-content-end p-5'>
                    <div className='font-thin'>
                        {description}
                    </div>

                    <div className='pt-8 grid place-content-end' >
                        <div className='flex gap-2'>
                            <div>Expand</div>
                            <div className="grid place-content-center text-2xl"><RiArrowRightSLine /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

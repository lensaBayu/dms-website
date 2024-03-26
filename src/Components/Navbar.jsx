import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = ({ setShowOverlay }) => {
    const [showProduct, setShowProduct] = useState(false);

    const handleClickOutside = (event) => {
        const dropdown = document.getElementById('dropdown');
        if (dropdown && !dropdown.contains(event.target)) {
            setShowProduct(false);
            setShowOverlay(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const toggleDropdown1 = () => {
        setShowProduct(!showProduct);
        setShowOverlay(!showProduct);
    };


    return (
        <>
            <div className='text-white flex justify-between mx-15 pt-7 pb-4'>
                <div className=''><img src="src/assets/Logo DMS.png" alt="Logo" /></div>
                <div className='flex gap-5 text-base'>
                    <div className='grid place-content-center '>
                        <div className='flex gap-1' onClick={toggleDropdown1}>
                            <div>
                                Product                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center'>
                        <div className='flex gap-1'>
                            <div>
                                Who we are
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center'>
                        <div className='flex gap-1'>
                            <div>
                                What we think
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center'>
                        <div className='flex gap-1'>
                            <div>
                                Careers
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                </div>
                <button className='grid place-content-center'>
                    {/* <IoIosSearch className=' text-2xl' /> */}
                    <img src="./Search.png" alt="" />
                </button>
            </div>
            {showProduct && (
                <div
                    id="dropdown"
                    className=' bg-teal-950 px-24 py-14  mt-5 text-white font-thin bg-opacity-30 backdrop-blur-3xl'>
                    <ul>
                        <li className="py-2">Digital Engineering & Manufacturing</li>
                        <li className="py-2">Strategic Managed Services</li>
                        <li className="py-2">Business Process Automation</li>
                        <li className="py-2">Big Data & Artificial Intelligence</li>
                        <li className="py-2">Technology Transformation</li>
                        <li className="py-2">Change Management</li>
                        <li className="py-2">Human Resources Information System</li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar
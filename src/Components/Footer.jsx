import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex justify-between m-15'>
                <div className='flex gap-10 text-medium'>
                    <div className='w-[200px]'>
                        <div className='text-white'>Site</div>
                        <div className='flex flex-col gap-1 mt-1'>
                            <div className=' text-neutral-400 font-thin hover:text-white hover:font-light ease-in-out duration-300'>Products</div>
                            <div className=' text-neutral-400 font-thin hover:text-white hover:font-light ease-in-out duration-300'>Who we are</div>
                            <div className=' text-neutral-400 font-thin hover:text-white hover:font-light ease-in-out duration-300'>What we think</div>
                            <div className=' text-neutral-400 font-thin hover:text-white hover:font-light ease-in-out duration-300'>Careers</div>
                        </div>

                    </div>
                    <div className='w-[200px]'>
                        <div className='text-white'>Social</div>
                        <div className='flex flex-col gap-1 mt-1'>
                            <div className=' text-neutral-400 font-thin hover:text-white hover:font-light ease-in-out duration-300'>Instagram</div>
                            <div className=' text-neutral-400 font-thin hover:text-white hover:font-light ease-in-out duration-300'>LinkedIn</div>
                        </div>

                    </div>
                    <div className='w-[200px]'>
                        <div className='text-white'>Contact</div>
                        <div className=' text-neutral-400 font-thin hover:text-white hover:font-light ease-in-out duration-300 mt-1'>dms@gmail.com</div>
                    </div>
                </div>

                <div className='pr-5'>
                    <img src="src/assets/Logo DMS.png" alt="Logo_DMS" className=' scale-125' />
                </div>
            </div>

            <div className='mx-15 pb-5 font-thin text-white'>© ️2024 DMS. All Rights Reserved</div>
        </div>
    )
}

export default Footer
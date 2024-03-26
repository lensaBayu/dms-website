import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Cardv2 from '../Components/Cardv2';


function Homepage() {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className='bg-black relative'>
            {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}
            <nav className='absolute top-0 left-0 right-0 z-10'>
                <Navbar setShowOverlay={setShowOverlay} />
            </nav>

            <div className='relative text-white w-full'>
                <img className='w-full transform scale-x-[-1]' src="/LandingPicture.png" alt="Landing_Picture" />

                <div className='absolute top-72 flex flex-col m-15'>
                    <h1 className='text-7.5xl w-[580px] leading-none font-extralight'>Empowering your goals with our technology and talent</h1>
                    <button className='mt-10 border b text-white w-[120px] h-[50px] grid place-content-center'>Start Here</button>
                </div>
            </div>

            <div className=' mt-36 mb-48 mx-15 grid grid-cols-4 gap-3'>
                <div className='grid place-content-center'>
                    <Card
                        category={"INSIGHT"}
                        title={"Old World vs New World"}
                        description={"Discover how application and data reporting used to be and how it could be"}
                        image={"cards/card1.png"}
                        text_color={"text-white"} />
                </div>
                <div className='grid place-content-center'>
                    <Cardv2
                        category={"INSIGHT"}
                        title={"The Foundation for Insight Driven Organizations"}
                        description={"Learn how we build the basic to build for today and build for tomorrow"}
                        image={"cards/card8.png"}
                        text_color={"text-black"} />
                </div>
                <div className='grid place-content-center'>
                    <Card
                        category={"INDEPENDENT CASE STUDY"}
                        title={"Discover how Optik Melawai develop their business insight"}
                        description={"Discover how Optik Melawai develop their business insight"}
                        image={"cards/card3.png"}
                        text_color={"text-black"} />
                </div>
                <div className='grid place-content-center'>
                    <Cardv2
                        category={"INSIGHT"}
                        title={"How to tackle digital transformation issues with change management"}
                        description={"How to tackle digital transformation issues with change management"}
                        image={"cards/card8.png"}
                        text_color={"text-black"} />
                </div>
                <div className='grid place-content-center'>
                    <Card
                        category={"INSIGHT"}
                        title={"Let’s visualize traditional AI/ML & Generative AI use case in HR Industry"}
                        description={"Let’s visualize traditional AI/ML & Generative AI use case in HR Industry"}
                        image={"cards/card5.png"}
                        text_color={"text-black"} />
                </div>
                <div className='grid place-content-center'>
                    <Card
                        category={"INDEPENDENT CASE STUDY"}
                        title={"Learn how we use automation to automate all of our HR Process"}
                        description={"Learn how we use automation to automate all of our HR Process"}
                        image={"cards/card6.png"}
                        text_color={"text-white"} />
                </div>
                <div className='grid place-content-center'>
                    <Card
                        category={"NEWS"}
                        title={"The adoption of AI is growing globally"}
                        description={"The adoption of AI is growing globally"}
                        image={"cards/card7.png"}
                        text_color={"text-white"} />
                </div>

            </div>

            <div className='mb-20'>
                <div className='flex'>
                    <div className='grid place-content-center h-[800px] w-[563px] relative'>
                        <img src="/Percent1.png" alt="" className='absolute object-strech h-full w-full' />
                        {/* <div className=' text-white font-bold text-10xl z-50'>91%</div> */}
                    </div>
                    <div className='grid place-content-end h-[800px] w-[877px] relative'>
                        <div className='bg-black w-full h-full absolute z-50 opacity-30'></div>
                        <img src="/image2.jpeg" alt="" className='absolute object-strech h-full w-full' />
                        <div className=' text-white font-extralight text-7.5xl leading-none z-50 pb-10 pl-10 w-[80%]'>our clients are top-rated companies in Indonesia</div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='grid place-content-center h-[800px] w-[877px] relative'>
                        <img src="/image3.jpeg" alt="" className='absolute object-fill h-full w-full' />
                        <div className='bg-black w-full h-full absolute z-50 opacity-30'></div>

                        <div className=' text-white absolute left-0 top-1/2 font-medium transform -translate-y-1/2 pl-20  z-50 w-[700px] '>
                            <div className='text-7.5xl leading-none font-extralight'>of them believe our presence delivers ease to their business
                            </div>
                            <button className='mt-10 border bg-white text-black p-3 px-5 grid place-content-center'>See our impact</button>
                        </div>
                    </div>
                    <div className='grid place-content-center h-[800px] w-[563px] relative'>
                        <img src="/Percent2.png" alt="" className='absolute object-strech h-full w-full' />
                        {/* <div className=' text-white font-bold text-10xl z-50'>96%</div> */}
                    </div>
                </div>
            </div>


            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Homepage;

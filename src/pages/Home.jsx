// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// typical import
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import SummerCollections from '../components/Home/SummerCollections';






const Home = () => {

    // const container = useRef();

    // const { contextSafe } = useGSAP({ scope: container });

    // const onClickGood = contextSafe(() => {
    //     gsap.to(".bad", { rotation: -180 });
    // });
    // const onClickBad = contextSafe(() => {
    //     gsap.to(".good", { rotation: 180 });
    // })


    // useGSAP(() => {
    //     gsap.from([box1, box2, box3], { opacity: 0, stagger: 0.1 });
    // });
   
    return (

        <>
            {/* <div className="h-[90vh] bg-your-image bg-cover bg-center " >


            </div> */}
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-[92vh] bg-your-image w-full bg-cover bg-center " >
                        <div className="h-[90vh]  " >
                            <div className="w-[1200px] mx-auto h-full">
                                <div className="flex flex-col justify-center items-start h-full w-[60%]">
                                    <h1 className="text-8xl text-left leading-[90px] font-sans font-bold pb-5">Winter Wonderland <br></br> <span className="text-[#00B6DF]">for Sale</span></h1>
                                    <p className="text-xl text-left font-custom">Cozy up to savings with our exclusive winter collection. Limited stock </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[92vh] bg-your-image1 w-full bg-cover bg-center " >
                        <div className="h-[90vh]  " >
                            <div className="w-[1200px] mx-auto h-full">
                                <div className="flex flex-col justify-center items-start h-full w-[60%]">
                                    <h1 className="text-8xl text-left leading-[90px] font-sans font-bold pb-5">Winter Wonderland <br></br> <span className="text-[#00B6DF]">for Sale</span></h1>
                                    <p className="text-xl text-left font-custom">Cozy up to savings with our exclusive winter collection. Limited stock </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[92vh] bg-your-image2 w-full bg-cover bg-center " >
                        <div className="h-[90vh]  " >
                            <div className="w-[1200px] mx-auto h-full">
                                <div className="flex flex-col justify-center items-start h-full w-[60%]">
                                    <h1 className="text-8xl text-left leading-[90px] font-sans font-bold pb-5">Winter Wonderland <br></br> <span className="text-[#00B6DF]">for Sale</span></h1>
                                    <p className="text-xl text-left font-custom">Cozy up to savings with our exclusive winter collection. Limited stock </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[92vh] bg-your-image3 w-full bg-cover bg-center " >
                        <div className="h-[90vh]  " >
                            <div className="w-[1200px] mx-auto h-full">
                                <div className="flex flex-col justify-center items-start h-full w-[60%]">
                                    <h1 className="text-8xl text-left leading-[90px] font-sans font-bold pb-5">Winter Wonderland <br></br> <span className="text-[#00B6DF]">for Sale</span></h1>
                                    <p className="text-xl text-left font-custom">Cozy up to savings with our exclusive winter collection. Limited stock </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
            <div>
                <SummerCollections></SummerCollections>

            </div>
            <div className='py-20'>
                {/* <div ref={container}>
                    <button className="bg-orange-500 py-3 px-5 text-white bad" onClick={onClickBad} >Bad</button>
                    <button className="bg-orange-500 py-3 px-5 text-white good" onClick={onClickGood} >Good</button>
                </div> */}
           


            </div>
            {/* <div className='h-[4000px]'>
                <Scroll></Scroll>
            </div> */}

        </>




    );
};

export default Home;
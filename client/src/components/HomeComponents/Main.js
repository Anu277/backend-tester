import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'; 
import Lottie from "lottie-react";

import team from '../../assets/animations/team.json';
import vision from '../../assets/animations/vision.json';
import whyGloomDev from '../../assets/animations/whyGloomDev.json';

import idea from '../../assets/images/idea-solution.gif'
import employee from '../../assets/images/employee.gif'
import project from '../../assets/images/work-in-progress.gif'
import globalClients from '../../assets/images/global-connection.gif'
import satisfy from '../../assets/images/satisfy.gif'
import mission from '../../assets/images/mission.gif'

import iot from '../../assets/images/iot-and-robo/IotCoverPic.webp'
import data from '../../assets/images/data-science/dataCoverPic.webp'
import ml from '../../assets/images/machine-learning/MLCoverPic.webp'
import ai from '../../assets/images/ai/AiCoverPic.webp'
import MainServiceComponent from "./MainServiceComponent";
import ServiceSection from "./serviceSection";

const mainserviceItems=[
    {
        title:"IOT and Robotics",
        img:iot,
        para:"Boosting Efficiency with Intelligent Solutions. Explore our IoT and Robotics services aimed at optimizing operations and enhancing quality. We specialize in optimizing energy consumption, providing connected transport for real-time cargo monitoring, offering usage-based service pricing for efficient asset management, and ensuring manufacturing excellence through product quality management."
    },
    {
        title:"Data Science",
        img:data,
        para:"Our Data Science services offer customized solutions in Supply Chain Analytics, Marketing Analytics, and Customer Analytics. We assist in converting data into actionable insights, improving operations and enhancing decision-making processes."
    },
    {
        title:"Machine Learning",
        img:ml,
        para:"Discover our Machine Learning services, featuring Model Development, Data Engineering, and Data Analysis. We create robust models, design efficient data pipelines, and derive meaningful insights, empowering you to make data-driven decisions and innovate successfully."
    },
    {
        title:"Artificial Intelligence",
        img:ai,
        para:"Explore our AI services that transform industries and everyday life. Our expertise in Natural Language Processing, Computer Vision, and Image Analysis opens up new possibilities and fosters innovation, making technology more intelligent and responsive."
    }
]

const Main=()=>{
    useEffect(()=>{
        Aos.init();
    },[])
    return(
        <>
            <div className="felx flex-col m-auto ">

                <div className="about-us p-5 my-3 md:my-10 max-w-280 flex flex-col items-center m-auto justify-center bg-white">
                    <div><h2 className="text-3xl md:text-4xl p-5 font-semibold">About Us</h2></div>
                    <div className=" md:flex  justify-center align-middle items-center ">
                        <div className=""><Lottie animationData={team} loop={true} className="h-56 md:h-96" /></div>
                        <div className="flex flex-col max-w-128">
                            <p>
                                GLOOM DEV is a dynamic startup specializing in Data Science, IoT, AI, and Machine Learning solutions. 
                                Our institution is accredited by AICTE for excellence in technical education and recognized by MSME 
                                for its contributions to the growth of small and medium enterprises. Our mission is to empower businesses 
                                and individuals through innovative technologies and comprehensive training programs. We focus on delivering 
                                bespoke solutions that foster digital transformation and practical skill development. At GLOOM DEV, we are 
                                committed to making a significant impact in the tech industry by providing customized and impactful solutions.
                            </p>
                            
                        </div>
                    </div>
                </div>

                <div className="max-w-128 m-auto border-t-2 border-black"></div>

                <div className="container mx-auto max-w-280 px-4 py-2 bg-white">
                    <div className="flex flex-wrap md:flex-nowrap items-center p-3">
                        <img src={mission} className="max-w-80 mr-4" alt="mission" />
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold mb-2">Mission</h2>
                            <p className="text-lg">
                                To provide exceptional R&D, data science, IoT, and software services that fuel innovation and inspire growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-280 px-4 py-2 bg-white">
                    <div className="flex flex-wrap items-center p-3">
                        <div className="md:hidden">
                            <Lottie animationData={vision} loop={true} className="h-56 md:h-96" />
                        </div>
                        <div className="md:flex-1">
                            <h2 className="text-2xl font-bold mb-2">Vision</h2>
                            <p className="text-lg">
                                To be a leading innovator in the technology industry, driving advancements in research and development, data science,
                                IoT, and software solutions. We aim to empower businesses and individuals by delivering cutting-edge technologies that
                                ignite their vision and transform their ideas into reality.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <Lottie animationData={vision} loop={true} className="h-56 md:h-96" />
                        </div>
                    </div>
                </div>


                <div className="container mx-auto max-w-280 px-4 py-2 my-16 bg-white">
                    <div className="flex flex-wrap items-center">
                        <div className="float-left">
                            <Lottie animationData={whyGloomDev} loop={true} className="h-56 md:h-96" />
                        </div>
                        <div className="md:flex-1 ml-4">
                            <h2 className="text-2xl font-bold mb-2">Why GloomDev?</h2>
                            <ul className="list-disc pl-5 mb-4">
                                <li className="mb-2">
                                    <strong>Expertise and Experience:</strong> Our team comprises seasoned professionals with deep knowledge and extensive experience in their respective fields.
                                </li>
                                <li className="mb-2">
                                    <strong>Innovative Solutions:</strong> We are dedicated to providing creative and effective solutions tailored to meet the unique needs of our clients.
                                </li>
                                <li className="mb-2">
                                    <strong>Customer-Centric Approach:</strong> Our clients are at the heart of everything we do. We prioritize their needs and strive to exceed their expectations.
                                </li>
                                <li className="mb-2">
                                    <strong>Quality and Reliability:</strong> We deliver high-quality, reliable services that our clients can depend on.
                                </li>
                                <li className="mb-2">
                                    <strong>Commitment to Excellence:</strong> We are committed to maintaining the highest standards of excellence in all our projects.
                                </li>
                            </ul>
                            <p>
                                Choosing GloomDev Pvt Ltd means partnering with a company that is dedicated to igniting your vision and transforming your ideas into impactful solutions. Let us help you navigate the technological landscape and achieve your goals with confidence.
                            </p>
                        </div>
                    </div>
                </div>

     
                <div className="max-w-128 m-auto border-t-2 border-black"></div>

                <div className="services my-5 max-w-280 m-auto bg-white">
                    <div className=" flex flex-col text-center px-3"> 
                        <h2 className="text-3xl font-bold my-4">Services</h2>
                        <p className="my-4">
                        We are dedicated to providing comprehensive technology solutions that cater to the evolving needs of modern businesses. 
                        Our team of experts specializes in developing advanced data science models, implementing IoT systems, and creating 
                        innovative AI and ML applications. We excel in optimizing business processes through intelligent automation, offering 
                        deep insights through data analytics, and ensuring robust digital security. Whether you're looking to enhance your 
                        technology infrastructure or innovate with cutting-edge solutions, we are here to support you every step of the way.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 m-auto align-middle justify-center">
                        {mainserviceItems.map((item,index)=>(
                            <MainServiceComponent key={index} item={item}/>
                        ))}
                    </div>

                </div>

                {/* <ServiceSection/> */}

                <div>
                    <div className="w-full bg-orange-300 rounded-lg ">
                        <div className="p-5 m-auto my-16 max-w-9xl lg:w-full flex flex-wrap md:gap-6 items-center align-middle justify-between">
                            <div className="flex flex-col md:w-1/2 m-auto"> 
                                <h2 className="text-[20px] md:text-4xl font-extrabold text-center"> We <nobr>&lt; Innovate | Future | Together &gt;</nobr></h2>
                                <div className="my-3 text-center">
                                    <p>The <strong>GLOOM DEV</strong> team is dedicated to providing innovative cloud solutions, 
                                    ensuring high-quality and scalable technology for businesses. Our mission is to enable seamless 
                                    cloud integration and exceptional service.</p>
                                </div>
                            </div>
                            <div className="m-auto">
                                <div> 
                                    <div className="statistics-cards flex align-middle items-center justify-center flex-wrap gap-3">
                                        <div className="card bg-white min-h-40 md:min-h-56 min-w-32 w-full max-w-40 sm:max-w-64 md:min-w-72 text-center flex flex-col gap-3 justify-center align-middle items-center rounded-md shadow-lg" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="300" data-aos-delay="0">
                                            <img src={idea} className="h-24" alt="solution" />
                                            <h3 className="text-5xl font-black">10+</h3>
                                            <p className="text-xl font-semibold">Innovative Solutions</p>
                                        </div>
                                        
                                        <div className="card bg-white  min-h-40 md:min-h-56 min-w-32 w-full max-w-40 sm:max-w-64 md:min-w-72 text-center flex flex-col gap-3 justify-center align-middle items-center rounded-md shadow-lg"  data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="300" data-aos-delay="200">
                                            <img src={project} className="h-24" alt="projects" />
                                            <h3 className="text-5xl font-black">15+</h3>
                                            <p className="text-xl font-semibold">Projects Completed</p>
                                        </div>
                                        <div className="card bg-white  min-h-40 md:min-h-56 min-w-32 w-full max-w-40 sm:max-w-64 md:min-w-72 text-center flex flex-col gap-3 justify-center align-middle items-center rounded-md shadow-lg" data-aos="fade-up"  data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="300" data-aos-delay="300">
                                            <img src={globalClients} className="h-24" alt="global clients" />
                                            <h3 className="text-5xl font-black">5+</h3>
                                            <p className="text-xl font-semibold">Global Clients</p>
                                        </div>
                                        <div className="card bg-white  min-h-40 md:min-h-56 min-w-32 w-full max-w-40 sm:max-w-64 md:min-w-72 text-center flex flex-col gap-3 justify-center align-middle items-center rounded-md shadow-lg" data-aos="fade-up"  data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="300" data-aos-delay="400">
                                            <img src={satisfy} className="h-24" alt="satisy"/>
                                            <h3 className="text-5xl font-black">4.8/5</h3>
                                            <p className="text-xl font-semibold">Client Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Main;
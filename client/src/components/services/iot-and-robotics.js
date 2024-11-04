import '../../index.css';
import ServiceCard from './Service-component'; 

import image1 from '../../assets/images/iot-and-robo/image002.webp';
import image2 from '../../assets/images/iot-and-robo/image004.webp';
import image3 from '../../assets/images/iot-and-robo/image006.webp';
import image4 from '../../assets/images/iot-and-robo/image011.webp';

import cover from '../../assets/images/iot-and-robo/IotCoverPic.webp'

const IotRoboticsPage = () => {
  const subtopics = [
    {
      title: 'Optimization of energy consumption',
      description: "Automated control systems for energy consumption are designed to adjust the intensity of energy utilization based on real-time external conditions. These systems use IoT sensors and smart algorithms to regulate energy usage efficiently. In a smart home setting, the system can adjust the brightness of lights, heating, and cooling based on occupancy and outside weather conditions. For public settings, like street lights, the system can adjust the brightness according to the time of day, weather conditions, and the presence of pedestrians or vehicles. Applications of these systems include energy-efficient lighting and climate control in smart homes, and intelligent street lighting and public building energy management in smart cities. The technologies used for this purpose include IoT sensors (temperature, occupancy, light sensors), smart thermostats, automated lighting systems, and machine learning algorithms for predictive energy management.",
      imageUrl: image1
    },
    {
      title: 'Connected transport',
      description: 'Real-time monitoring of cargo in transit is crucial for maintaining the quality and compliance of goods during transportation. IoT devices are used to track the location, temperature, humidity, and other critical parameters of cargo. This ensures that perishable goods, pharmaceuticals, and other sensitive products are transported under optimal conditions, reducing spoilage and ensuring compliance with regulatory standards. Applications of these systems include enhanced tracking and management of goods from origin to destination in the supply chain. The technologies used for this purpose include GPS tracking devices, environmental sensors (temperature, humidity), data analytics platforms, and real-time alert systems.',
      imageUrl: image2
    },
    {
      title: 'Usage-based service pricing',
      description: 'This system involves monitoring the usage behavior and conditions of assets to identify potential risks and dynamically adjust service pricing accordingly. IoT devices collect real-time data on how assets are used and their operational conditions. This information undergoes analysis using data analytics and machine learning to detect patterns indicative of high risk or increased maintenance needs, enabling service providers to adjust prices promptly. Applications include adjusting insurance premiums based on real-time asset usage and risk assessment, and implementing dynamic pricing models for rental services based on asset utilization and condition.\n\nKey technologies utilized encompass IoT sensors for precise usage tracking, advanced data analytics and machine learning algorithms for robust risk assessment, real-time pricing algorithms for dynamic adjustments, and cloud platforms for secure and scalable data storage and processing.',
      imageUrl: image3
    },
    {
      title: 'Product quality management',
      description: 'In manufacturing, monitoring product parameters and ensuring process compliance is crucial for maintaining high-quality standards. IoT devices and sensors are strategically deployed throughout the production line to continuously monitor key parameters such as temperature, pressure, and humidity. This real-time data enables manufacturers to promptly identify deviations and take corrective actions.\n\nAny deviations from predefined standards and take immediate corrective actions, thereby ensuring consistent product quality and compliance with regulatory requirements. Applications of these systems primarily focus on ensuring consistent product quality and process compliance within manufacturing environments. Technologies used include IoT sensors for real-time parameter monitoring, integrated quality management systems (QMS) for comprehensive process oversight, advanced real-time data analytics for proactive quality control, and automated control systems for swift process adjustments based on real-time insights.',
      imageUrl: image4
    }
  ];

  return (
    <>
      <div className="p-8 m-auto max-w-280 z-10">
        <h1 className=" py-3 text-4xl text-center font-bold mb-8 border-b-2 border-slate-900">IOT and Robotics</h1>
        
        <div className=" relative  min-h-56 md:min-h-80 flex justify-center" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute w-full h-full  bg-black bg-opacity-40'></div>
          <div className='relative text-white flex flex-col p-4 justify-center'>
            <h2 className="text-3xl font-bold"> IoT and Robotics Services</h2>
            <h3 className='text-2xl font-medium italic p-2'>
              Enhancing Efficiency with Smart Solutions
            </h3>
            <p className='pt-3'>
              Discover our IoT and Robotics services designed to optimize operations and improve quality. We specialize in energy consumption optimization, 
              connected transport for real-time cargo monitoring, usage-based service pricing for efficient asset management, and product quality management to ensure manufacturing excellence.
            </p>
          </div>
        </div>
        
        <h2 className='text-3xl font-semibold text-center my-5'>Services</h2>
        <div className="relative flex flex-wrap justify-center gap-8">
          {subtopics.map((subtopic, index) => (
            <ServiceCard index={index} subtopic={subtopic} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IotRoboticsPage;

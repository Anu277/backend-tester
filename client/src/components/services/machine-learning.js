import '../../index.css';
import ServiceCard from './Service-component'; 

import image1 from '../../assets/images/machine-learning/image034.webp';
import image2 from '../../assets/images/machine-learning/image040.webp';
import image3 from '../../assets/images/machine-learning/image042.webp';

import cover from '../../assets/images/machine-learning/MLCoverPic.webp';

const MachineLearning = () => {
  const subtopics = [
    {
      title: 'Machine Learning Model Development',
      description: "Machine learning model development is a structured process that begins with clearly defining the problem and setting objectives based on business or research goals. It involves gathering and preprocessing data from various sources to ensure it's clean and suitable for analysis. Exploring the data helps to identify patterns and relationships that inform the selection of appropriate machine learning algorithms. Models are trained on labeled data and validated to ensure they generalize well to new, unseen data. Hyperparameters are tuned to optimize model performance, evaluated using metrics like accuracy, precision, and recall. Once a satisfactory model is achieved, it's deployed into production environments where it's monitored and updated as needed to maintain effectiveness over time.",
      imageUrl: image1
    },
    {
      title: 'Data Engineering',
      description: `Machine learning model development is a structured process that begins with clearly defining the problem and setting objectives based on business or research goals. It involves gathering and preprocessing data from various sources to ensure it's clean and suitable for analysis. Exploring the data helps to identify patterns and relationships that inform the selection of appropriate machine learning algorithms. Models are trained on labeled data and validated to ensure they generalize well to new, unseen data. Hyperparameters are tuned to optimize model performance, evaluated using metrics like accuracy, precision, and recall. Once a satisfactory model is achieved, it's deployed into production environments where it's monitored and updated as needed to maintain effectiveness over time.`,
      imageUrl: image2
    },
    {
      title: ' Data analysis',
      description: 'Data analysis is the process of extracting meaningful insights from raw data to support decision-making and solve problems. It starts with formulating hypotheses or questions based on business objectives, followed by cleaning and preparing data to remove inconsistencies and irrelevant information. Visualizations such as charts, graphs, and dashboards are employed to explore data distributions and trends effectively. Statistical methods and machine learning models are applied to uncover patterns and relationships within the data, validating hypotheses through experiments and tests. Findings are communicated through comprehensive reports or presentations, guiding stakeholders in making informed decisions and driving continuous improvements based on data-driven feedback loops.',
      imageUrl: image3
    },
  ];

  return (
    <>
      <div className="p-8 m-auto max-w-280 z-10">
        <h1 className=" py-3  text-4xl text-center font-bold mb-8 border-b-2 border-slate-900"> Machine Learning</h1>
        
        <div className=" relative  min-h-56 md:min-h-80 flex justify-center" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute w-full h-full  bg-black bg-opacity-40'></div>
          <div className='relative text-white flex flex-col p-4 justify-center'>
            <h2 className="text-3xl font-bold">  Machine Learning Services</h2>
            <h3 className='text-2xl font-medium italic p-2'>
            Driving Innovation with Intelligent Systems
            </h3>
            <p className='pt-3'>
            xplore our Machine Learning services, including Model Development, Data Engineering, and Data Analysis. We build robust models, 
            engineer data pipelines, and extract meaningful insights to help you make data-driven decisions and innovate effectively.
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

export default MachineLearning;

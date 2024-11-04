import '../../index.css';
import ServiceCard from './Service-component';

import image1 from '../../assets/images/data-science/image020.webp';
import image2 from '../../assets/images/data-science/image026.webp';
import image3 from '../../assets/images/data-science/image030.webp';

import cover from '../../assets/images/data-science/dataCoverPic.webp';

const DataScience = () => {
  const subtopics = [
    {
      title: 'Supply Chain Analytics',
      description: "Supply Chain Analytics involves using data science and analytical techniques to optimize various aspects of supply chain management. It provides scalable solutions for supply chain teams to improve inventory management, forecast accuracy, and overall operational efficiency. Key components include demand forecasting to predict future product demand, inventory optimization to balance stock levels and costs, stock analytics for monitoring inventory performance, logistics route optimization to enhance transportation efficiency, and comprehensive supply chain management strategies. By leveraging data-driven insights, organizations can streamline operations, reduce costs, and better respond to market demands, ensuring they maintain a competitive edge in their industry.",
      list: [
        'Demand forecasting',
        'Inventory optimization',
        'Stock analytics',
        'Logistics route optimization',
        'Supply chain management'
      ],
      imageUrl: image1
    },
    {
      title: 'Marketing Analytics',
      description: 'Marketing Analytics is the practice of using data analysis and predictive modeling to develop highly targeted marketing strategies that can be effectively scaled across different brands and geographic regions. It focuses on leveraging data to understand customer behavior, preferences, and trends in order to optimize marketing efforts. Key components of marketing analytics include hyper-personalization, where marketing messages and offers are tailored to individual customer profiles; multi-touch attribution, which analyzes the impact of various marketing touchpoints on conversions; social media analytics, for monitoring engagement and campaign effectiveness on platforms like Facebook, Twitter, and Instagram; ecommerce campaign optimization, aimed at driving traffic and sales through digital channels; and predictive analytics, which forecasts future trends and customer behavior to inform strategic marketing decisions. By harnessing these insights, businesses can optimize marketing spend, improve customer engagement, and drive revenue growth effectively.',
      list: [
        'Hyper-personalization',
        'Multi-touch attribution',
        'Social media analytics',
        'Ecommerce campaign optimization',
        'Predictive Analytics'
      ],
      imageUrl: image2
    },
    {
      title: 'Customer Analytics',
      description: 'Customer Analytics focuses on leveraging data and advanced analytics to gain deep insights into customer behavior, preferences, and needs in order to enhance the overall customer experience (CX) journey. It encompasses a comprehensive set of analytical techniques aimed at understanding and predicting customer actions. Key components include calculating Customer Lifetime Value (CLV) to prioritize high-value customers, mapping the 360-degree Customer Journey across various touchpoints to provide a holistic view, employing Sentiment Analysis through NLP and machine learning to gauge customer satisfaction, predicting and preventing Customer Churn by identifying at-risk customers, and implementing personalized Customer Experience strategies tailored to individual preferences. This approach enables businesses to optimize marketing strategies, improve customer retention, and ultimately drive growth by delivering tailored experiences that meet customer expectations and foster long-term loyalty.',
      list: [
        'Demand forecasting',
        'Inventory optimization',
        'Stock analytics',
        'Logistics route optimization',
        'Supply chain management'
      ],
      imageUrl: image3
    },
  ];

  return (
    <>
      <div className="p-8 m-auto max-w-280 z-10">
        <h1 className="py-3 text-4xl text-center font-bold mb-8 border-b-2 border-slate-900">Data Science</h1>
        
        <div className=" relative  min-h-56 md:min-h-80 flex justify-center" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute w-full h-full  bg-black bg-opacity-40'></div>
          <div className='relative text-white flex flex-col p-4 justify-center'>
            <h2 className="text-3xl font-bold">Data Science Services</h2>
            <h3 className='text-2xl font-medium italic p-2'>
              Leveraging Data for Strategic Insights
            </h3>
            <p className='pt-3'>
              Our Data Science services provide tailored solutions in Supply Chain Analytics, Marketing Analytics,
              and Customer Analytics. We help you transform data into actionable insights, optimizing operations and enhancing decision-making.
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

export default DataScience;

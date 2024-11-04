import '../../index.css';
import ServiceCard from './Service-component'; 

import cover from '../../assets/images/ai/AiCoverPic.webp'

import image1 from '../../assets/images/ai/image045.webp';
import image2 from '../../assets/images/ai/image049.webp';
import image3 from '../../assets/images/ai/image051.webp';
import image4 from '../../assets/images/ai/ai4.webp';
import image5 from '../../assets/images/ai/ai5.webp';
import image6 from '../../assets/images/ai/ai6.webp';




const ArtificialIntelligence = () => {
  const subtopics = [
    {
      title:'NLP',
      description: "Natural Language Processing (NLP) focuses on understanding and interpreting human language through computational techniques. It involves building intelligent systems that can analyze, comprehend, and generate human language data. Recent advancements, such as models like GPT-3 (Generative Pre-trained Transformer 3), have significantly enhanced NLP capabilities. These models go beyond basic tasks like hashtag detection and mentions to enable more sophisticated applications. For instance, they excel in sentiment analysis, language translation, text classification, and question-answering systems. Companies leverage these advancements to revolutionize customer engagement strategies, offering personalized experiences through automated chatbots, sentiment-driven marketing campaigns, and efficient customer support systems.",
      imageUrl: image1
    },
    {
      title: 'Computer Vision',
      description:"Computer Vision entails the ability of machines to interpret and understand visual information from the world. It involves processing and analyzing images and videos to extract meaningful insights and make decisions. Recent advancements in deep learning have propelled computer vision capabilities to new heights. Techniques such as convolutional neural networks (CNNs) enable the extraction of deep insights from both 2D and 3D visual data. Applications include image and video analytics for understanding customer behavior, facial recognition for security and personalization, crowd dynamics analysis for public safety, and document analysis for automated data extraction. These capabilities are crucial in transforming industries by enhancing product development, customer experiences in real-world, virtual reality (VR), and augmented reality (AR) environments, and driving operational efficiencies through automation and digitization initiatives.",
      imageUrl: image2
    },
    {
      title: ' Image Analysis',
      description: 'Deep insights from raw and 3D images uncover digitization opportunities such as image and video analytics, facial recognition, crowd dynamics, and document analysis with custom, pre-trained SOTA models. These have transformed the way companies create experiences across real, VR, and AR environments.',
      imageUrl: image3
    },
    {
      title: 'AI in Healthcare',
      description: 'Artificial Intelligence (AI) is revolutionizing healthcare by enhancing diagnostic accuracy, personalizing treatment plans, and predicting patient outcomes. AI algorithms analyze medical images, such as X-rays and MRIs, to detect abnormalities and assist radiologists in diagnosing conditions like cancer and fractures. Predictive analytics in healthcare uses AI to forecast disease outbreaks and patient readmission rates, enabling proactive interventions. Personalized medicine, powered by AI, tailors treatments to individual patients based on their genetic profiles and medical histories, improving efficacy and reducing side effects. Additionally, AI-driven virtual health assistants provide patients with 24/7 support, managing chronic conditions and offering medical advice, thus improving overall patient care and accessibility.',
      imageUrl: image4
    },
    {
      title: 'AI in Customer Service',
      description: 'In customer service, AI enhances efficiency and customer satisfaction through automation and personalization. AI-powered chatbots and virtual assistants handle routine inquiries, resolve common issues, and provide instant support, freeing human agents to tackle more complex problems. Natural Language Processing (NLP) enables these systems to understand and respond to customer queries in real-time, improving response times and accuracy. AI also analyzes customer interactions and feedback to gain insights into preferences and pain points, allowing companies to tailor their services and communications. This data-driven approach helps in predicting customer needs and delivering personalized experiences, ultimately leading to increased customer loyalty and satisfaction.',
      imageUrl: image5
    },
    {
      title: ' AI in Security',
      description: "AI plays a critical role in enhancing security across various domains, from cyber defense to physical surveillance. In cybersecurity, AI systems detect and respond to threats in real-time by analyzing vast amounts of data to identify patterns and anomalies that indicate potential breaches. Machine learning algorithms continuously adapt to new threats, making them effective against evolving cyberattacks. In physical security, AI-powered surveillance systems use computer vision to monitor video feeds, identify suspicious activities, and alert security personnel to potential incidents. These systems can recognize faces, detect unattended objects, and track movements, improving situational awareness and response times. AI's ability to analyze and correlate data from multiple sources significantly enhances both preventive and reactive security measures, ensuring a safer environment.",
      imageUrl: image6
    }
  ];

  return (
    <>
      <div className="p-8 m-auto max-w-280 z-10">
        <h1 className="py-3 text-4xl text-center font-bold mb-8 border-b-2 border-slate-900">Artificial Intelligence</h1>
        <div className='realtive w-full max-h-96 overflow-hidden rounded'>

          <div className=" relative  min-h-56 md:min-h-80 flex justify-center" style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='absolute w-full h-full  bg-black bg-opacity-40'></div>
              <div className='relative text-white flex flex-col p-4 justify-center'>
                  <h2 className="text-3xl font-bold">AI-Powered Solutions</h2>
                  <h3 className='text-2xl font-medium italic p-2'>
                    Innovating the Future with Artificial Intelligence
                  </h3>
                  <p className='pt-3'>
                    Discover our AI services that enhance industries and everyday life. 
                    Our expertise in Natural Language Processing, Computer Vision, and 
                    Image Analysis unlocks new possibilities and drives innovation, making technology smarter and more responsive.
                  </p>
              </div>
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

export default ArtificialIntelligence;

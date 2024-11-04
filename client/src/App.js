import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavComponents/Navbar";
import MainCarousel from "./components/HomeComponents/MainCaraousel";
import ParticlesComponent from "./components/ParticlesComponents";
import MSMEAICTE from "./components/HomeComponents/MSMEAICTE";
import Main from "./components/HomeComponents/Main";
import Footer from "./components/Footer";
import ScrollToTop from "./components/scrolltotop";

import IotRoboticsPage from "./components/services/iot-and-robotics";
import DataScience from "./components/services/data-science";
import MachineLearning from "./components/services/machine-learning";
import ArtificialIntelligence from "./components/services/artificial-intelligence";
import InsightsPage from "./components/Insights/insights";

import Training from './components/TrainingComponents/training';
import Careers from './components/careers';
import PageNotFound from './404';
import ScrollToTopButton from "./components/ScrollToTopButton";
import ProjectsPage from "./components/Projects/projects";
import ChatBot from "./components/chatbot";

const HomePage = () => {
  return (
    <>
      <ParticlesComponent id={`particleJs`} />
      <MainCarousel />
      <MSMEAICTE />
      <Main />
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <section className="flex gap-3">
        <ScrollToTop />
        <ChatBot/>
      </section>
      
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services/iot-and-robotics" element={<IotRoboticsPage />} />
        <Route path="/services/data-science" element={<DataScience />} />
        <Route path="/services/machine-learning" element={<MachineLearning />} />
        <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />

        <Route path="/products" element={<ProjectsPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/training" element={<Training />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;


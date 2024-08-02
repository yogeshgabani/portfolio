import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import '../src/Component/Font/HelveticaNeue.ttf';
import PortfolioMain from './Component/Portfolio/PortfolioMain';
import PortOne from './Component/Portfolio/PortOne';
import BlogMain from './Component/Blogs/BlogMain';
import Blogone from './Component/Blogs/Blogone';
import Services from './Component/Services/Services';
import ServiceOne from './Component/Services/ServicesOne';
import ServiceTwo from './Component/Services/ServiceTwo';

import 'animate.css/animate.min.css';
import Kidsshop from './Component/Portfolio/Kidsshop';
import Zenadmin from './Component/Portfolio/Zenadmin';
import Townhub from './Component/Portfolio/Townhub';
import Dashonic from './Component/Portfolio/Dashonic';
import Pitnik from './Component/Portfolio/Pitnik';


function App() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* preloader */}
      <div class="preloader-container">
        <div class="preloader-text">
          <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>...</span>
        </div>
      </div>
      <div className="App overflow-hidden">
        <BrowserRouter>
          <Header  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/portfolio' element={<PortfolioMain />} />
            <Route path='/portfolio/deloitte' element={<PortOne />} />
            <Route path='/portfolio/kids-shoping' element={<Kidsshop />} />
            <Route path='/portfolio/zen-admin' element={<Zenadmin />} />
            <Route path='/portfolio/townhub' element={<Townhub />} />
            <Route path='/portfolio/dashonic' element={<Dashonic />} />
            <Route path='/portfolio/pitnik' element={<Pitnik />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/branding-design" element={<ServiceOne />} />
            <Route path="/services/web-design" element={<ServiceTwo />} />
            <Route path='/blog' element={<BlogMain />} />
            <Route path='/blog/:name' element={<Blogone />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

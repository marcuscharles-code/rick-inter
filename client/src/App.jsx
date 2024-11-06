import './App.css';
import 'leaflet/dist/leaflet.css';
import Layout from './components/Layout';
import { LoadTop, PageTop } from './components/Top';
import { TitleProvider } from './helpers/TitleContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';


const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
const Service = React.lazy(() => import('./routes/Service'));
const ServiceDetailsRoute = React.lazy(() => import('./routes/ServiceDetailsRoute'));
const Contact = React.lazy(() => import('./routes/Contact'));
const Portfolio = React.lazy(() => import('./routes/Portfolio'));

function App() {
  return (
    <TitleProvider>
      <Router>
        <LoadTop />
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/service' element={<Service />} />
              <Route path="/service/services/:serviceId" element={<ServiceDetailsRoute />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
          </Suspense>
        </Layout>
        <PageTop />
      </Router>
    </TitleProvider>
  );
}

export default App;

import './App.css';
import 'leaflet/dist/leaflet.css';
import Layout from './components/Layout';
import { LoadTop, PageTop } from './components/Top';
import { TitleProvider } from './helpers/TitleContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

// Lazy loading routes
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Service = lazy(() => import('./routes/Service'));
const ServiceDetailsRoute = lazy(() => import('./routes/ServiceDetailsRoute'));
const Contact = lazy(() => import('./routes/Contact'));
const Portfolio = lazy(() => import('./routes/Portfolio'));

function App() {
  return (
    <TitleProvider>
      <Router>
        <LoadTop />
        <Layout>
          <Suspense fallback={<Loader />}>
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









// import './App.css';
// import 'leaflet/dist/leaflet.css';
// import Home from './routes/Home';
// import About from './routes/About';
// import Service from './routes/Service';
// import ServiceDetailsRoute from './routes/ServiceDetailsRoute'
// import Contact from './routes/Contact';
// import Layout from './components/Layout';
// import Portfolio from './routes/Portfolio';
// import { LoadTop, PageTop } from './components/Top';
// import { TitleProvider } from './helpers/TitleContext';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// function App() {
//   return (
//     <TitleProvider>
//       <Router>
//         <LoadTop />
//         <Layout>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/service' element={<Service />} />
//             <Route path="/service/services/:serviceId" element={<ServiceDetailsRoute />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/portfolio' element={<Portfolio />} />
//           </Routes>
//         </Layout>
//         <PageTop />
//       </Router>
//     </TitleProvider>
//   );
// }

// export default App;
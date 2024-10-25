import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Layout from './components/Layout';
import Portfolio from './routes/Portfolio';
import { LoadTop, PageTop } from './components/Top';
import { TitleProvider } from './helpers/TitleContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <TitleProvider>
      <Router>
        <LoadTop />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        </Layout>
        <PageTop />
      </Router>
    </TitleProvider>
  );
}

export default App;
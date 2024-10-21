import './App.css'
import Home from './routes/Home';
import Service from './routes/Service';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
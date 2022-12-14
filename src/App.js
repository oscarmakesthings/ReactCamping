import './App.css';
import Header from './components/Header.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import {Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchPartners } from './features/partners/partnersSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
}, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

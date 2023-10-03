import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { fetchCampsites } from "./features/campsites/campsitesSlice";
import { fetchPartners } from "./features/partners/partnersSlice";
import { fetchPromotions } from "./features/promotions/promotionsSlice";
import {fetchComments} from "./features/comments/commentsSlice"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

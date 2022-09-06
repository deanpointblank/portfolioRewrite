import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App page="about" />} />
      <Route path="skills" element={<App page="skills" />} />
      <Route path="work" element={<App page="work" />} />
      <Route path="contact" element={<App page="contact" />} />
      <Route path="*" element={<App page="404" />} />
    </Routes>
  </BrowserRouter>
)
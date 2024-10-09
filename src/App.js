import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home_page'; // Import HomePage
import AboutUsPage from './pages/about_us_page'; // Import AboutUsPage

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Redirect root ("/") to Home Page */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Home and About Us routes */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

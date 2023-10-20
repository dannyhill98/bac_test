import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginView from './views/login.view';
import TrackingView from './views/tracking.view';
import './css/app.style.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <nav><Link to="/login">Login View</Link>&nbsp;|&nbsp;
            <Link to="/tracking">Tracking View</Link>
          </nav>
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/tracking" element={<TrackingView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

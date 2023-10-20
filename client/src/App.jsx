import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './views/login.view';
import TrackingView from './views/tracking.view';
import './css/app.style.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app">
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

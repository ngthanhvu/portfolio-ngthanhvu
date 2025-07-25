import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

import Home from './pages/Home';
import PasswordGenerator from './pages/PasswordGenerator';

function App() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <Router>
      <Routes>
        {/* Public layout */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/genpass"
          element={
            <DefaultLayout>
              <PasswordGenerator />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

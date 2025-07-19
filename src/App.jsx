import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

import Home from './pages/Home';

function App() {
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
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/content" element={<h1>Content Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

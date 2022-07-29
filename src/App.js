import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/Login';
import ChooseCategory from './components/ChooseCategories';

import categoriesData from './categoryComponentsData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/categories" element={<ChooseCategory categoriesData={categoriesData} />} />
        <Route path="/create-invoice" element={<h1>Invoices Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/Login';
import ChooseCategory from './components/ChooseCategories';
import StartCreatingInvoice from './components/StartCreatingInvoice';
import ProcoeedWithInvoiceCreation from './components/ProceedWithInvoiceCreation';

import categoriesData from './categoryComponentsData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/categories" element={<ChooseCategory categoriesData={categoriesData} />} />
        <Route path="/create-invoice" element={<StartCreatingInvoice />} />
        <Route path="/proceed-with-invoice-creation" element={<ProcoeedWithInvoiceCreation />} />
      </Routes>
    </Router>
  );
}

export default App;

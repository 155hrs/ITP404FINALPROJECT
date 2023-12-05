import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import InventoryManagement from './components/InventoryManagement';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
import NavBar from './components/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import SubscriptionsPage from './components/SubscriptionsPage';
import EmployeesPage from './components/EmployeesPage';
import EmployeeDetail from './components/EmployeeDetail';
import CustomersReviewPage from './components/CustomersReviewPage';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/subscription" element={<SubscriptionsPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/employees/:employeeId" element={<EmployeeDetail />} />
        <Route path="/comments" element={<CustomersReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
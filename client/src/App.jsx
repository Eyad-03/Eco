import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Auth/LoginPage.jsx";
import RegisterPage from "../src//components/Auth/RegisterPage.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import DetailPage from "./components/DetailsPage.jsx";
import ProductsPage from "./components/ProductsPage.jsx";
import AdminDashboard from './components/Admin/AdminDashboard.jsx'
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./Context/UserContext.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/detailpage/:productId" element={<DetailPage />} />
              <Route path="/productspage/:catid" element={<ProductsPage />} />
              <Route path="/dashboard-admin" element={<AdminDashboard />} />
            </Routes>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

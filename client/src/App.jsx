import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Auth/LoginPage.jsx";
import RegisterPage from "../src//components/Auth/RegisterPage.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import DetailPage from "./components/DetailsPage.jsx";
import ProductsPage from "./components/ProductsPage.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import ProtectedRoutes from "./Routes/ProtectedRoutes.jsx";
import UserProtectRoutes from "./Routes/UserProtectRoutes.jsx";
import AdminProtectRoutes from "./Routes/AdminProtectedRoutes.jsx";
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
              <Route
                path="/"
                element={
                  <ProtectedRoutes>
                    <UserProtectRoutes>
                      <HomePage />
                    </UserProtectRoutes>
                  </ProtectedRoutes>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/about"
                element={
                  <ProtectedRoutes>
                    <UserProtectRoutes>
                      <AboutUs />
                    </UserProtectRoutes>
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/contact"
                element={
                  <ProtectedRoutes>
                    <UserProtectRoutes>
                      <ContactUs />
                    </UserProtectRoutes>
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/detailpage/:productId"
                element={
                  <ProtectedRoutes>
                    <UserProtectRoutes>
                      <DetailPage />
                    </UserProtectRoutes>
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/productspage/:catid"
                element={
                  <ProtectedRoutes>
                    <UserProtectRoutes>
                      <ProductsPage />
                    </UserProtectRoutes>
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/dashboard-admin"
                element={
                  <ProtectedRoutes>
                    <AdminProtectRoutes>
                      <AdminDashboard />
                    </AdminProtectRoutes>
                  </ProtectedRoutes>
                }
              />
            </Routes>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

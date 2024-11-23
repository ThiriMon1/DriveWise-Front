import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../features/hooks/useAuth";
import ForgotPasswordPage from "../pages/FogotPassword/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import Header from "../components/header/Header";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Inventories from "../pages/inventories/Inventories";
import InventoryDetail from "../pages/inventories/InventoryDetail";
import FavoritesPage from "../pages/favroite/FavoritesPage";
import ErrorPage from "../pages/Error/ErrorPage";
import Navbar from "../components/navbar/Navbar";
import CustViewReviewList from "../pages/customer/CustViewReviewList";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDashoardUsersOffers from "../pages/admin/AdminDashoardUsersOffers";
import CustViewOffer from "../pages/customer/CustViewOffer";
import WriteReviewPage from "../pages/WriteReviewPage";
import DriveReviewsPage from "../pages/DriveReviewsPage";
import PreInfoForReviewPage from "../pages/PreInfoForReviewPage";

const ProtectedRoute = () => {
  const { role, isLoggedIn } = useAuth();

  const viewBuyPageAccess = !isLoggedIn || (isLoggedIn && role === "CUSTOMER");
  const viewCustomerPageAccess = isLoggedIn && role === "CUSTOMER";
  // const viewOwnerPageAccess = isLoggedIn && role === "OWNER";
  const viewAdminPageAccess = isLoggedIn && role === "ADMIN";

  const RootComponent = () => {
    if (!isLoggedIn) return <HomePage />; // Assuming you have a different homepage for unauthorized users
    switch (role) {
      case "CUSTOMER":
        return <HomePage />;
      // case "OWNER":
      //   return <OwnerDashboard />
      case "ADMIN":
        return <AdminDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<RootComponent />} />

        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route
          path="/forgotPassword"
          element={!isLoggedIn ? <ForgotPasswordPage /> : <Navigate to="/" />}
        />

        <Route
          path="/users/favorites"
          element={
            viewCustomerPageAccess ? (
              <FavoritesPage />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />
        <Route
          path="/users/view-review-list"
          element={
            viewCustomerPageAccess ? (
              <CustViewReviewList />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />
        <Route
          path="/users/view-offer-list"
          element={
            viewCustomerPageAccess ? (
              <CustViewOffer />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />
        <Route
          path="/users/write-review"
          element={
            viewCustomerPageAccess ? (
              <WriteReviewPage />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />

        <Route
          path="/buy/used"
          element={
            viewBuyPageAccess ? (
              <Inventories />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />
        <Route
          path="/buy/new"
          element={
            viewBuyPageAccess ? (
              <Inventories />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />
        <Route
          path="/research/reviews"
          element={
            viewBuyPageAccess ? (
              <DriveReviewsPage />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />
        <Route
          path="/write-review"
          element={
            viewBuyPageAccess ? (
              <PreInfoForReviewPage />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />
        <Route
          path="/pre-info-favorite"
          element={
            viewBuyPageAccess ? (
              <PreInfoForReviewPage />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />

        <Route
          path="/cars/:id"
          element={
            viewBuyPageAccess ? (
              <InventoryDetail />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            viewAdminPageAccess ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />
        <Route
          path="/admin-dashboard/offers"
          element={
            viewAdminPageAccess ? (
              <AdminDashoardUsersOffers />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoute;

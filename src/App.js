import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "aos/dist/aos.css";
import "aos/dist/aos.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/style/fonts.css";
import "./assets/style/navbar-log-in.css";
import "./assets/style/checkout.css";
import "./assets/style/complete-checkout.css";
import "./assets/style/sidebar.css";
import "./assets/style/overview.css";
import "./assets/style/transactions.css";
import "./assets/style/transactions-detail.css";
import "./assets/style/404-not-found.css";
import "./assets/style/utilities.css";
// import "./assets/style/globals.css";
// import "./assets/style/Home.module.css";

import AOS from "aos";

import LandingPage from "./pages";
import DetailPage from "./pages/DetailPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpPhoto from "./pages/SignUpPhoto";
import SignUpSuccess from "./pages/SignUpSuccess";
import Checkout from "./pages/Checkout";
import CompleteCheckout from "./pages/CompleteCheckout";
import Overview from "./pages/member";
import Transactions from "./pages/member/transactions";
import DetailTransaction from "./pages/member/transactions/DetailTransaction";
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  useEffect(() => {
    //  AOS Animation
    AOS.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="detail-page">
          <Route path=":id" element={<DetailPage />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-up-photo" element={<SignUpPhoto />} />
        <Route path="sign-up-success" element={<SignUpSuccess />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="complete-checkout" element={<CompleteCheckout />} />

        <Route
          path="member"
          element={
            <PrivateRoute>
              <Overview />
            </PrivateRoute>
          }
        />
        <Route
          path="/member/transactions"
          element={
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/member/transactions">
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <DetailTransaction />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

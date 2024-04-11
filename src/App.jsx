import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Layout from "./Components/Layout";
import Home from "./Body/Home";
import Heroes from "./Body/Heroes";
import Contactus from "./Body/ContactUs";
import ForgetPassword from "./Auth/ForgetPassword";
import Dashboard from "./Dashboard/pages/DashBoard";
import Budget from "./Dashboard/pages/budget";
import Expenses from "./Dashboard/pages/expenses";
import Notification from "./Dashboard/pages/notification";
import Settings from "./Dashboard/pages/setting";
import DashBoard from "./Dashboard/pages/dashboad"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="forgetpass" element={<ForgetPassword />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="heroes" element={<Heroes />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="dashboard" element={<DashBoard/>} />
          <Route path="budget" element={<Budget />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

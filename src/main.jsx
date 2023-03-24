import React from "react";
import ReactDOM from "react-dom/client";
import"./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { DoctorProfilePage } from "./pages/DoctorProfilePage/DoctorProfilePage";
import Layout from "./components/Layout/Layout";
import {PrivateRoute} from './components/PrivateRoutes/PrivateRoute'
import { UserContextProvider } from '../src/Contexts/UserContext'

import {
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  PROFILE_PAGE,
  PAYMENT_PAGE,
  CHAT_PAGE,
  PROFILE_PAGE_EDIT,
} from "./constants/url";
import { ProfilePageEdit } from "./pages/ProfilePageEdit/ProfilePageEdit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={LOGIN_PAGE} element={<LoginPage />} />
          <Route path={REGISTER_PAGE} element={<RegisterPage />} />
          <Route path={PROFILE_PAGE} element={ <PrivateRoute><UserProfilePage /></PrivateRoute>} />
          <Route path={PROFILE_PAGE_EDIT} element={<PrivateRoute><ProfilePageEdit /></PrivateRoute>} />
          <Route path={PAYMENT_PAGE} element={<PrivateRoute><PaymentPage/></PrivateRoute>} />
          <Route path={CHAT_PAGE} element={<PrivateRoute><ChatPage /></PrivateRoute>} />
          <Route path="/doctor" element={<DoctorProfilePage />} />
          <Route path="*" element="404 NOT FOUND" />
          {/*Cuando se introduce una ruta que no existe*/}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

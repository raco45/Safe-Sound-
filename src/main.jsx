import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { DoctorProfilePage } from "./pages/DoctorProfilePage/DoctorProfilePage";
import { DoctorCredentials } from "./pages/RegisterPage/DoctorCredentials";
import { DoctorEdit } from "./pages/DoctorEdit/DoctorEdit"
import Layout from "./components/Layout/Layout";
import { PrivateRoute } from "./components/PrivateRoutes/PrivateRoute";
import { UserContextProvider } from "../src/Contexts/UserContext";
import {
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  PROFILE_PAGE,
  PAYMENT_PAGE,
  CHAT_PAGE,
  DOCTOR_CREDENTIALS,
  PROFILE_PAGE_EDIT,
  DOCTOR_EDIT,
  ADMIN_PAGE,
  DOCTOR_PROFILE
} from "./constants/url";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CLIENT_ID } from "./constants/paypal-info";
import { ChatContextProvider } from "./Contexts/ChatContext";
import { ProfilePageEdit } from "./pages/ProfilePageEdit/ProfilePageEdit";
import {AdminPage} from "./pages/AdminPage/AdminPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>

  <ChatContextProvider>
    
  <React.StrictMode>
  <PayPalScriptProvider
  options={{
    "client-id": CLIENT_ID,
  }}
>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={LOGIN_PAGE} element={<LoginPage />} />
          <Route path={DOCTOR_CREDENTIALS} element={<DoctorCredentials />} />
          <Route path={REGISTER_PAGE} element={<RegisterPage />} />
          <Route path={PROFILE_PAGE} element={ <PrivateRoute><UserProfilePage /></PrivateRoute>} />
          <Route path={PROFILE_PAGE_EDIT} element={<PrivateRoute><ProfilePageEdit /></PrivateRoute>} />
          <Route path={PAYMENT_PAGE} element={<PrivateRoute><PaymentPage/></PrivateRoute>} />
          <Route path={CHAT_PAGE} element={<PrivateRoute><ChatPage /></PrivateRoute>} />
          <Route path={DOCTOR_EDIT} element={<PrivateRoute><DoctorEdit /></PrivateRoute>}/>
          <Route path={ADMIN_PAGE} element={<PrivateRoute><AdminPage /></PrivateRoute>} />
          <Route path={DOCTOR_PROFILE} element={<DoctorProfilePage />} />
          <Route path="*" element="404 NOT FOUND" />
          {/*Cuando se introduce una ruta que no existe*/}
        </Route>
      </Routes>
    </BrowserRouter>
    </PayPalScriptProvider>
  </React.StrictMode>
  </ChatContextProvider>
  </UserContextProvider>
);

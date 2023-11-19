import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import Header from "./components/system/Header/Header"
import Footer from "./components/system/Footer/Footer"
import Login from "./components/system/Login/Login";
import { CssBaseline } from "@mui/material";
import VLibras from '@moreiraste/react-vlibras'

import { AppRoutes } from "./routes"
import { UserProvider } from './middlewares/UserContext';

export default function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  }

  const closeLoginModal = () => {
    setShowLoginModal(false);
  }

  return (
    <BrowserRouter>
      <UserProvider>                                       
        <CssBaseline />
        <Header openLoginModal={openLoginModal} />
        <VLibras forceOnload={true}/>
        <AppRoutes />
        <Footer />
        <Login showLoginModal={showLoginModal} closeLoginModal={closeLoginModal} />
      </UserProvider>
    </BrowserRouter>
  )
}
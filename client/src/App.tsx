import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import Header from "./components/system/Header/Header"
import Footer from "./components/system/Footer/Footer"
import Login from "./components/system/Login/Login";
import ResetaSenha from "./components/system/ResetaSenha/ResetaSenha";
import ArduinoModal from "./components/system/arduinoModal/arduinoModal";
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

  const [showResetaSenha, setShowResetaSenha] = useState(false);

  const openResetaSenha = () => {
    setShowLoginModal(false);
    setShowResetaSenha(true)
  }

  const closeResetarSenha = () => {
    setShowResetaSenha(false);
  }

  const [showArduinoModal, setArduinoModal] = useState(false);

  const openArduinoModal = () => {
      setArduinoModal(true);
  }

  const closeArduinoModal = () => {
      setArduinoModal(false);
  }

  return (
    <BrowserRouter>
      <UserProvider>
        <CssBaseline />
        <Header openLoginModal={openLoginModal} openArduinoModal={openArduinoModal} />
        <VLibras forceOnload={true} />
        <AppRoutes />
        <Footer />
        <Login showLoginModal={showLoginModal} closeLoginModal={closeLoginModal} openResetaSenha={openResetaSenha} />
        <ResetaSenha showResetarSenha={showResetaSenha} closeResetarSenha={closeResetarSenha} />
        <ArduinoModal showArduinoModal={showArduinoModal} closeArduinoModal={closeArduinoModal}/>
      </UserProvider>
    </BrowserRouter>
  )
}
import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import EditUserPage from "./pages/modules/user/editUserPage"
import ListUserPage from "./pages/modules/user/listUserPage"
import CreateUserPage from "./pages/modules/user/createUserPage"
import Home from "./pages/Home/Home"
import Acessibilidade_Pagina from "./pages/Acessibilidade/Acessibilidade"
import Explorar from "./pages/Explorar/Explorar"
import Perfil_Usuario from "./pages/modules/user/PerfilUsuario/Perfil_Usuario"
import Perfil_Favoritos from "./pages/modules/user/PerfilUsuario/PerfiUsuario/Perfil_Favoritos/Perfil_Favoritos"
import Perfil_Listas from "./pages/modules/user/PerfilUsuario/PerfiUsuario/Perfil_Listas/Perfil_Listas"
import Perfil_Contribuicoes from "./pages/modules/user/PerfilUsuario/PerfiUsuario/Perfil_Contribuicoes/Perfil_Contribuicoes"
import Perfil_Artista from "./pages/modules/user/PerfilArtista"
import Transcricao from "./pages/modules/transcription/Transcricao/Transcricao"
import UploadTab from "./pages/modules/transcription/UploadTab/UploadTab"
import Comunidades from "./pages/modules/community/Comunidades"
import Discussao from "./components/system/Discussao/Discussao"
import UploadTranscricao from "./pages/modules/transcription/UploadTranscricao/UploadTranscricao"
import Comunidade from "./pages/modules/community/Comunidade"
import Editar_Perfil from "./pages/modules/user/PerfilUsuario/EditarPerfil/Editar_Perfil"
import Cadastro from "./pages/Cadastro/Cadastro"
import Login from "./components/system/Login/Login"
import ResetaSenha from "./components/system/ResetaSenha/ResetaSenha"
import ListArtistPage from "./pages/modules/artist/listArtistPage"
import CreateArtistPage from "./pages/modules/artist/createArtistPage"
import EditArtistPage from "./pages/modules/artist/editArtistPage"
import CreateTranscriptionPage from "./pages/modules/transcription/createTranscriptionPage"
import ListTranscriptionPage from "./pages/modules/transcription/listTranscriptionPage"
import EditTranscriptionPage from "./pages/modules/transcription/editTranscriptionPage"
import CreatePostPage from "./pages/modules/post/createPostPage"
import EditPostPage from "./pages/modules/post/editPostPage"
import ListPostPage from "./pages/modules/post/listPostPage"
import ListCommentPage from "./pages/modules/comment/listCommentPage"
import CreateCommentPage from "./pages/modules/comment/createCommentPage"
import EditCommentPage from "./pages/modules/comment/editCommentPage"
import ListCommunityPage from "./pages/modules/community/listCommunityPage"
import CreateCommunityPage from "./pages/modules/community/createCommunityPage"
import EditCommunityPage from "./pages/modules/community/editCommunityPage"
import ListInstrumentPage from "./pages/modules/instrument/listInstrumentPage"
import CreateInstrumentPage from "./pages/modules/instrument/createInstrumentPage"
import EditInstrumentPage from "./pages/modules/instrument/editInstrumentPage"
import ListMessagePage from "./pages/modules/message/listMessagePage"
import CreateMessagePage from "./pages/modules/message/createMessagePage"
import EditMessagePage from "./pages/modules/message/editMessagePage"
import ListMusicPage from "./pages/modules/music/listMusicPage"
import CreateMusicPage from "./pages/modules/music/createMusicPage"
import EditMusicPage from "./pages/modules/music/editMusicPage"
import { UserProvider } from "./middlewares/user"
import AuthenticatePage from "./pages/modules/user/authenticateUser"

export function AppRoutes() {
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

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Acessibilidade" element={<Acessibilidade_Pagina />} />
        <Route path="/Explorar" element={<Explorar />} />
        <Route path="/Perfil" element={<Perfil_Usuario />} />
        <Route path="/Perfil/Favoritos" element={<Perfil_Favoritos />} />
        <Route path="/Perfil/Listas" element={<Perfil_Listas />} />
        <Route path="/Perfil/Contribuicoes" element={<Perfil_Contribuicoes />} />
        <Route path="/Perfil/EditarPerfil" element={<Editar_Perfil />} />
        <Route path="/PerfilArtista/:artista" element={<Perfil_Artista />} />
        <Route path="/Transcricao/:artista/:musica" element={<Transcricao />} />
        <Route path="/Cadastro" element={<Cadastro openLoginModal={openLoginModal} />} />
        <Route path="/UploadTabExplorar" element={<UploadTab />} />
        <Route path="/UploadTranscricao" element={<UploadTranscricao />} />
        <Route path="/Comunidades" element={<Comunidades />} />
        <Route path="/Comunidade" element={<Comunidade />} />
        <Route path="/Discussao" element={<Discussao />} />
        <Route path="/users" element={<ListUserPage />} />
        <Route path="/users/new" element={<CreateUserPage />} />
        <Route path="/users/:id" element={<EditUserPage />} />
        <Route path="/artists" element={<ListArtistPage />} />
        <Route path="/artists/new" element={<CreateArtistPage />} />
        <Route path="/artists/:id" element={<EditArtistPage />} />
        <Route path="/comment" element={<ListCommentPage />} />
        <Route path="/comment/new" element={<CreateCommentPage />} />
        <Route path="/comment/:id" element={<EditCommentPage />} />
        <Route path="/community" element={<ListCommunityPage />} />
        <Route path="/community/new" element={<CreateCommunityPage />} />
        <Route path="/community/:id" element={<EditCommunityPage />} />
        <Route path="/instrument" element={<ListInstrumentPage />} />
        <Route path="/instrument/new" element={<CreateInstrumentPage />} />
        <Route path="/instrument/:id" element={<EditInstrumentPage />} />
        <Route path="/message" element={<ListMessagePage />} />
        <Route path="/message/new" element={<CreateMessagePage />} />
        <Route path="/message/:id" element={<EditMessagePage />} />
        <Route path="/music" element={<ListMusicPage />} />
        <Route path="/music/new" element={<CreateMusicPage />} />
        <Route path="/music/:id" element={<EditMusicPage />} />
        <Route path="/post" element={<ListPostPage />} />
        <Route path="/post/new" element={<CreatePostPage />} />
        <Route path="/post/:id" element={<EditPostPage />} />
        <Route path="/transcription" element={<ListTranscriptionPage />} />
        <Route path="/transcription/new" element={<CreateTranscriptionPage />} />
        <Route path="/transcription/:id" element={<EditTranscriptionPage />} />
        <Route path="/login" element={<AuthenticatePage />} />
      </Routes> 
      <Login showLoginModal={showLoginModal} closeLoginModal={closeLoginModal} openResetaSenha={openResetaSenha} />
      <ResetaSenha showResetarSenha={showResetaSenha} closeResetarSenha={closeResetarSenha} />
    </UserProvider>
  )
}
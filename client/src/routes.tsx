import React from "react"
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
import UploadTranscricao from "./pages/modules/transcription/UploadTranscricao/UploadTranscricao"
import Comunidade from "./pages/modules/community/Comunidade"
import Editar_Perfil from "./pages/modules/user/PerfilUsuario/EditarPerfil/Editar_Perfil"
import Cadastro from "./pages/Cadastro/Cadastro"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Acessibilidade" element={<Acessibilidade_Pagina/>}/>
      <Route path="/Explorar" element={<Explorar />} />
      <Route path="/Perfil" element={<Perfil_Usuario />} />
      <Route path="/Perfil/Favoritos" element={<Perfil_Favoritos />} />
      <Route path="/Perfil/Listas" element={<Perfil_Listas />} />
      <Route path="/Perfil/Contribuicoes" element={<Perfil_Contribuicoes />} />
      <Route path="/Perfil/EditarPerfil" element={<Editar_Perfil/>} />
      <Route path="/PerfilArtista/:artista" element={<Perfil_Artista />} />
      <Route path="/Transcricao/:artista/:musica" element={<Transcricao />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/UploadTabExplorar" element={<UploadTab />} />
      <Route path="/UploadTranscricao" element={<UploadTranscricao/>}/>
      <Route path="/Comunidades" element={<Comunidades />} />
      <Route path="/Comunidade" element={<Comunidade />} />
      <Route path="/users" element={<ListUserPage />} />
      <Route path="/users/new" element={<CreateUserPage />} />
      <Route path="/users/:id" element={<EditUserPage />} />
    </Routes>
  )
}
import { Route, Routes } from "react-router-dom"
import EditUserPage from "./pages/modules/user/editUserPage"
import ListUserPage from "./pages/modules/user/listUserPage"
import CreateUserPage from "./pages/modules/user/createUserPage"


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/users" element={<ListUserPage />} />
        <Route path="/users/new" element={<CreateUserPage />} />
        <Route path="/users/:id" element={<EditUserPage />} />
      </Route>
    </Routes>
  )
}
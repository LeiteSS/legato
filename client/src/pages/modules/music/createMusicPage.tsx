import { Paper, Stack } from "@mui/material"

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form"

const CreateMusicPage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Criar Novo Music" />
        <Breadcrumbs
          path={[{ label: "Musics", to: "/Musics/" }, { label: "Novo" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default CreateMusicPage;
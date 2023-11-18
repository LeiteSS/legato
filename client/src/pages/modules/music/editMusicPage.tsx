import { Paper, Stack } from "@mui/material";

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form";

const EditMusicPage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Editar Music" />
        <Breadcrumbs
          path={[{ label: "Musics", to: "/Music/" }, { label: "Editar" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default EditMusicPage;
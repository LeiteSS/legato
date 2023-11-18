import { Paper, Stack } from "@mui/material";

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form";

const EditCommunityPage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Editar Community" />
        <Breadcrumbs
          path={[{ label: "Communities", to: "/communities/" }, { label: "Editar" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default EditCommunityPage;
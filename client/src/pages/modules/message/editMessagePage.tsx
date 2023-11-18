import { Paper, Stack } from "@mui/material";

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form";

const EditMessagePage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Editar Message" />
        <Breadcrumbs
          path={[{ label: "Messages", to: "/Message/" }, { label: "Editar" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default EditMessagePage;
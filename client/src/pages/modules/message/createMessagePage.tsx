import { Paper, Stack } from "@mui/material"

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form"

const CreateMessagePage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Criar Novo Message" />
        <Breadcrumbs
          path={[{ label: "Messages", to: "/Messages/" }, { label: "Novo" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default CreateMessagePage;
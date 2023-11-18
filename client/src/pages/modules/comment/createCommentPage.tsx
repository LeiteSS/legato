import { Paper, Stack } from "@mui/material"

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form"

const CreateCommentPage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Criar Novo Comment" />
        <Breadcrumbs
          path={[{ label: "Comments", to: "/comments/" }, { label: "Novo" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default CreateCommentPage;
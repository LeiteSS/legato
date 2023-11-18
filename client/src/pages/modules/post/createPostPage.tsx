import { Paper, Stack } from "@mui/material"

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form"

const CreatePostPage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Criar Novo Post" />
        <Breadcrumbs
          path={[{ label: "Posts", to: "/Posts/" }, { label: "Novo" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default CreatePostPage;
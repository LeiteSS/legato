import { Paper, Stack } from "@mui/material";

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form";

const EditPostPage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Editar Post" />
        <Breadcrumbs
          path={[{ label: "Posts", to: "/Post/" }, { label: "Editar" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default EditPostPage;
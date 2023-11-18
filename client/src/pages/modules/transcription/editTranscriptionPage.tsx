import { Paper, Stack } from "@mui/material";

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Form from "./components/Form";

const EditTranscriptionPage = () => {
  return (
    <>
      <Stack sx={{ marginBottom: 2 }}>
        <PageTitle title="Editar Transcription" />
        <Breadcrumbs
          path={[{ label: "Transcriptions", to: "/Transcription/" }, { label: "Editar" }]}
        />
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </>
  )
}

export default EditTranscriptionPage;
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Paper, Stack } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

import Breadcrumbs from "../../../components/advanced/Breadcrumbs/Breadcrumbs";
import PageTitle from "../../../components/advanced/PageTitle/PageTitle";

import Grid from "./components/Grid"

const ListInstrumentPage = () => {
  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} gap={1} mb={2}>
        <Box sx={{ flexGrow: 1 }}>
          <PageTitle title="Lista" />
          <Breadcrumbs
            path={[{ label: "Instrument", to: "/Instruments" }, { label: "Lista" }]}
          />
        </Box>
        <Box sx={{ alignSelf: "center" }}>
          <Button
            component={RouterLink}
            to="/Instruments/new"
            variant="contained"
            startIcon={<AddIcon />}
          >
            Novo Instrument
          </Button>
        </Box>
      </Stack>
      <Paper>
        <Grid />
      </Paper>
    </>
  )
}

export default ListInstrumentPage;
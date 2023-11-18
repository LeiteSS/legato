import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Stack } from "@mui/material"
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

import DataTable from "../../../../components/advanced/DataTable/DataTable"

import { Instrument } from "../../../../models/modules/Instrument/Instrument";

const Grid = () => {
  const [Instruments, setInstruments] = useLocalStorage<Instrument[]>("Instrument", [])
  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    navigate(`/Instrument/${params.row.id}`);
  }

  const onDelete = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    setInstruments(users.filter((Instrument) => Instrument.id !== params.row.id));
  }

  const columns: GridColDef<Instrument>[] = [
    { field: "id", headerName: "ID", width: 70 },
{ field: "instrumentName", headerName: "instrumentName", width: 180 },{ field: "instrumentType", headerName: "instrumentType", width: 180 },    {// actions
      field: "actions",
      headerName: "Ações",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={2}>
    
          <IconButton color="info" size="small" onClick={() => onEdit(params)}>
            <EditIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            color="error"
            size="small"
            onClick={() => onDelete(params)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ]

  return <DataTable columns={columns} rows={Instruments as Instrument[]} />
}

export default Grid;
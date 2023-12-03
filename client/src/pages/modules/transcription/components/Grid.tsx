import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Stack } from "@mui/material"
import {
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

import DataTable from "../../../../components/advanced/DataTable/DataTable"

import { Transcription } from "../../../../models/modules/transcription/Transcription";
import React from "react"

const Grid = () => {
  const [transcriptions, setTranscriptions] = useLocalStorage<Transcription[]>("Transcription", [])
  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    navigate(`/transcription/${params.row.id}`);
  }

  const onDelete = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    setTranscriptions(transcriptions.filter((transcription) => transcription.id !== params.row.id));
  }

  const columns: GridColDef<Transcription>[] = [
    { field: "id", headerName: "ID", width: 70 },
{ field: "titleMusic", headerName: "titleMusic", width: 180 },{ field: "file", headerName: "file", width: 180 },{ field: "genre", headerName: "genre", width: 180 },{ field: "difficult", headerName: "difficult", width: 180 },{ field: "instrument", headerName: "instrument", width: 180 },    {// actions
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

  return <DataTable columns={columns} rows={transcriptions as Transcription[]} />
}

export default Grid;
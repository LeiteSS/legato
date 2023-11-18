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

import { Music } from "../../../../models/modules/Music/Music";

const Grid = () => {
  const [Musics, setMusics] = useLocalStorage<Music[]>("Music", [])
  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    navigate(`/Music/${params.row.id}`);
  }

  const onDelete = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    setMusics(users.filter((Music) => Music.id !== params.row.id));
  }

  const columns: GridColDef<Music>[] = [
    { field: "id", headerName: "ID", width: 70 },
{ field: "title", headerName: "title", width: 180 },{ field: "artist", headerName: "artist", width: 180 },{ field: "date", headerName: "date", width: 180 },{ field: "album", headerName: "album", width: 180 },    {// actions
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

  return <DataTable columns={columns} rows={Musics as Music[]} />
}

export default Grid;
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
import { Artist } from "../../../../models/modules/artist/Artist"


const Grid = () => {
  const [artists, setArtists] = useLocalStorage<Artist[]>("Artist", [])
  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    navigate(`/Artist/${params.row.id}`);
  }

  const onDelete = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    setArtists(artists.filter((artist) => artist.id !== params.row.id));
  }

  const columns: GridColDef<Artist>[] = [
    { field: "id", headerName: "ID", width: 70 },
{ field: "name", headerName: "name", width: 180 },{ field: "genre", headerName: "genre", width: 180 },{ field: "followers", headerName: "followers", width: 180 },{ field: "biography", headerName: "biography", width: 180 },    {// actions
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

  return <DataTable columns={columns} rows={artists as Artist[]} />
}

export default Grid;
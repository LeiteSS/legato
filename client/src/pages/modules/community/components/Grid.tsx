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
import { Community } from "../../../../models/modules/community/Community"

const Grid = () => {
  const [communities, setCommunities] = useLocalStorage<Community[]>("Communities", [])
  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    navigate(`/Community/${params.row.id}`);
  }

  const onDelete = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    setCommunities(communities.filter((community) => community.id !== params.row.id));
  }

  const columns: GridColDef<Community>[] = [
    { field: "id", headerName: "ID", width: 70 },
{ field: "name", headerName: "name", width: 180 },{ field: "description", headerName: "description", width: 180 },{ field: "topic", headerName: "topic", width: 180 },{ field: "rules", headerName: "rules", width: 180 },{ field: "users", headerName: "users", width: 180 },    {// actions
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

  return <DataTable columns={columns} rows={communities as Community[]} />
}

export default Grid;
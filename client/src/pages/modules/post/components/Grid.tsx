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

import { Post } from "../../../../models/modules/Post/Post";

const Grid = () => {
  const [Posts, setPosts] = useLocalStorage<Post[]>("Post", [])
  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    navigate(`/Post/${params.row.id}`);
  }

  const onDelete = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    setPosts(users.filter((Post) => Post.id !== params.row.id));
  }

  const columns: GridColDef<Post>[] = [
    { field: "id", headerName: "ID", width: 70 },
{ field: "user", headerName: "user", width: 180 },{ field: "caption", headerName: "caption", width: 180 },{ field: "file", headerName: "file", width: 180 },{ field: "comments", headerName: "comments", width: 180 },{ field: "likes", headerName: "likes", width: 180 },{ field: "reactions", headerName: "reactions", width: 180 },    {// actions
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

  return <DataTable columns={columns} rows={Posts as Post[]} />
}

export default Grid;
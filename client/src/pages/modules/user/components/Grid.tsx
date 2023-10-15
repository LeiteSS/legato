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

import { User } from "../../../../models/modules/user/User";

const Grid = () => {
  const [users, setUsers] = useLocalStorage<User[]>("user", [])
  const navigate = useNavigate()

  const onEdit = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    navigate(`/users/${params.row.id}`);
  }

  const onDelete = (params: GridRenderCellParams) => {
    if (!params.row.id) return
    setUsers(users.filter((user) => user.id !== params.row.id));
  }

  const columns: GridColDef<User>[] = [
    { field: "id", headerName: "ID", width: 70 },
{ field: "name", headerName: "name", width: 180 },{ field: "lastname", headerName: "lastname", width: 180 },{ field: "email", headerName: "email", width: 180 },{ field: "password", headerName: "password", width: 180 },{ field: "accountType", headerName: "accountType", width: 180 },{ field: "datebirth", headerName: "datebirth", width: 180 },    {// actions
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

  return <DataTable columns={columns} rows={users as User[]} />
}

export default Grid;
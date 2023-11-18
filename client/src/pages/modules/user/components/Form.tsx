import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

import FormTitle from "../../../../components/advanced/FormTitle/FormTitle";

import UserSchema from "../../../../hooks/modules/user/schemas/userSchema";

import { User } from "../../../../models/modules/user/User";
import getByIdUser from "../../../../hooks/modules/user/get_by_id/getByIdUserHook";
import createUser from "../../../../hooks/modules/user/create/createUserHook";
import updateUser from "../../../../hooks/modules/user/update/updateUserHook";

const Form = () => {
  const [user, setUser] = useState<User>();
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm<User>({
    resolver: yupResolver(UserSchema),
  })

	const findUser = async () => {
		const user = await getByIdUser(id!);
		setUser(user);
	}

	const newUser = async (data: User) => {
		const user = await createUser(data);
		setUser(user!);
	}

	const editUser = async (id: string, data: User) => {
		const user = await updateUser(id, data);
		console.log(user);
		setUser(user!);
	}

  useEffect(() => {
    if (!id) return

    findUser();

  });

  const onSubmit = (data: User) => {
    if (!id) {
			newUser(data);
    } else {
			editUser(id, data);
		}

    navigate("/users/")
  }

  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: 2 }}
    >{/* Box start */}
      <FormTitle title="%title%" />

					<Stack
				direction="row"
				alignItems="center"
				spacing={1}
				sx={{ marginBottom: 2, width: 250 }}
			>
					<Controller
							control={control}
							name="name"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="name"
									error={!!errors.name}
									helperText={errors.name?.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>
					<Stack
				direction="row"
				alignItems="center"
				spacing={1}
				sx={{ marginBottom: 2, width: 250 }}
			>
					<Controller
							control={control}
							name="lastname"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="lastname"
									error={!!errors.lastname}
									helperText={errors.lastname?.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>
					<Stack
				direction="row"
				alignItems="center"
				spacing={1}
				sx={{ marginBottom: 2, width: 250 }}
			>
					<Controller
							control={control}
							name="email"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="email"
									error={!!errors.email}
									helperText={errors.email?.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>
					<Stack
				direction="row"
				alignItems="center"
				spacing={1}
				sx={{ marginBottom: 2, width: 250 }}
			>
					<Controller
							control={control}
							name="password"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="password"
									error={!!errors.password}
									helperText={errors.password?.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>
					<Stack
				direction="row"
				alignItems="center"
				spacing={1}
				sx={{ marginBottom: 2, width: 250 }}
			>
					<Controller
							control={control}
							name="accountType"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="accountType"
									error={!!errors.accountType}
									helperText={errors.accountType?.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>
					<Stack
				direction="row"
				alignItems="center"
				spacing={1}
				sx={{ marginBottom: 2, width: 250 }}
			>
					<Controller
							control={control}
							name="datebirth"
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="datebirth"
									error={!!errors.datebirth}
									helperText={errors.datebirth?.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>      
					<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
						<Button type="submit" variant="contained" size="large">
							Salvar User
						</Button>
						<Button component={RouterLink} to="/user">
							Cancelar
						</Button>
      </Stack>
    </Box>
  )
}

export default Form;
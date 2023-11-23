import Wallpaper from "../../assets/Cadastro_wallpaper.jpg"
import './Cadastro.css';
import { yupResolver } from "@hookform/resolvers/yup";

import {
	Box,
	Button,
	FormControl,
	Paper,
	Stack,
	TextField,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

import UserSchema from "../../hooks/modules/user/schemas/userSchema";

import { User } from "../../models/modules/user/User";
import React, { useState } from "react";
import createUser from "../../hooks/modules/user/create/createUserHook";

const Cadastro = () => {
	const [user, setUser] = useState<User>();
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

	const onSubmit = (data: User) => {
		console.log(data)
		newUser(data);

		navigate("/users/")
	}

	const newUser = async (data: User) => {
		const user = await createUser(data);
		setUser(user!);
	}

	return (
		<Paper>
			<main className='PaginaCadastro'>
				<div className='Side-Background'>
					<img className='Background' src={Wallpaper} alt="" />
					<p>Cadastre-se </p>
					<h3>E tenha acesso às nossas comunidades.</h3>

				</div>
				<div className='Cadastro'>

					<Box
						component="form"
						className="form"
						noValidate
						onSubmit={handleSubmit(onSubmit)}
						sx={{ p: 2 }}
					>
						<h2>Cadastre-se</h2>
						<Stack
							direction="row"
							alignItems="center"
							spacing={1}
						>
							<Controller
								control={control}
								name="name"
								defaultValue=""
								render={({ field: { ...field } }) => (
									<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
										<label>Nome</label>
										<TextField
											className="textField"
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

						>
							<Controller
								control={control}
								name="email"
								defaultValue=""
								render={({ field: { ...field } }) => (
									<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
										<label>Email</label>
										<TextField
											type={"email"}
											className="textField"
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

						>
							<Controller
								control={control}
								name="password"
								defaultValue=""
								render={({ field: { ...field } }) => (
									<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
										<label>Senha</label>
										<TextField
											type="password"
											className="textField"
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

						>
							<Controller
								control={control}
								name="accountType"
								defaultValue=""
								render={({ field: { ...field } }) => (
									<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
										<label>Tipo da conta</label>
										<TextField
											className="textField"
											error={!!errors.accountType}
											helperText={errors.accountType?.message}
											{...field}
										/>
									</FormControl>
								)}
							/>
						</Stack>
						<Stack direction={{ xs: "column", sm: "row" }} sx={{ marginBottom: 2 }}>
							<Button type="submit" variant="contained" size="large">
								Salvar User
							</Button>
						</Stack>
						<div className='redirecionamento'>
							<p>Já tem conta?</p> <a href="">Entre</a>
						</div>
					</Box>
				</div>
			</main>
		</Paper>

	)
}



export default Cadastro;
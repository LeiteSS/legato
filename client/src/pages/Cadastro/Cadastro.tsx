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
import React from "react";

const Cadastro = ({ }) => {
    const [users, setUsers] = useLocalStorage<User[]>("user", [])
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

    const onSubmit = (data: User) => {
        if (!id) {
            setUsers([...users, { ...data, id: `${users.length + 1}` }]);
        } else {
            const newUsers = [...users]
            const userIndex = users.findIndex((user) => user.id === id);
            newUsers[userIndex] = { ...data, id }

            setUsers(newUsers);
        }

        navigate("/Users/")
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
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ p: 2 }}
                    >{/* Box start */}
                        <h2>Cadastre-se</h2>
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

                        <Controller
                            control={control}
                            name="email"
                            defaultValue=""
                            render={({ field: { ...field } }) => (
                                <FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
                                    <label>Email</label>
                                    <TextField
                                        className="textField"
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        {...field}
                                    />
                                </FormControl>
                            )}
                        />
                        <Stack
                            className="Senha"
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{ marginBottom: 2 }}
                        >
                            <Controller
                                control={control}
                                name="password"
                                defaultValue=""
                                render={({ field: { ...field } }) => (
                                    <FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
                                        <label>Senha</label>
                                        <TextField
                                            className="textField"
                                            error={!!errors.password}
                                            helperText={errors.password?.message}
                                            {...field}
                                        />
                                    </FormControl>
                                )}
                            />
                            {/* <Controller
                            control={control}
                            name="password"
                            defaultValue=""
                            render={({ field: { ...field } }) => (
                                <FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
                                    <label>Repetir Senha</label>
                                    <TextField
                                        className="textField"
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                        {...field}
                                    />
                                </FormControl>
                            )}
                            />*/}
                        </Stack>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
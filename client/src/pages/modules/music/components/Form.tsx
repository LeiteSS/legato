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

import { MusicSchema } from "../../../../hooks/modules/Music/schemas/userSchema";

import { Music } from "../../../../models/modules/Music/Music";

const Form = () => {
  const [Musics, setMusics] = useLocalStorage<Music[]>("Music", [])
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
    resolver: yupResolver(MusicSchema),
  })

  //const [zipCodeFounded, setZipCodeFounded] = useState<boolean>()

  // useEffect(() => {
  //   if (!id) return

  //   const Music = %domai%s.find((Music) => Music.id === id)

  //   if (!Music) return

  //   setValue("%attribute%", Music.%attribute%)

  // }, [id, setValue, Musics])

  const onSubmit = (data: Music) => {
    if (!id) {
      setMusics([...Musics, { ...data, id: `${Musics.length + 1}` }]);
    } else {
      const newMusics = [...Musics]
      const MusicIndex = Musics.findIndex((Music) => Music.id === id);
      newUsers[MusicIndex] = { ...data, id }

      setUsers(newMusics);
    }

    navigate("/Musics/")
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
							name="title"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="title
									 error={!!errors.title}
									helperText={errors.title.message}
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
							name="artist"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="artist
									 error={!!errors.artist}
									helperText={errors.artist.message}
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
							name="date"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="date
									 error={!!errors.date}
									helperText={errors.date.message}
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
							name="album"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="album
									 error={!!errors.album}
									helperText={errors.album.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button type="submit" variant="contained" size="large">
          Salvar Music
        </Button>
        <Button component={RouterLink} to="/Music">
          Cancelar
        </Button>
      </Stack>
    </Box>
  )
}

export default Form;
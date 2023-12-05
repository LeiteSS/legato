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
import { Artist } from "../../../../models/modules/artist/Artist";
import ArtistSchema from "../../../../hooks/modules/artist/schemas/artistSchema";
import React from "react";



const Form = () => {
  const [Artists, setArtists] = useLocalStorage<Artist[]>("Artist", [])
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm<Artist>({
    resolver: yupResolver(ArtistSchema),
  })

  //const [zipCodeFounded, setZipCodeFounded] = useState<boolean>()

  // useEffect(() => {
  //   if (!id) return

  //   const Artist = %domai%s.find((Artist) => Artist.id === id)

  //   if (!Artist) return

  //   setValue("%attribute%", Artist.%attribute%)

  // }, [id, setValue, Artists])

  const onSubmit = (data: Artist) => {
    if (!id) {
      setArtists([...Artists, { ...data, id: `${Artists.length + 1}` }]);
    } else {
      const newArtists = [...Artists]
      const ArtistIndex = Artists.findIndex((Artist) => Artist.id === id);
      newArtists[ArtistIndex] = { ...data, id }

      setArtists(newArtists);
    }

    navigate("/artists/")
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
							name="genre"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="genre"
									error={!!errors.genre}
									helperText={errors.genre?.message}
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
							name="followers"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="followers"
									error={!!errors.followers}
									helperText={errors.followers?.message}
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
							name="biography"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="biography"
									error={!!errors.biography}
									helperText={errors.biography?.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button type="submit" variant="contained" size="large">
          Salvar Artist
        </Button>
        <Button component={RouterLink} to="/artists">
          Cancelar
        </Button>
      </Stack>
    </Box>
  )
}

export default Form;
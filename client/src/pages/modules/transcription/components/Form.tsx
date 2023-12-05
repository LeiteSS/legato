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

import TranscriptionSchema from "../../../../hooks/modules/transcription/schemas/transcriptionSchema";

import { Transcription } from "../../../../models/modules/transcription/Transcription";
import React from "react";

const Form = () => {
  const [transcriptions, setTranscriptions] = useLocalStorage<Transcription[]>("Transcription", [])
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm<Transcription>({
    resolver: yupResolver(TranscriptionSchema),
  })

  //const [zipCodeFounded, setZipCodeFounded] = useState<boolean>()

  // useEffect(() => {
  //   if (!id) return

  //   const Transcription = %domai%s.find((Transcription) => Transcription.id === id)

  //   if (!Transcription) return

  //   setValue("%attribute%", Transcription.%attribute%)

  // }, [id, setValue, Transcriptions])

  const onSubmit = (data: Transcription) => {
    if (!id) {
      setTranscriptions([...transcriptions, { ...data, id: `${transcriptions.length + 1}` }]);
    } else {
      const newTranscriptions = [...transcriptions]
      const transcriptionIndex = transcriptions.findIndex((transcription) => transcription.id === id);
      newTranscriptions[transcriptionIndex] = { ...data, id }

      setTranscriptions(newTranscriptions);
    }

    navigate("/transcription/")
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
							name="titleMusic"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="titleMusic"
									error={!!errors.titleMusic!}
									helperText={errors.titleMusic?.message}
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
							name="file"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="file"
									error={!!errors.file!}
									helperText={errors.file?.message}
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
							name="difficult"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="difficult"
									error={!!errors.difficult}
									helperText={errors.difficult?.message}
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
							name="instrument"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="instrument"
									error={!!errors.instrument}
									helperText={errors.instrument?.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button type="submit" variant="contained" size="large">
          Salvar Transcription
        </Button>
        <Button component={RouterLink} to="/transcription">
          Cancelar
        </Button>
      </Stack>
    </Box>
  )
}

export default Form;
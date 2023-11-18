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

import { InstrumentSchema } from "../../../../hooks/modules/Instrument/schemas/userSchema";

import { Instrument } from "../../../../models/modules/Instrument/Instrument";

const Form = () => {
  const [Instruments, setInstruments] = useLocalStorage<Instrument[]>("Instrument", [])
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
    resolver: yupResolver(InstrumentSchema),
  })

  //const [zipCodeFounded, setZipCodeFounded] = useState<boolean>()

  // useEffect(() => {
  //   if (!id) return

  //   const Instrument = %domai%s.find((Instrument) => Instrument.id === id)

  //   if (!Instrument) return

  //   setValue("%attribute%", Instrument.%attribute%)

  // }, [id, setValue, Instruments])

  const onSubmit = (data: Instrument) => {
    if (!id) {
      setInstruments([...Instruments, { ...data, id: `${Instruments.length + 1}` }]);
    } else {
      const newInstruments = [...Instruments]
      const InstrumentIndex = Instruments.findIndex((Instrument) => Instrument.id === id);
      newUsers[InstrumentIndex] = { ...data, id }

      setUsers(newInstruments);
    }

    navigate("/Instruments/")
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
							name="instrumentName"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="instrumentName
									 error={!!errors.instrumentName}
									helperText={errors.instrumentName.message}
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
							name="instrumentType"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="instrumentType
									 error={!!errors.instrumentType}
									helperText={errors.instrumentType.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button type="submit" variant="contained" size="large">
          Salvar Instrument
        </Button>
        <Button component={RouterLink} to="/Instrument">
          Cancelar
        </Button>
      </Stack>
    </Box>
  )
}

export default Form;
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

import { MessageSchema } from "../../../../hooks/modules/Message/schemas/userSchema";

import { Message } from "../../../../models/modules/Message/Message";

const Form = () => {
  const [Messages, setMessages] = useLocalStorage<Message[]>("Message", [])
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
    resolver: yupResolver(MessageSchema),
  })

  //const [zipCodeFounded, setZipCodeFounded] = useState<boolean>()

  // useEffect(() => {
  //   if (!id) return

  //   const Message = %domai%s.find((Message) => Message.id === id)

  //   if (!Message) return

  //   setValue("%attribute%", Message.%attribute%)

  // }, [id, setValue, Messages])

  const onSubmit = (data: Message) => {
    if (!id) {
      setMessages([...Messages, { ...data, id: `${Messages.length + 1}` }]);
    } else {
      const newMessages = [...Messages]
      const MessageIndex = Messages.findIndex((Message) => Message.id === id);
      newUsers[MessageIndex] = { ...data, id }

      setUsers(newMessages);
    }

    navigate("/Messages/")
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
							name="destination"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="destination
									 error={!!errors.destination}
									helperText={errors.destination.message}
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
							name="source"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="source
									 error={!!errors.source}
									helperText={errors.source.message}
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
							name="content"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="content
									 error={!!errors.content}
									helperText={errors.content.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button type="submit" variant="contained" size="large">
          Salvar Message
        </Button>
        <Button component={RouterLink} to="/Message">
          Cancelar
        </Button>
      </Stack>
    </Box>
  )
}

export default Form;
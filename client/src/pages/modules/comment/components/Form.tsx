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

import CommentSchema from "../../../../hooks/modules/comment/schemas/commentSchema";
import { Comment } from "../../../../models/modules/comment/Comment";
import React from "react";

const Form = () => {
  const [comments, setComments] = useLocalStorage<Comment[]>("Comments", [])
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm<Comment>({
    resolver: yupResolver(CommentSchema),
  })

  //const [zipCodeFounded, setZipCodeFounded] = useState<boolean>()

  // useEffect(() => {
  //   if (!id) return

  //   const Comment = %domai%s.find((Comment) => Comment.id === id)

  //   if (!Comment) return

  //   setValue("%attribute%", Comment.%attribute%)

  // }, [id, setValue, Comments])

  const onSubmit = (data: Comment) => {
    if (!id) {
      setComments([...comments, { ...data, id: `${comments.length + 1}` }]);
    } else {
      const newComments = [...comments]
      const commentIndex = comments.findIndex((comment) => comment.id === id);
      newComments[commentIndex] = { ...data, id }

      setComments(newComments);
    }

    navigate("/comments/")
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
							name="user"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="user"
									error={!!errors.user}
									helperText={errors.user!.message}
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
									label="content"
									error={!!errors.content}
									helperText={errors.content!.message}
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
							name="replies"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="replies"
									error={!!errors.replies}
									helperText={errors.replies!.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button type="submit" variant="contained" size="large">
          Salvar Comment
        </Button>
        <Button component={RouterLink} to="/Comment">
          Cancelar
        </Button>
      </Stack>
    </Box>
  )
}

export default Form;
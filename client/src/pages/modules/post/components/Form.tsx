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

import { PostSchema } from "../../../../hooks/modules/Post/schemas/userSchema";

import { Post } from "../../../../models/modules/Post/Post";

const Form = () => {
  const [Posts, setPosts] = useLocalStorage<Post[]>("Post", [])
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
    resolver: yupResolver(PostSchema),
  })

  //const [zipCodeFounded, setZipCodeFounded] = useState<boolean>()

  // useEffect(() => {
  //   if (!id) return

  //   const Post = %domai%s.find((Post) => Post.id === id)

  //   if (!Post) return

  //   setValue("%attribute%", Post.%attribute%)

  // }, [id, setValue, Posts])

  const onSubmit = (data: Post) => {
    if (!id) {
      setPosts([...Posts, { ...data, id: `${Posts.length + 1}` }]);
    } else {
      const newPosts = [...Posts]
      const PostIndex = Posts.findIndex((Post) => Post.id === id);
      newUsers[PostIndex] = { ...data, id }

      setUsers(newPosts);
    }

    navigate("/Posts/")
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
									label="user
									 error={!!errors.user}
									helperText={errors.user.message}
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
							name="caption"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="caption
									 error={!!errors.caption}
									helperText={errors.caption.message}
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
									label="file
									 error={!!errors.file}
									helperText={errors.file.message}
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
							name="comments"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="comments
									 error={!!errors.comments}
									helperText={errors.comments.message}
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
							name="likes"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="likes
									 error={!!errors.likes}
									helperText={errors.likes.message}
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
							name="reactions"
							defaultValue=""
							render={({ field: { ...field } }) => (
								<FormControl fullWidth={true} sx={{ marginBottom: 2 }}>
									<TextField
									label="reactions
									 error={!!errors.reactions}
									helperText={errors.reactions.message}
									{...field}
								/>
							</FormControl>
						)}
					/>
					</Stack>      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button type="submit" variant="contained" size="large">
          Salvar Post
        </Button>
        <Button component={RouterLink} to="/Post">
          Cancelar
        </Button>
      </Stack>
    </Box>
  )
}

export default Form;
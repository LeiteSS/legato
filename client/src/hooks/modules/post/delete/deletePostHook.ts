import { Post } from "../../../../models/modules/post/Post"
import api from "../../../../service/api";

export async function deletePost(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/post/${id}`);

    return response.data as Post;
  } catch (error) {

    return null;
  }
}

export default deletePost;
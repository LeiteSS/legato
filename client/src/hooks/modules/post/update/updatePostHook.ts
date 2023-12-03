import { Post } from "../../../../models/modules/post/Post"
import api from "../../../../service/api";

export async function updatePost(
  id: string,
  post: Post,
): Promise<Post | null> {
  try {
    const response = await api.put(`/api/v1/post/${id}`, post);

    return response.data as Post;
  } catch (error) {

    return null;
  }
}

export default updatePost;
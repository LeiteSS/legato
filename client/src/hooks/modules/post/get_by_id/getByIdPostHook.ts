import { Post } from "../../../../models/modules/post/Post"
import api from "../../../../service/api";

async function getByIdPost(
  id: string,
): Promise<Post | null> {
  try {
    const response = await api.get(`/api/v1/post/${id}`);

    return response.data as Post;
  } catch (error) {

    return null;
  }
}

export default getByIdPost;
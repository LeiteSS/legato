import { Post } from "../../../../models/modules/post/Post"
import api from "../../../../service/api";

async function createPost(
  post: Post,
): Promise<Post | null> {
  try {
    const response = await api.post('/api/v1/post', post);

    return response.data as Post;
  } catch (error) {

    return null;
  }
}

export default createPost;
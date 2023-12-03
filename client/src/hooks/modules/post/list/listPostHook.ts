import { Post } from "../../../../models/modules/post/Post"
import api from "../../../../service/api";

async function listPost(
  page: number,
  pageSize: number,
): Promise<Post[]> {
  try {
    const response = await api.get(`/api/v1/post?page=${page}&pageSize=${pageSize}`);

    return response.data as Post[];
  } catch (error) {

    return [];
  }
}

export default listPost;
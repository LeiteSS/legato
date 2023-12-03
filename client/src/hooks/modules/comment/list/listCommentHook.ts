import api from "../../../../service/api";
import { Comment } from "../../../../models/modules/comment/Comment";

async function listComment(
  page: number,
  pageSize: number,
): Promise<Comment[]> {
  try {
    const response = await api.get(`/api/v1/comment?page=${page}&pageSize=${pageSize}`);

    return response.data as Comment[];
  } catch (error) {
    return [];
  }
}

export default listComment;
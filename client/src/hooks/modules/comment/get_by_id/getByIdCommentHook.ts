import { Comment } from "../../../../models/modules/comment/Comment";
import api from "../../../../service/api";


async function getByIdComment(
  id: string,
): Promise<Comment | null> {
  try {
    const response = await api.get(`/api/v1/comment/${id}`);

    return response.data as Comment;
  } catch (error) {
    return null;
  }
}

export default getByIdComment;
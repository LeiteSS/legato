import { Comment } from "../../../../models/modules/comment/Comment";
import api from "../../../../service/api";

export async function deleteComment(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/comment/${id}`);

    return response.data as Comment;
  } catch (error) {

    return null;
  }
}

export default deleteComment;
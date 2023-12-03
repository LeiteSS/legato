import { Comment } from "../../../../models/modules/comment/Comment";
import api from "../../../../service/api";

async function createComment(
  comment: Comment,
): Promise<Comment | null> {
  try {
    const response = await api.post('/api/v1/comment', comment);

    return response.data as Comment;
  } catch (error) {
    return null;
  }
}

export default createComment;
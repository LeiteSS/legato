import api from "../../../../service/api";


export async function updateComment(
  id: string,
  comment: Comment,
): Promise<Comment | null> {
  try {
    const response = await api.put(`/api/v1/comment/${id}`, comment);

    return response.data as Comment;
  } catch (error) {

    return null;
  }
}

export default updateComment;
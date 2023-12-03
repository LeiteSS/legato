import { Message } from "../../../../models/modules/message/Message";
import api from "../../../../service/api";

export async function deleteMessage(
  id: string,
) {
  try {
    const response = await api.delete(`/api/v1/message/${id}`);

    return response.data as Message;
  } catch (error) {

    return null;
  }
}

export default deleteMessage;
import { Message } from "../../../../models/modules/message/Message";
import api from "../../../../service/api";

export async function updateMessage(
  id: string,
  message: Message,
): Promise<Message | null> {
  try {
    const response = await api.put(`/api/v1/message/${id}`, message);

    return response.data as Message;
  } catch (error) {

    return null;
  }
}

export default updateMessage;
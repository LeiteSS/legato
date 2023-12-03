import { Message } from "../../../../models/modules/message/Message";
import api from "../../../../service/api";


async function createMessage(
  message: Message,
): Promise<Message | null> {
  try {
    const response = await api.post('/api/v1/message', message);

    return response.data as Message;
  } catch (error) {

    return null;
  }
}

export default createMessage;
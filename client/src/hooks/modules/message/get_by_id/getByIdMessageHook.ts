import { Message } from "../../../../models/modules/message/Message";
import api from "../../../../service/api";

async function getByIdMessage(
  id: string,
): Promise<Message | null> {
  try {
    const response = await api.get(`/api/v1/message/${id}`);

    return response.data as Message;
  } catch (error) {

    return null;
  }
}

export default getByIdMessage;
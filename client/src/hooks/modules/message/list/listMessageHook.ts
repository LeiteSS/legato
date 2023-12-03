import { Message } from "../../../../models/modules/message/Message";
import api from "../../../../service/api";

async function listMessage(
  page: number,
  pageSize: number,

): Promise<Message[]> {
  try {
    const response = await api.get(`/api/v1/message?page=${page}&pageSize=${pageSize}`);

    return response.data as Message[];
  } catch (error) {

    return [];
  }
}

export default listMessage;
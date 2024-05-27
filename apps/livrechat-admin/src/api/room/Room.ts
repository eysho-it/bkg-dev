import { Message } from "../message/Message";

export type Room = {
  createdAt: Date;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  updatedAt: Date;
};

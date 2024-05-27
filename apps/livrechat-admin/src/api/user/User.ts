import { Message } from "../message/Message";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  messages?: Array<Message>;
  password: string | null;
  updatedAt: Date;
  username: string | null;
};

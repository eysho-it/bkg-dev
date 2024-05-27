import { Room } from "../room/Room";
import { User } from "../user/User";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  room?: Room | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};

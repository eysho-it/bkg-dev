import { Post } from "../post/Post";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};

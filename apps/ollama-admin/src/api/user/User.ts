import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
  username: string | null;
};

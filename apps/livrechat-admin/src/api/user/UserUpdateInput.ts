import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  password?: string | null;
  username?: string | null;
};

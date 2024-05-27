import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  password?: string | null;
  username?: string | null;
};

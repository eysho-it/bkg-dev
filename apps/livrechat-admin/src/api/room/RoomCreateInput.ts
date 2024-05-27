import { MessageCreateNestedManyWithoutRoomsInput } from "./MessageCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutRoomsInput;
  name?: string | null;
};

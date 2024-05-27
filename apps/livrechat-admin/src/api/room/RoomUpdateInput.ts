import { MessageUpdateManyWithoutRoomsInput } from "./MessageUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutRoomsInput;
  name?: string | null;
};

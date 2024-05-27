import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};

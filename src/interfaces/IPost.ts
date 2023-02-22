import { IProfile } from "./IProfile";
export type IPost = {
  id?: string;
  text?: string;
  username?: string;
  user?: IProfile | null;
  createdAt?: Date;
  updatedAt?: Date;
  v?: number;
  image?: null | string;
};

import { Task } from "./task";

type List = {
  id: string;
  title: string;
  tasks?: Task[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export type { List };

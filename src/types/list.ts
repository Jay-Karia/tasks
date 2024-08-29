import { Task } from "./task";

type List = {
  id: string;
  title: string;
  tasks?: Task[];
  createdAt: Date;
  updatedAt: Date;
};

export type { List };

import { Task } from "./task";

type List = {
  id: string;
  title: string;
  tasks?: Task[];
};

export type { List };

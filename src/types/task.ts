import { List } from "./list";

type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  list: List;
  listId: string;
};

export type { Task };

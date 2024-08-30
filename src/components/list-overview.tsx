import { List } from "@/types/list";
import Link from "next/link";
import { truncate } from "@/lib/truncate";
import DeleteTaskButton from "./delete-task-button";

export default function ListOverview({ list }: { list: List }) {
  if (!list.tasks) return null;

  function getCompleted(): number | undefined {
    return list.tasks?.filter(item => item.completed === true).length;
  }

  function getRemaining(): number | undefined {
    return list.tasks?.filter(item => item.completed === false).length;
  }

  return (
    <div className="flex w-56 flex-col rounded-lg border sm:w-64">
      <Link href={`/list/${list.id}`}>
        <div className="mb-2 border-b bg-slate-100 p-4 hover:cursor-pointer hover:bg-blue-100">
          <p className="leading-7 [&:not(:first-child)]:mt-6">{truncate(list.title)}</p>
        </div>
      </Link>
      <div className="flex items-center gap-2 px-4 py-2">
        <small className="text-sm font-medium leading-none">Completed: </small>
        <p className="text-sm text-muted-foreground">{getCompleted()}</p>
      </div>
      <div className="mb-4 flex items-center gap-2 px-4 py-2">
        <small className="text-sm font-medium leading-none">Remaining: </small>
        <p className="text-sm text-muted-foreground">{getRemaining()}</p>
      </div>
      <div className="flex w-full justify-end px-4 pb-2">
        <DeleteTaskButton listId={list.id} />
      </div>
    </div>
  );
}

import { List } from "@/types/list";
import Link from "next/link";

export default function ListOverview({ list }: { list: List }) {
  if (!list.tasks) return null;

  function getCompleted(): number | undefined {
    return list.tasks?.filter(item => item.completed === true).length;
  }

  function getRemaining(): number | undefined {
    return list.tasks?.filter(item => item.completed === false).length;
  }

  return (
    <div className="flex min-w-64 flex-col gap-4 rounded-lg border">
      <Link href={`/list/${list.id}`}>
        <div className="mb-2 border-b bg-purple-100 p-4 hover:cursor-pointer hover:bg-blue-100">
          {list.title}
        </div>
      </Link>
      <span className="px-4">Completed: {getCompleted()}</span>
      <span className="px-4 pb-8">Remaining: {getRemaining()}</span>
    </div>
  );
}

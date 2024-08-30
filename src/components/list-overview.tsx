import { List } from "@/types/list";
import Link from "next/link";

const TITLE_MAX_LENGTH = 20

export default function ListOverview({ list }: { list: List }) {
  if (!list.tasks) return null;

  function getCompleted(): number | undefined {
    return list.tasks?.filter(item => item.completed === true).length;
  }

  function getRemaining(): number | undefined {
    return list.tasks?.filter(item => item.completed === false).length;
  }

  function truncate(str: string) {
    if (str.length > TITLE_MAX_LENGTH)
      return str.substring(0, TITLE_MAX_LENGTH) +"..."

    return str
  }

  return (
    <div className="flex sm:w-64 w-56 flex-col gap-4 rounded-lg border">
      <Link href={`/list/${list.id}`}>
        <div className="mb-2 border-b bg-purple-100 p-4 hover:cursor-pointer hover:bg-blue-100">
          {truncate(list.title)}
        </div>
      </Link>
      <span className="px-4">Completed: {getCompleted()}</span>
      <span className="px-4 pb-8">Remaining: {getRemaining()}</span>
    </div>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "@/actions/task";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Task from "@/components/task";

export default function TasksPage() {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => await getAllTasks(),
  });

  return (
    <div className="flex h-full w-full flex-col gap-4 p-2">
      <h4 className="overflow-hidden break-words text-lg font-medium tracking-tight text-blue-700">
        All Tasks
      </h4>
      {query.isLoading ? (
        <>Loading ...</>
      ) : query.isError ? (
        <>{query.error}</>
      ) : query.data && query.data.length > 0 ? (
        <div className="flex flex-col bg-white">
          {query.data.map(task => {
            return (
              <Link href={`/list/${task.listId}`}>
                <Task task={task} viewOnly />
              </Link>
            );
          })}
        </div>
      ) : (
        <>No tasks found</>
      )}
    </div>
  );
}

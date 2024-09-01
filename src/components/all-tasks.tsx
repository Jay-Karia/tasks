import { useQuery } from "@tanstack/react-query";
import { getTasksByListId } from "@/actions/task";
import Task from "./task";

type Props = {
  listId: string;
};

export default function AllTasks({ listId }: Props) {
  const query = useQuery({
    queryKey: ["tasks", listId],
    queryFn: async () => await getTasksByListId(listId),
  });

  return (
    <div>
      {query.isLoading ? (
        <>Loading ...</>
      ) : query.isError ? (
        <>{query.error}</>
      ) : query.data && query.data.length > 0 ? (
        <div className="flex w-[90%] flex-col rounded-sm border border-t-0 bg-white shadow-sm">
          {query.data.map(task => {
            return (
              <div key={task.id}>
                <Task task={task} />
              </div>
            );
          })}
        </div>
      ) : (
        <>No tasks found</>
      )}
    </div>
  );
}

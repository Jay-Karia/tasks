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
    <div className="h-[90%] w-full">
      {query.isLoading ? (
        <>Loading ...</>
      ) : query.isError ? (
        <>{query.error}</>
      ) : query.data && query.data.length > 0 ? (
        <div className="shadow-s flex flex-col rounded-sm border border-t-0 bg-white">
          {query.data.map(task => {
            return (
              <div key={task.id} className="">
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

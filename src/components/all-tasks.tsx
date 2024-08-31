import { useQuery } from "@tanstack/react-query";
import { getTasksByListId } from "@/actions/task";

type Props = {
  listId: string;
};

export default function AllTasks({ listId }: Props) {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => await getTasksByListId(listId),
  });

  return (
    <div>
      {query.isLoading ? (
        <>Loading ...</>
      ) : query.isError ? (
        <>{query.error}</>
      ) : (
        query.data && query.data.length > 0 ? <>{JSON.stringify(query.data)}</> : <>No tasks found</>
      )}
    </div>
  );
}

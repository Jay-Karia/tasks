import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/actions/task";

export default function DeleteTask({ taskId, listId }: { taskId: string; listId: string }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: async () => await deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", listId] });
    },
  });

  return (
    <span
      className="w-full text-red-500 hover:cursor-pointer"
      onClick={() => {
        mutation.mutate();
      }}
    >
      Delete
    </span>
  );
}

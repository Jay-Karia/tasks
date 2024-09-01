"use client";

import { Task as TaskType } from "@/types/task";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeTask, uncompleteTask } from "@/actions/task";

type Props = {
  task: TaskType;
};

export default function Task({ task }: Props) {
  const queryClient = useQueryClient();
  const isCompleted = task.completed;
  const mutation = useMutation({
    mutationKey: ["toggleTask"],
    mutationFn: async () => {
      if (isCompleted) return await uncompleteTask(task.id);
      await completeTask(task.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", task.listId] });
    },
  });

  return (
    <div className="flex">
      <div className="flex aspect-square items-center justify-center p-4 outline-1 outline-gray-300 hover:outline">
        <Checkbox
          onClick={() => {
            mutation.mutate();
          }}
          checked={task.completed}
        />
      </div>
      <div className="flex w-full items-center justify-start outline-1 outline-gray-300 hover:outline">
        <small className="px-4 text-sm font-normal leading-none">{task.title}</small>
      </div>
    </div>
  );
}

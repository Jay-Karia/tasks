"use client";

import { Task as TaskType } from "@/types/task";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeTask, uncompleteTask } from "@/actions/task";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import RenameTask from "./rename-task";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteTask from "./delete-task";

type Props = {
  task: TaskType;
  viewOnly?: boolean;
};

export default function Task({ task, viewOnly = false }: Props) {
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
    <div className="flex w-full">
      <div className="flex aspect-square items-center justify-center p-4 outline-1 outline-gray-300 hover:outline">
        <Checkbox
          onClick={() => {
            if (!viewOnly) mutation.mutate();
          }}
          checked={task.completed}
          disabled={viewOnly}
        />
      </div>
      <div className="flex w-full items-center justify-start outline-1 outline-gray-300 hover:outline">
        <small className="w-[90%] break-words px-4 text-sm font-normal leading-none">
          {task.title}
        </small>
      </div>
      {!viewOnly && (
        <div className="mx-2 flex items-center justify-center p-2 outline-gray-300">
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:cursor-pointer">
              <HiMiniEllipsisHorizontal className="text-blue-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <RenameTask task={task} />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DeleteTask taskId={task.id} listId={task.listId} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
}

"use client";

import { FaTrash } from "react-icons/fa";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteList } from "@/actions/list";

export default function DeleteTaskButton({ listId }: { listId: string }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (title: string) => {
      await deleteList(title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  return (
    <FaTrash
      className="text-slate-900 hover:cursor-pointer"
      onClick={() => {
        mutation.mutate(listId);
      }}
    />
  );
}

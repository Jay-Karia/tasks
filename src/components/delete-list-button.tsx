"use client";

import { FaTrash } from "react-icons/fa";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteList } from "@/actions/list";
import { useRouter } from "next/navigation";

type Props = {
  listId: string;
  variant?: "icon" | "text";
  redirect?: boolean;
  redirectTo?: string;
};

export default function DeleteListButton({
  listId,
  variant = "icon",
  redirect = false,
  redirectTo,
}: Props) {
  const router = useRouter();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (title: string) => {
      await deleteList(title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });
      if (redirect && redirectTo) {
        router.push("/tasks");
      }
    },
  });

  return (
    <>
      {variant === "icon" && (
        <FaTrash
          className="text-slate-900 hover:cursor-pointer"
          onClick={() => {
            mutation.mutate(listId);
          }}
        />
      )}
      {variant === "text" && (
        <span
          className="w-full text-red-500 hover:cursor-pointer"
          onClick={() => {
            mutation.mutate(listId);
          }}
        >
          Delete
        </span>
      )}
    </>
  );
}

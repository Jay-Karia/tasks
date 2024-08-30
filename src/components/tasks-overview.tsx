"use client";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { useQuery, useMutation } from "@tanstack/react-query";
import { createList, getLists } from "@/actions/list";
import { createTask } from "@/actions/task";

const primaryFont = localFont({
  src: "./../../public/fonts/font.woff2",
});

export default function TasksOverview() {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => await getLists(),
  });

  const addList = useMutation({
    mutationKey: ["addList"],
    mutationFn: async () =>
      await createTask("list title", "description", "66d136f945bf9047e8d424e2"),
  });

  return (
    <div className="mt-24 flex w-full flex-col items-center justify-center">
      <h4 className={cn("scroll-m-20 text-xl font-medium tracking-tight", primaryFont.className)}>
        Tasks Overview
      </h4>

      <div className="mt-8 flex w-full flex-col items-center justify-center">
        {query.isLoading ? (
          <div>Loading...</div>
        ) : query.isError ? (
          <div>Error: {query.error.message}</div>
        ) : (
          <div>{query.data && query.data?.length > 0 ? <>Tasks found</> : <>No tasks found</>}</div>
        )}
      </div>

      <button
        onClick={() => {
          addList.mutate();
        }}
      >
        New task
      </button>
    </div>
  );
}

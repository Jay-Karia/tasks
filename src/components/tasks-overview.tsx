"use client";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getLists } from "@/actions/list";
import ListOverview from "./list-overview";

const primaryFont = localFont({
  src: "./../../public/fonts/font.woff2",
});

export default function TasksOverview() {
  const query = useQuery({
    queryKey: ["lists"],
    queryFn: async () => await getLists(),
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
        ) : query.data && query.data?.length > 0 ? (
          <div className="mx-24 flex flex-wrap gap-12 p-4">
            {query.data.map(list => {
              return (
                <div key={list.id}>
                  <ListOverview list={list} />
                </div>
              );
            })}
          </div>
        ) : (
          <>No tasks found</>
        )}
      </div>
    </div>
  );
}

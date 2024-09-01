"use client";

import { useQuery } from "@tanstack/react-query";
import { getList } from "@/actions/list";

import ListPageHeader from "@/components/list-page-header";
import AddTask from "@/components/add-task";
import AllTasks from "@/components/all-tasks";
export default function ListPage({ params }: { params: { id: string } }) {
  const list = useQuery({
    queryKey: ["list", "lists"],
    queryFn: async () => await getList(params.id),
  });

  return (
    <div className="h-full p-2">
      {list.isLoading ? (
        <>Loading ...</>
      ) : list.isError ? (
        <>{list.error}</>
      ) : (
        list.data && (
          <div className="flex h-full flex-col gap-8">
            <ListPageHeader list={list.data} />
            <AddTask listId={list.data.id} />
            <AllTasks listId={list.data.id} />
          </div>
        )
      )}
    </div>
  );
}

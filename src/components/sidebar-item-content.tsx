import { useQuery } from "@tanstack/react-query";
import { getLists } from "@/actions/list";
import SidebarItem from "./sidebar-item";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SidebarItemContent() {
  const lists = useQuery({
    queryKey: ["lists"],
    queryFn: async () => await getLists(),
  });
  return (
    <>
      <ScrollArea className="h-[90%]">
        {lists.isError ? (
          <div className="p-4">{lists.error.message}</div>
        ) : lists.isLoading ? (
          <div className="p-4">Loading ...</div>
        ) : (
          <div className="mt-4 flex flex-col">
            {lists.data?.map(list => {
              return (
                <div key={list.id}>
                  <SidebarItem list={list} />
                </div>
              );
            })}
          </div>
        )}
      </ScrollArea>
    </>
  );
}

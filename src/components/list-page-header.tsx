import { List } from "@/types/list";
import DeleteListButton from "./delete-list-button";

import { PiListBullets } from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineEllipsis } from "react-icons/ai";

export default function ListPageHeader({ list }: { list: List }) {
  return (
    <div className="flex w-[90%] flex-wrap items-center gap-2 text-blue-700">
      <span className="flex gap-2 overflow-hidden">
        <PiListBullets size={25} className="min-w-6" />
        <h4 className="overflow-hidden break-words text-lg font-medium tracking-tight">
          {list.title}
        </h4>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AiOutlineEllipsis size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>
                <DeleteListButton
                  listId={list.id}
                  variant="text"
                  redirect={true}
                  redirectTo="/tasks"
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </span>
    </div>
  );
}

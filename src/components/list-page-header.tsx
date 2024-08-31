import { List } from "@/types/list";
import DeleteListButton from "./delete-list-button";
import { redirect } from 'next/navigation'

import { PiListBullets } from "react-icons/pi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AiOutlineEllipsis } from "react-icons/ai";

export default function ListPageHeader({ list }: { list: List }) {
    return (
        <div className="flex gap-2 text-blue-700 items-center">
            <PiListBullets size={25} />
            <h4 className={"scroll-m-20 text-lg font-medium tracking-tight"}>
                {list.title}
            </h4>
            <div className="ml-2 flex justify-center items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger><AiOutlineEllipsis size={20} /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem><DeleteListButton listId={list.id} variant="text" redirect={true} redirectTo="/tasks" /></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
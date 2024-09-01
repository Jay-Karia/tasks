import { Task as TaskType } from "@/types/task";
import { Checkbox } from "@/components/ui/checkbox";
import { CiTrash } from "react-icons/ci";

type Props = {
  task: TaskType;
};

export default function Task({ task }: Props) {
  return (
    <div className="flex">
      <div className="flex aspect-square items-center justify-center p-4 outline-1 outline-gray-300 hover:outline">
        <Checkbox />
      </div>
      <div className="flex w-full items-center justify-start outline-1 outline-gray-300 hover:outline">
        <small className="px-4 text-sm font-normal leading-none">{task.title}</small>
      </div>
      {/* <div className="flex justify-center items-center outline-1 hover:outline aspect-square p-2 outline-gray-300">
                <CiTrash className="h-[20px] w-[28px]"/>
            </div> */}
    </div>
  );
}

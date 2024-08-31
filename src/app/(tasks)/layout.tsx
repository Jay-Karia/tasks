import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function TasksLayout({ children }: Props) {
  return (
    <div className="flex h-[95%] w-full">
      <Sidebar />
      <div className="p-4 w-full bg-gray-50">{children}</div>
    </div>
  );
}

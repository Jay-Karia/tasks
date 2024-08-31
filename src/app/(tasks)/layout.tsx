import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function TasksLayout({ children }: Props) {
  return (
    <div className="flex h-[95%] w-full">
      <Sidebar />
      <div className="w-full bg-gray-50 p-4">{children}</div>
    </div>
  );
}

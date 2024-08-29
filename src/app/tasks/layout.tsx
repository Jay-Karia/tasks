type Props = {
  children: React.ReactNode;
};

export default function TasksLayout({ children }: Props) {
  return <div className="w-full">{children}</div>;
}

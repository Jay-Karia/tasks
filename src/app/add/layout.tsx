type Props = {
  children: React.ReactNode;
};

export default function AddLayout({ children }: Props) {
  return <div className="w-full">{children}</div>;
}

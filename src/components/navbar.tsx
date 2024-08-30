import Logo from "./logo";
import Link from "next/link";
import LoginButton from "./auth/login-button";
import Menu from "./menu";
import AddList from "./add-list";
import { buttonVariants, Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const navLinks = [{ name: "All Tasks", path: "/tasks" }];

  return (
    <nav className="flex h-12 items-center justify-around border-b">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden sm:flex">
          <AddList>
            <div className={cn(buttonVariants({ variant: "link", size: "sm", className: "" }))}>
              Add List
            </div>
          </AddList>
          {navLinks.map(link => (
            <Button variant={"link"} asChild key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        <LoginButton />
      </div>
      <Menu navLinks={navLinks} />
    </nav>
  );
}

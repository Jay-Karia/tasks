import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

import { MenuIcon } from "lucide-react";
import LoginButton from "./auth/login-button";
import AddList from "./add-list";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function Menu({ navLinks }: { navLinks: { name: string; path: string }[] }) {
  return (
    <div className="block sm:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <MenuIcon size={20} />
          </MenubarTrigger>
          <MenubarContent>
            <AddList>
              <div className={cn(buttonVariants({ variant: "link", size: "sm", className: "" }))}>
                Add List
              </div>
            </AddList>
            {navLinks.map(link => (
              <MenubarItem key={link.name}>
                <Link href={link.path}>{link.name}</Link>
              </MenubarItem>
            ))}
            <MenubarSeparator />
            <LoginButton />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

import Logo from "./logo"
import Link from "next/link"
import { Button } from "./ui/button"
import LoginButton from "./auth/login-button"
import Menu from "./menu"

export default function Navbar() {
  const navLinks = [
    { name: "Add Task", path: "/add" },
    { name: "Tasks", path: "/tasks" },
  ]

  return (
    <nav className="flex h-12 items-center justify-around border-b">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden sm:flex">
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
  )
}

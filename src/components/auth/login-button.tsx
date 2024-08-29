import { Button } from "../ui/button"
import Link from "next/link"

export default function LoginButton() {
  return (
    <div>
      <Button variant={"secondary"} asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  )
}

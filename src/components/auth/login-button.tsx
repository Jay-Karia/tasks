import { Button } from "../ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginButton() {
  return (
    <div>
      <Button variant={"secondary"} size={"sm"} asChild>
        <Link href="/login">
          <FcGoogle className="mr-2" />
          Login
        </Link>
      </Button>
    </div>
  );
}

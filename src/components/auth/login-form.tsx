"use server";

import { signIn } from "@/auth";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export default async function LoginForm() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type={"submit"} variant={"secondary"} size={"sm"}>
        <FcGoogle className="mr-2" />
        Login
      </Button>
    </form>
  );
}

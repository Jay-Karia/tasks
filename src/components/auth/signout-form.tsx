"use server";

import { signOut } from "@/auth";
import { Button } from "../ui/button";

export default async function SignoutForm() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant={"link"} type={"submit"}>
        Logout
      </Button>
    </form>
  );
}

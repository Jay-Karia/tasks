"use server";

import { auth } from "@/auth";
import LoginForm from "./login-form";
import SignoutForm from "./signout-form";
import UserAvatar from "./user-avatar";

export default async function LoginButton() {
  const session = await auth();

  return (
    <div>
      {session && session.user ? (
        <div className="flex items-center justify-center">
          <UserAvatar />
          <SignoutForm />
        </div>
      ) : (
        <div>
          <LoginForm />
        </div>
      )}
    </div>
  );
}

import { auth } from "@/auth";

export async function getUser() {
  const session = await auth();
  if (!session || !session.user) throw new Error("No session found");

  return session.user;
}

export async function getUserId() {
  const user = await getUser();

  if (!user || !user.id) throw new Error("No user found");

  return user.id;
}

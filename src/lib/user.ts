import { auth } from "@/auth";

export async function getUser() {
  const session = await auth();
  if (!session || !session.user) return null;

  return session.user;
}

export async function getUserId() {
  const user = await getUser();

  if (!user || !user.id) return null;

  return user.id;
}

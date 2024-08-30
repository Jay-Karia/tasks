import { getUserId } from "./user";
import { getList } from "@/actions/list";

export async function getListOwner(id: string) {
  const list = await getList(id);
  if (!list) throw new Error("No list found");

  return list.userId;
}

export async function isMyList(id: string) {
  const listOwner = await getListOwner(id);
  const userId = await getUserId();
  return listOwner === userId;
}

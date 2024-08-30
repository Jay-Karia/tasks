"use server";

import prisma from "@/lib/db";
import { List } from "@/types/list";
import { getUserId } from "@/lib/user";

export async function createList(title: string): Promise<List | null> {
  const userId = await getUserId();
  return await prisma.list.create({
    data: {
      title,
      userId,
    },
  });
}

export async function getLists(): Promise<List[]> {
  const userId = await getUserId();
  return await prisma.list.findMany({
    where: {
      userId,
    },
    include: {
      tasks: true,
    },
  });
}

export async function getList(id: string): Promise<List | null> {
  const userId = await getUserId();
  const list = await prisma.list.findUnique({
    where: {
      id,
    },
  });

  if (!list) return null;

  if (list.userId !== userId) return null;

  return list;
}

export async function updateList(id: string, title: string): Promise<List | null> {
  const userId = await getUserId();
  const list = await prisma.list.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  if (!list) return null;

  if (list.userId !== userId) return null;

  return list;
}

export async function deleteList(id: string): Promise<List | null> {
  const userId = await getUserId();
  const list = await prisma.list.delete({
    where: {
      id,
    },
  });

  if (!list) return null;

  if (list.userId !== userId) return null;

  return list;
}

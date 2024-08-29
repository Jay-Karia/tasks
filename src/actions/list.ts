"use server";

import prisma from "@/lib/db";
import { List } from "@/types/list";

export async function createList(title: string): Promise<List> {
  return await prisma.list.create({
    data: {
      title,
      userId: "",
    },
  });
}

export async function getLists(): Promise<List[]> {
  return await prisma.list.findMany();
}

export async function getList(id: string): Promise<List | null> {
  const list = await prisma.list.findUnique({
    where: {
      id,
    },
  });

  if (!list) return null;

  return list;
}

export async function updateList(id: string, title: string): Promise<List | null> {
  const list = await prisma.list.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });

  if (!list) return null;

  return list;
}

export async function deleteList(id: string): Promise<List | null> {
  const list = await prisma.list.delete({
    where: {
      id,
    },
  });

  if (!list) return null;
  return list;
}

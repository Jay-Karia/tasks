"use server";

import prisma from "@/lib/db";
import { Task } from "@/types/task";
import { getUserId } from "@/lib/user";
import { isMyList } from "@/lib/list";

export async function createTask(
  title: string,
  description: string,
  listId: string
): Promise<Task | null> {
  const userId = await getUserId();
  const owner = await isMyList(listId);
  if (!owner || !userId) return null
  return await prisma.task.create({
    data: {
      title,
      description,
      listId,
      completed: false,
      userId,
    },
  });
}

export async function updateTask(
  id: string,
  title: string,
  description: string,
  completed: boolean
): Promise<Task | null> {
  const userId = await getUserId();

  const task = await prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      completed,
    },
  });

  if (!task) return null;
  if (task.userId !== userId) return null;

  return task;
}

export async function deleteTask(id: string): Promise<Task | null> {
  const userId = await getUserId();
  const task = await prisma.task.delete({
    where: {
      id,
    },
  });

  if (!task) return null;
  if (task.userId !== userId) return null;

  return task;
}

export async function getTask(id: string): Promise<Task | null> {
  const userId = await getUserId();
  if (!userId) return null
  const task = await prisma.task.findUnique({
    where: {
      id,
      userId,
    },
  });
  return task;
}

export async function getTasksByListId(listId: string): Promise<Task[] | null> {
  const userId = await getUserId();
  if (!userId) return null
  return await prisma.task.findMany({
    where: {
      listId,
      userId,
    },
  });
}

export async function getAllTasks(): Promise<Task[] | null> {
  const userId = await getUserId();
  if (!userId) return null
  return await prisma.task.findMany({
    where: {
      userId,
    },
  });
}

export async function completeTask(id: string): Promise<Task | null> {
  const userId = await getUserId();
  const task = await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  });
  if (!task) return null;
  if (task.userId !== userId) return null;
  return task;
}

export async function uncompleteTask(id: string): Promise<Task | null> {
  const userId = await getUserId();
  const task = await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed: false,
    },
  });
  if (!task) return null;
  if (task.userId !== userId) return null;
  return task;
}

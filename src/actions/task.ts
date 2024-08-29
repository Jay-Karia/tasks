"use server";

import prisma from "@/lib/db";
import { Task } from "@/types/task";

export async function createTask(
  title: string,
  description: string,
  listId: string
): Promise<Task> {
  return await prisma.task.create({
    data: {
      title,
      description,
      listId,
      completed: false,
    },
  });
}

export async function updateTask(
  id: string,
  title: string,
  description: string,
  completed: boolean
): Promise<Task> {
  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      completed,
    },
  });
}

export async function deleteTask(id: string): Promise<Task> {
  return await prisma.task.delete({
    where: {
      id,
    },
  });
}

export async function getTask(id: string): Promise<Task | null> {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
}

export async function getTasksByListId(listId: string): Promise<Task[]> {
  return await prisma.task.findMany({
    where: {
      listId,
    },
  });
}

export async function getAllTasks(): Promise<Task[]> {
  return await prisma.task.findMany();
}

export async function completeTask(id: string): Promise<Task> {
  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  });
}

export async function uncompleteTask(id: string): Promise<Task> {
  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed: false,
    },
  });
}

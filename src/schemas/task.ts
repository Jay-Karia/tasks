import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(2),
});

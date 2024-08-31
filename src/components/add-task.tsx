import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { taskSchema } from "@/schemas/task";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "@/actions/task";

type Props = {
  listId: string;
};

export default function AddTask({ listId }: Props) {
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit({ title }: z.infer<typeof taskSchema>) {
    mutation.mutate(title);
  }

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (title: string) => {
      await createTask(title, listId);
    },
    onSuccess: () => {
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return (
    <div className="w-[90%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={"Add task"}
                    className="rounded-sm rounded-bl-none rounded-br-none border border-b-0 border-t-0 p-6"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="w-full border bg-gray-100 px-4 py-2">
            <Button
              type="submit"
              variant={"secondary"}
              size={"sm"}
              className="rounded-none border bg-white shadow-sm hover:bg-white"
            >
              Add
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

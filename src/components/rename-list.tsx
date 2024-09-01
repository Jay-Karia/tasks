import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateList } from "@/actions/list";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { listSchema } from "@/schemas/list";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function RenameList({ listId }: { listId: string }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["renameList"],
    mutationFn: async (title: string) => await updateList(listId, title),
    onSuccess: () => {
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
      queryClient.invalidateQueries({ queryKey: ["list", "lists"] });
    },
  });

  const form = useForm<z.infer<typeof listSchema>>({
    resolver: zodResolver(listSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit({ title }: z.infer<typeof listSchema>) {
    mutation.mutate(title);
  }
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="w-full">
          <span className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:cursor-pointer hover:bg-gray-50 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            Rename
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename List</DialogTitle>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant={"primary"}>
                  Rename
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

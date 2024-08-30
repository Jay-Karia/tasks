"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ListForm from "./list-form";

export default function AddList({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div>{children}</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new List</DialogTitle>
        </DialogHeader>
        <div>
          <ListForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateBookMutation } from "@/redux/api/bookApi";
import type { IBook, Genre } from "@/types";
import { toast } from "sonner";

type EditBookDialogProps = {
  trigger?: React.ReactNode;
  book: IBook;
};

export default function EditBookDialog({ trigger, book }: EditBookDialogProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Partial<IBook>>({});
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  useEffect(() => {
    if (open) {
      setForm({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        description: book.description,
        copies: book.copies,
      });
    }
  }, [open, book]);

  const onChange =
    (key: keyof IBook) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = key === "copies" ? Number(e.target.value) : e.target.value;
      setForm((prev) => ({ ...prev, [key]: value as any }));
    };

  const submit = async () => {
    try {
      const payload: Partial<IBook> = {};
      (Object.keys(form) as (keyof IBook)[]).forEach((k) => {
        if (form[k] !== undefined && form[k] !== (book as any)[k]) {
          (payload as any)[k] = form[k];
        }
      });

      await updateBook({ id: book._id, body: payload }).unwrap();
      toast.success("Book updated successfully");
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update book");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      ) : null}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Book</AlertDialogTitle>
          <AlertDialogDescription>
            Update any field below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={form.title || ""}
              onChange={onChange("title")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              value={form.author || ""}
              onChange={onChange("author")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="genre">Genre</Label>
            <Input
              id="genre"
              value={(form.genre as Genre) || ""}
              onChange={onChange("genre")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="isbn">ISBN</Label>
            <Input
              id="isbn"
              value={form.isbn || ""}
              onChange={onChange("isbn")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={form.description || ""}
              onChange={onChange("description")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="copies">Copies</Label>
            <Input
              id="copies"
              type="number"
              min={0}
              value={form.copies ?? 0}
              onChange={onChange("copies")}
            />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={submit} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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
import { toast } from "sonner";
import { useBorrowBookMutation } from "@/redux/api/borrow.api";
import { useMemo } from "react";

type BorrowDialogProps = {
  trigger?: React.ReactNode;
  bookId: string;
  defaultQuantity?: number;
  availableCopies?: number;
};

export default function BorrowDialog({
  trigger,
  bookId,
  defaultQuantity = 1,
  availableCopies = 0,
}: BorrowDialogProps) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [dueDate, setDueDate] = useState<string>("");
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const todayStr = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
  }, []);

  const submit = async () => {
    if (!dueDate) {
      toast.error("Please select a due date");
      return;
    }
    if (dueDate < todayStr) {
      toast.error("Due date cannot be in the past");
      return;
    }
    if (quantity < 1) {
      toast.error("Quantity must be at least 1");
      return;
    }
    if (availableCopies && quantity > availableCopies) {
      toast.error(`Only ${availableCopies} copies available`);
      return;
    }
    try {
      const payload = {
        book: bookId,
        quantity,
        dueDate: new Date(dueDate).toISOString(),
      };
      const res = await borrowBook(payload).unwrap();
      toast.success(res?.message || "Borrowed successfully");
      setOpen(false);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to borrow");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      ) : null}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Borrow Book</AlertDialogTitle>
          <AlertDialogDescription>
            Choose quantity and due date to borrow this book.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              max={Math.max(1, availableCopies || 1)}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <p className="text-xs text-muted-foreground">
              Available: {availableCopies}
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              min={todayStr}
            />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={submit} disabled={isLoading}>
            {isLoading ? "Borrowing..." : "Confirm Borrow"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

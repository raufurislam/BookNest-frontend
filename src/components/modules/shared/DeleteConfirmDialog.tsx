// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
// import { Trash2 } from "lucide-react";

// interface DeleteConfirmDialogProps {
//   title?: string;
//   description?: string;
//   onConfirm: () => void;
// }

// const DeleteConfirmDialog = ({
//   title = "Are you sure?",
//   description = "This action cannot be undone.",
//   onConfirm,
// }: DeleteConfirmDialogProps) => {
//   return (
//     <AlertDialog modal={false}>
//       {/* disables Radix scroll lock */}
//       <AlertDialogTrigger asChild>
//         <Button size="sm" variant="destructive">
//           <Trash2 className="h-4 w-4" />
//         </Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>{title}</AlertDialogTitle>
//           <AlertDialogDescription>{description}</AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction onClick={onConfirm}>Delete</AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

// export default DeleteConfirmDialog;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface DeleteConfirmDialogProps {
  title?: string;
  description?: string;
  onConfirm: () => void;
}

export default function DeleteConfirmDialog({
  title,
  description,
  onConfirm,
}: DeleteConfirmDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size="sm" variant="destructive" onClick={() => setOpen(true)}>
        <Trash2 className="h-4 w-4" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-background p-5 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="mt-2 text-muted-foreground">{description}</p>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  onConfirm();
                  setOpen(false);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

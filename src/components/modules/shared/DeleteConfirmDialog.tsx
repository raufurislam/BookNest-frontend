import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface DeleteConfirmDialogProps {
  title?: string;
  description?: string;
  onConfirm: () => void;
}

export default function DeleteConfirmDialog({
  title = "Are you sure?",
  description = "This action cannot be undone.",
  onConfirm,
}: DeleteConfirmDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <Button
        size="sm"
        variant="destructive"
        className="flex items-center gap-1 transition-transform duration-150 hover:scale-105"
        onClick={() => setOpen(true)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-background p-6 rounded-2xl shadow-2xl w-full max-w-md mx-4 animate-fade-in"
            onClick={(e) => e.stopPropagation()} // Prevent closing on content click
          >
            {/* Header */}
            <h2 className="text-xl font-semibold text-foreground text-left">
              {title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground text-left">
              {description}
            </p>

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-3">
              <Button
                variant="outline"
                className="px-4 py-2 transition-colors duration-200 hover:bg-muted/20"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="px-4 py-2 transition-transform duration-150 hover:scale-105"
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

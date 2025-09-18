/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useAddBookMutation } from "@/redux/api/book.api";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { BookOpen, PlusCircle } from "lucide-react";
import hero from "@/assets/hero.png";
import logo from "@/assets/Logo.png";

// Define genre enum with Zod
const GenreEnum = z.enum([
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
]);

// Create form schema
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  // genre: GenreEnum,

  genre: z
    .string()
    .refine(
      (val): val is z.infer<typeof GenreEnum> =>
        GenreEnum.options.includes(val as z.infer<typeof GenreEnum>),
      {
        message: "Genre is required",
      }
    ),

  // isbn: z.string(),
  // .regex(/^\d{13}$/, "ISBN must be exactly 13 digits"), // Fixed
  description: z
    .string()
    .min(10, "Description should be at least 10 characters"),
  isbn: z.string().regex(/^\d{13}$/, "ISBN must be exactly 13 digits"),
  copies: z.number().int().min(1).max(100),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddBooks() {
  const navigate = useNavigate();
  const [AddBook] = useAddBookMutation();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      // genre: "FICTION",
      genre: "", // 👈 start empty

      isbn: "",
      description: "",
      copies: 1,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const toastId = toast.loading("Uploading Files. Please wait");

    try {
      const payload = {
        ...data,
        isbn: String(data.isbn),
      };

      await AddBook(payload).unwrap();
      navigate("/all-books");
      form.reset();
      toast.success("Book added successfully", { id: toastId });
    } catch (error: any) {
      console.log("Error:", error);
      const message =
        (error?.data?.message as string) ??
        (error?.message as string) ??
        "An error occurred";
      toast.error(message, { id: toastId });
    }
  };

  return (
    <div className="my-16 container mx-auto px-5">
      <div
        className={cn(
          "flex justify-center items-center min-h-screen bg-muted/30 p-6"
        )}
      >
        <Card className="w-full max-w-5xl shadow-lg rounded-2xl overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl font-bold">
                  Add a New Book
                </CardTitle>
              </div>
              <PlusCircle className="h-5 w-5 text-muted-foreground" />
            </div>
            <CardDescription>
              Fill in the details to add a book to your library
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Visual Panel */}
              <div className="hidden lg:block relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border p-6">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.15) 2px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                  <img
                    src={logo}
                    alt="Brand"
                    className="h-10 mb-4 opacity-80"
                  />
                  <img
                    src={hero}
                    alt="Books"
                    className="w-3/4 mx-auto drop-shadow-xl rounded-lg"
                  />
                  <p className="mt-6 text-sm text-muted-foreground max-w-sm">
                    Create a high-quality catalog entry. Accurate metadata helps
                    readers discover books faster.
                  </p>
                </div>
              </div>

              {/* Form Panel */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Title */}
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter book title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Author */}
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter author name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Genre */}
                  {/* <FormField
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Genre</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a genre" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {GenreEnum.options.map((g) => (
                              <SelectItem key={g} value={g}>
                                {g}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}

                  <FormField
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        {" "}
                        {/* 👈 make full width */}
                        <FormLabel>Genre</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select your genre" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {GenreEnum.options.map((g) => (
                              <SelectItem key={g} value={g}>
                                {g}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ISBN */}
                  <FormField
                    control={form.control}
                    name="isbn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ISBN</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="13-digit ISBN"
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)} // keep string
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Description */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Brief description of the book"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Copies */}
                  <FormField
                    control={form.control}
                    name="copies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Copies</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            max={100}
                            value={field.value}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              if (!isNaN(val)) field.onChange(val);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button type="submit" className="w-full sm:w-auto">
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

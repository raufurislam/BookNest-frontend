import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/providers/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-transparent border border-black"
          variant="outline"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/providers/theme-provider";

// export function ModeToggle() {
//   const { theme, setTheme } = useTheme();

//   const handleToggle = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <Button
//       onClick={handleToggle}
//       variant="outline"
//       size="icon"
//       className="relative w-9 h-9 p-2 rounded-md flex items-center justify-center
//                  bg-transparent border border-black dark:border-white
//                  text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
//     >
//       {/* Sun Icon */}
//       <Sun
//         className={`absolute h-5 w-5 transition-all duration-300
//                     ${
//                       theme === "dark"
//                         ? "opacity-0 scale-50 rotate-90"
//                         : "opacity-100 scale-100 rotate-0"
//                     }`}
//       />
//       {/* Moon Icon */}
//       <Moon
//         className={`absolute h-5 w-5 transition-all duration-300
//                     ${
//                       theme === "dark"
//                         ? "opacity-100 scale-100 rotate-0"
//                         : "opacity-0 scale-50 -rotate-90"
//                     }`}
//       />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   );
// }

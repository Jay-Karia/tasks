import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const primaryFont = localFont({
  src: "../../public/fonts/font.woff2",
})

export default function Home() {
  return (
    <div className="mt-4 flex h-max w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1
          className={cn(
            "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl",
            primaryFont.className
          )}
        >
          Welcome to <span className="text-purple-700">Tasks</span>
        </h1>
        <p className="text-center text-sm text-muted-foreground">A simple task manager.</p>
      </div>
      <div className="mt-8 flex gap-4">
        <Button size={"sm"} variant={"primary"} asChild>
          <Link href="/add">Add Task</Link>
        </Button>
        <Button size={"sm"} variant={"outline"} asChild>
          <Link href="https://github.com/Jay-Karia/tasks">
            <FaGithub className="mr-2" />
            Source
          </Link>
        </Button>
      </div>
    </div>
  )
}

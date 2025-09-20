import { cn } from "./cn";
export default function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <article className={cn("card p-6", className)}>{children}</article>;
}
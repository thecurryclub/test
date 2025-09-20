import { cn } from "./cn";
export default function Section({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <section className={cn("section", className)}>{children}</section>;
}
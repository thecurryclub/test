import { cn } from "./ui/cn";
export function Badge({ label, tone = "brand" }: { label: string; tone?: "brand"|"good"|"caution"|"bad" }) {
  const map: Record<string,string> = {
    brand: "bg-brand/10 text-brand",
    good: "bg-brand/10 text-brand",
    caution: "bg-yellow-100 text-yellow-700",
    bad: "bg-red-100 text-red-700"
  };
  return <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-sm font-medium", map[tone])}>{label}</span>;
}
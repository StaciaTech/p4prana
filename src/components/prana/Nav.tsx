import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import pranaLogo from "@/assets/prana-logo.svg";

interface NavItem {
  label: string;
  href: string;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Declaration", href: "/declaration" },
  { label: "Programme", href: "/programme" },
  { label: "Faculty", href: "/faculty" },
  { label: "About", href: "/about" },
  { label: "Venue", href: "/venue" },
];

interface NavProps {
  items?: NavItem[];
  className?: string;
}

export function Nav({ items = DEFAULT_ITEMS, className }: NavProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-line",
        "bg-paper/80 dark:bg-ink/70 backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-6 px-6">
        <Link
          to="/"
          className="flex items-center gap-3 min-h-11"
          aria-label="PRANA 2026 home"
        >
          <img src={pranaLogo} alt="" className="h-8 w-8" aria-hidden />
          <span className="font-display text-[15px] font-bold uppercase tracking-tight text-ink dark:text-paper">
            PRANA <span className="text-gradient">2026</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 ml-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "mono text-[12px] text-ink/80 dark:text-paper/80",
                "hover:text-ink dark:hover:text-paper transition-colors",
                "min-h-11 flex items-center",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto">
          <Button variant="primary" size="sm" asChild>
            <a href="/register">Register</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

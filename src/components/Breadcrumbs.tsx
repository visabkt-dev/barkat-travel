"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((path) => path !== "");

  return (
    <nav className="absolute top-0 left-0 w-full z-40 pt-28 md:pt-36 pointer-events-none">
      <div className="container mx-auto px-4 overflow-hidden">
        <ul className="flex items-center space-x-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-white/50 overflow-x-auto whitespace-nowrap scrollbar-hide py-1 pointer-events-auto">
          <li className="flex items-center shrink-0">
            <Link href="/" className="hover:text-brand-gold flex items-center transition-colors">
              <Home className="w-3 h-3 mr-1" />
              <span>Home</span>
            </Link>
          </li>
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}/`;
            const isLast = index === paths.length - 1;
            const label = path.replace(/-/g, " ");

            return (
              <li key={path} className="flex items-center shrink-0">
                <ChevronRight className="w-3 h-3 mx-2 opacity-30 text-white" />
                {isLast ? (
                  <span className="text-brand-gold">{label}</span>
                ) : (
                  <Link href={href} className="hover:text-brand-gold transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

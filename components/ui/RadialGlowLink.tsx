import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RadialGlowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  showArrow?: boolean;
};

export function RadialGlowLink({ children, showArrow = false, className, ...props }: RadialGlowLinkProps) {
  return (
    <a className={cn("theme-btn", className)} {...props}>
      <span className="theme-btn-shine" aria-hidden="true"><span /></span>
      <span className="theme-btn-bg" aria-hidden="true" />
      <span className="theme-btn-label">{children}</span>
      {showArrow && (
        <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  );
}

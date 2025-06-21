import { ElementLink } from "@/interfaces/elements/link.interface";
import { cn } from "@/utils/cn.util";
import Link from "next/link";

export interface LinkComponentProps extends ElementLink {
  className?: string;
  children?: React.ReactNode;
}

export const LinkComponent = ({
  label,
  href,
  isExternal = false,
  className,
  children,
}: LinkComponentProps) => {
  return (
    <Link
      className={cn("link", className)}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      {children ?? label}
    </Link>
  );
};

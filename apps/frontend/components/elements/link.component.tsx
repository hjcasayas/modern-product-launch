import { ElementLink } from "@/interfaces/elements/link.interface";
import Link from "next/link";

export interface LinkComponentProps extends ElementLink {
  className?: string;
  children?: React.ReactNode;
}

export const LinkComponent = ({
  label,
  url,
  isExternal = false,
  className,
  children,
}: LinkComponentProps) => {
  return (
    <Link
      className={className}
      href={url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      {children ?? label}
    </Link>
  );
};

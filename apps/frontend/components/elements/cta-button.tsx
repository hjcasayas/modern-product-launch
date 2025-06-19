import { ElementCtaButton } from "@/interfaces/elements/cta-button.interface";
import { cn } from "@/utils/cn.util";
import Image from "next/image";
import Link from "next/link";

export interface CtaButtonProps extends ElementCtaButton {
  className?: string;
}

export const CtaButtonComponent = ({
  label,
  url,
  icon,
  className,
}: CtaButtonProps) => {
  return (
    <Link
      href={url}
      className={cn(
        "bg-dark-moss-green group inline-block rounded-full px-[22px] py-3.5 text-white",
        className
      )}
    >
      <div className="flex w-full flex-row justify-center gap-x-1">
        <span>{label}</span>
        {icon != null ? (
          <Image
            className="transition-all group-hover:-translate-y-2"
            src={
              process.env.NODE_ENV === "production"
                ? icon?.url
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${icon?.url}`
            }
            alt={icon.alternativeText ?? ""}
            width={6}
            height={6}
          />
        ) : null}
      </div>
    </Link>
  );
};

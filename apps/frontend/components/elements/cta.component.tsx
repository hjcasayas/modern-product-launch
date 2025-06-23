import { ElementCta } from "@/interfaces/elements/cta.interface";

import { cn } from "@/utils/cn.util";

import { LinkComponent } from "./link.component";
import { ImageLoader } from "../image-loader";

export interface CtaComponentProps extends ElementCta {
  className?: string;
  variant?: "primary" | "secondary";
}

export const CtaComponent = ({
  link: { href, label, isExternal },
  icon,
  className,
  variant = "primary",
}: CtaComponentProps) => {
  const variants = {
    primary: "bg-dark-moss-green text-on-accent",
    secondary: "bg-accent-2 link",
  };
  return (
    <LinkComponent
      {...{ href, label, isExternal }}
      className={cn(
        "hover:bg-accent-3 hover:text-on-accent group inline-block rounded-full px-[22px] py-3.5 transition-all duration-300 ease-in-out",
        variants[variant],
        className
      )}
    >
      <div className="flex w-full flex-row justify-center gap-x-1">
        <span>{label}</span>
        {icon != null ? (
          <ImageLoader
            className="relative h-auto transition-all group-hover:-translate-y-2"
            src={icon.url}
            alt={icon.alternativeText ?? ""}
            width={6}
            height={6}
          />
        ) : null}
      </div>
    </LinkComponent>
  );
};

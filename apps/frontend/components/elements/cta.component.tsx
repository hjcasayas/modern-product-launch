import { ElementCta } from "@/interfaces/elements/cta.interface";

import { cn } from "@/utils/cn.util";

import { LinkComponent } from "./link.component";
import { ImageLoader } from "../image-loader";

export interface CtaComponentProps extends ElementCta {
  className?: string;
}

export const CtaComponent = ({
  link: { href, label, isExternal, id },
  icon,
  className,
}: CtaComponentProps) => {
  return (
    <LinkComponent
      {...{ href, label, isExternal, id }}
      className={cn(
        "bg-dark-moss-green text-on-accent group inline-block rounded-full px-[22px] py-3.5",
        className
      )}
    >
      <div className="flex w-full flex-row justify-center gap-x-1">
        <span>{label}</span>
        {icon != null ? (
          <ImageLoader
            className="relative transition-all group-hover:-translate-y-2"
            src={icon.url}
            alt={icon.alternativeText ?? ""}
            width={icon.width}
            height={icon.height}
          />
        ) : null}
      </div>
    </LinkComponent>
  );
};

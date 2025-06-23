import { ImageLoader } from "@/components/image-loader";
import { ColumnLayout } from "@/components/layout/column/column.interface";
import { cn } from "@/utils/cn.util";

export const SpecificationsColumnComponent = ({
  title,
  list,
  isEmphasized = false,
}: ColumnLayout) => {
  return (
    <div
      className={cn("min-w-[200px] flex-1 bg-white", {
        "border-divider rounded-2xl border shadow": isEmphasized,
      })}
    >
      <div className="border-divider flex h-24 items-center justify-center border-b px-8 py-4">
        <h4
          className={cn(
            "font-rethink-sans text-accent-5 text-[1.625rem] font-medium leading-[1.2] -tracking-[0.08em]",
            { "text-accent-4 font-dm-sans": isEmphasized }
          )}
        >
          {title}
        </h4>
      </div>
      {list.map((item) => (
        <div
          className={cn(
            "border-divider flex items-center gap-2 border-b px-[1.875rem] py-8",
            { "last:border-b-0": isEmphasized }
          )}
          key={item.id}
        >
          <ImageLoader
            src={item.icon.url}
            alt={item.icon.alternativeText ?? "icon"}
            width={14}
            height={14}
          />
          <span className="caption text-headline">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

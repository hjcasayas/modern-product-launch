import { ImageLoader } from "@/components/image-loader";
import { ModuleLayout } from "./module.interface";

export interface ModuleComponentProps extends ModuleLayout {
  className?: string;
}

export const ModuleComponent = ({
  icon,
  title,
  description,
  className,
}: ModuleComponentProps) => {
  return (
    <div className={className}>
      <ImageLoader
        src={icon.url}
        alt={icon.alternativeText || "Module Icon"}
        width={icon.width}
        height={icon.height}
      />
      <h4 className="heading-3 mt-6">{title}</h4>
      <p className="paragraph text-paragraph mt-5">{description}</p>
    </div>
  );
};

import { ModuleComponent } from "@/components/layout/module/module.component";
import { BenefitsBlockComponentProps } from "./benefits.component";

export const BenefitsModulesComponent = ({
  modules,
}: Pick<BenefitsBlockComponentProps, "modules">) => {
  return (
    <div className="tablet:grid-cols-2 desktop:grid-cols-4 grid grid-cols-1 gap-5 pb-[3.75rem] pt-[3.125rem]">
      {modules.map((module) => (
        <ModuleComponent
          key={module.id}
          className="border-t-divider border-t-2 pb-10 pt-[2.625rem]"
          {...module}
        />
      ))}
    </div>
  );
};

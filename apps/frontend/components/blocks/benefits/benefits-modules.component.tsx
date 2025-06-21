import { ModuleComponent } from "@/components/layout/module/module.component";
import { ModuleLayout } from "@/components/layout/module/module.interface";

export const BenefitsModulesComponent = ({
  modules,
}: {
  modules: ModuleLayout[];
}) => {
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

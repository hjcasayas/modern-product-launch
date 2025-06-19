import { ElementWebsiteName } from "@/interfaces/elements/website-name.interface";

export const WebsiteNameComponent = ({
  name,
}: Omit<ElementWebsiteName, "id">) => {
  return <h1 className="text-3xl font-medium">{name}</h1>;
};

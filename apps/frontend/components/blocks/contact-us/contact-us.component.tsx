import { CtaComponent } from "@/components/elements/cta.component";
import { StrapiBase } from "@/interfaces/strapi/base.interface";
import { StrapiBlock } from "@/interfaces/strapi/block.interface";
import { ContactUsBlock } from "./contact-us.interface";

export interface ContactUsBlockComponentProps
  extends ContactUsBlock,
    StrapiBase,
    StrapiBlock {}

export const ContactUsBlockComponent = ({
  headline,
  description,
  cta,
}: ContactUsBlockComponentProps) => {
  return (
    <section id="contact-us" className="tablet:px-10 px-5 py-[7.5rem]">
      <div className="tablet:max-w-[32.5rem] desktop:max-w-[37.5rem] mx-auto flex max-w-[21.4375rem] flex-col gap-y-10">
        <h2 className="heading-1 text-center">{headline}</h2>
        <p className="paragraph text-center">{description}</p>
        <CtaComponent variant="primary" {...cta} className="self-center" />
      </div>
    </section>
  );
};

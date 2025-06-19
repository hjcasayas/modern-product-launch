import { ElementCtaButton } from "@/interfaces/elements/cta-button.interface";

export const CtaButtonComponent = ({ label }: ElementCtaButton) => {
  return (
    <a className="bg-dark-moss-green mt-12 inline-block rounded-full px-[22px] py-3.5 text-white">
      {label}
    </a>
  );
};

import FooterLink from "../../FooterLink/FooterLink";

interface FooterSectionProps {
  title: string;
  links: { label: string; to: string }[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div className="flex flex-col">
    <span className="text-white font-bold text-[16px] mb-[20px]">{title}</span>
    <div className="flex flex-col gap-[10px]">
      {links.map((link) => (
        <FooterLink key={link.label} to={link.to} label={link.label} />
      ))}
    </div>
  </div>
);

export default FooterSection;

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink = ({ to, label }: FooterLinkProps) => {
  return (
    <a href={to} className="text-[15px] font-medium text-footer-link hover:text-accent">
      {label}
    </a>
  );
};

export default FooterLink;

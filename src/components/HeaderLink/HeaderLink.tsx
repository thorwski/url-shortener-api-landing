interface HeaderLinkProps {
  to: string;
  label: string;
}

const HeaderLink = ({ to, label }: HeaderLinkProps) => {
  return (
    <a href={to} className="text-[15px] font-bold text-header-link hover:text-dark">
      {label}
    </a>
  );
};

export default HeaderLink;

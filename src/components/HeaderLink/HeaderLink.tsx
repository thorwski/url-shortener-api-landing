import clsx from "clsx";

interface HeaderLinkProps {
  variant: "header" | "header-menu";
  to: string;
  label: string;
}

const HeaderLink = ({ variant, to, label }: HeaderLinkProps) => {
  const variantStyles = {
    header: "text-[15px] font-bold text-header-link hover:text-dark",
    "header-menu": "text-[18px] font-bold text-white",
  };

  return (
    <a href={to} className={clsx(variantStyles[variant])}>
      {label}
    </a>
  );
};

export default HeaderLink;

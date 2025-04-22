import clsx from "clsx";

interface ButtonProps {
  children?: React.ReactNode;
  label?: string;
  variant: "primary" | "secondary" | "transparent";
  size: "default" | "tight" | "large";
  rounded?: "sm" | "md" | "full";
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  className?: string;
}

const Button = ({
  children,
  label,
  variant,
  size,
  rounded,
  disabled,
  loading,
  onClick,
  className,
}: ButtonProps) => {
  const baseStyles = "font-bold cursor-pointer";

  const variantStyles = {
    primary: "bg-accent text-white hover:opacity-50",
    secondary: "bg-purple text-white hover:bg-gray-300",
    transparent:
      "bg-transparent text-gray hover:text-dark",
  };

  const sizeStyles = {
    default: "px-6 py-3 text-[15px]",
    tight: "px-10 py-[18px] text-[20px]",
    large: "px-10 py-[22px] text-[20px]",
    none: "p-0 text-[15px]",
  };

  const roundedStyles = {
    sm: "rounded-[5px]",
    md: "rounded-[10px]",
    full: "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        variant === "transparent" ? sizeStyles.none : sizeStyles[size],
        roundedStyles[rounded || "md"],
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {loading ? "Loading..." : children ?? label}
    </button>
  );
};

export default Button;

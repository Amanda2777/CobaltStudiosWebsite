import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
  openInNewTab?: boolean;
}

export default function Button({
  href,
  variant = "secondary",
  children,
  icon,
  openInNewTab = false,
}: ButtonProps) {
  const baseStyles =
    "px-4 py-3 text-base md:text-xl font-semibold rounded-lg transition-opacity hover:opacity-80";
  const variantStyles = {
    primary: "bg-white text-[#050505]",
    secondary: "bg-transparent text-white",
  };

  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noreferrer" : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${icon ? "inline-flex items-center gap-2.5" : ""}`}
    >
      {children}
      {icon}
    </Link>
  );
}

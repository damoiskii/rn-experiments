import { Pressable, PressableProps } from "react-native";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  danger: "bg-red-600",
};

const variantTextStyles = {
  primary: "text-white",
  secondary: "text-foreground",
  danger: "text-white",
};

const sizeStyles = {
  sm: "px-3 py-2",
  md: "px-4 py-3",
  lg: "px-6 py-4",
};

interface ButtonProps extends PressableProps {
  variant: ButtonVariant;
  size: ButtonSize;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      className={`rounded ${variantStyles[variant]} ${variantTextStyles[variant]} ${sizeStyles[size]}`}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default Button;

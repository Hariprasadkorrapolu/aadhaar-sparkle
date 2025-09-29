import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FlashCardProps {
  children: ReactNode;
  variant?: "default" | "gradient" | "accent" | "success";
  className?: string;
  onClick?: () => void;
  delay?: number;
}

const FlashCard = ({ 
  children, 
  variant = "default", 
  className, 
  onClick,
  delay = 0 
}: FlashCardProps) => {
  const variantClasses = {
    default: "flash-card",
    gradient: "flash-card-gradient text-white",
    accent: "flash-card-accent text-white",
    success: "flash-card-success text-white",
  };

  return (
    <div
      className={cn(
        variantClasses[variant],
        "animate-flash-in p-6",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FlashCard;
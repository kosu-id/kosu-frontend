



import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-black text-white hover:opacity-90",
    outline: "border border-gray-300 bg-white text-gray-600 hover:bg-gray-300",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant || "default"], className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };

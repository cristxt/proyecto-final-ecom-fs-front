import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { FaUpload } from 'react-icons/fa';  
import './CreateButton.css';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        custom: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "custom",
      size: "default",
    },
  }
);

const CreateButton = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <FaUpload className="mr-2" />
      </Comp>
    );
  }
);

CreateButton.displayName = "CreateButton";

export { CreateButton, buttonVariants };

"use client";

import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PasswordInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Input
        type={visible ? "text" : "password"}
        className={cn("pr-12", className)}
        ref={ref}
        {...props}
      />
      {visible ? (
        <EyeOff
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
          size={18}
          onClick={() => setVisible(false)}
        />
      ) : (
        <Eye
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
          size={18}
          onClick={() => setVisible(true)}
        />
      )}
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };

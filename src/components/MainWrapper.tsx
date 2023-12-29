import { cn } from "@/lib/utils";
import { ReactNode } from "react";
const MainWrapper = ({
  className,
  children,
}: {
  className?: String;
  children: ReactNode;
}) => {
  return (
    <div className={cn("flex justify-between", className)}>{children}</div>
  );
};

export default MainWrapper;

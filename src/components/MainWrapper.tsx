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
    <div
      className={cn(
        "flex justify-between  md:flex-col sm:flex-col lg:flex-row",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainWrapper;

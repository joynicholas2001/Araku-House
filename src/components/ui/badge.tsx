import * as React from "react";

import { cn } from "../../lib/utils";
import { BadgeProps, badgeVariants } from "./badge-variants";

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge };

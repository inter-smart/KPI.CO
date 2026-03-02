import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ============================================================================
// Heading Variants
// ============================================================================

export const headingVariants = cva("leading-tight font-semibold", {
  variants: {
    size: {
      h1: "text-[28px] lg:text-[32px] lg:text-[34px] xl:text-[48px] 2xl:text-[52px] 3xl:text-[65px]",
      h2: "text-[28px] sm:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px]",
      h3: "text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[48px]",
      h4: "text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px]",
      h5: "text-[16px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[26px]",
      h6: "text-[16px] sm:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[25px] 3xl:text-[32px]",
      h8: "text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[22px] 3xl:text-[25px]",
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

// ============================================================================
// Text Variants
// ============================================================================

export const textVariants = cva("leading-normal font-normal", {
  variants: {
    size: {
      p1: "text-[16px] lg:text-[14px] xl:text-[18px] 2xl:text-[17px] 3xl:text-[21px]",
      p2: "text-[16px] sm:text-[15px] xl:text-[18px] 2xl:text-[21px]",
      p3: "text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[26px]",
      p4: "text-[12px] lg:text-[13px] xl:text-[18px] 2xl:text-[16px] 3xl:text-[18px]",
      p5: "text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[24px]",
    },
  },
  defaultVariants: {
    size: "p1",
  },
});

// ============================================================================
// Heading Component (TypeScript)
// ============================================================================

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";

export interface HeadingProps
  extends
  React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  as?: HeadingElement;
}

export function Heading({
  as = "h1",
  size,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as;

  return (
    <Component className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Component>
  );
}

Heading.displayName = "Heading";

// ============================================================================
// Text Component (TypeScript)
// ============================================================================

type TextElement = "p" | "span" | "div" | "label";

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: TextElement;
}

export function Text({
  as = "p",
  size,
  className,
  children,
  ...props
}: TextProps) {
  const Component = as;

  return (
    <Component className={cn(textVariants({ size }), className)} {...props}>
      {children}
    </Component>
  );
}

Text.displayName = "Text";

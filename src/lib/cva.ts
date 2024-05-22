
import { cva, type VariantProps } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const variants = cva(
  `  flex px-4 py-2  text-nowrap  capitalize relative h-[50px] transition-[transform_background-color] duration-300 duration-300  justify-center items-center tracking-wider
    `,
  {
    variants: {
      variant: {
        fill: " bg-primary rounded text-primary-text hover:bg-secondery hover:text-secondery-text active:scale-95  ",
        "fill.secondery": " bg-secondery rounded text-secondery-text hover:bg-secondery-text hover:text-neutral active:scale-95  ",
        outline: "ring-[1px] bg-primary ring-primary-text font-semibold rounded-full text-primary-text  hover:ring-secondery hover:bg-secondery hover:text-secondery-text ",
        "fill.alert": " bg-alert rounded-sm text-neutral-revert hover:bg-alert-hover active:scale-95 ",
        "fill.success": " bg-success rounded-sm text-neutral-revert hover:bg-success-hover active:scale-95 ",
        "fill.info": " bg-info rounded-sm text-neutral-revert hover:bg-info-hover active:scale-95 ",
        "fill.warn": " bg-warn rounded-sm text-neutral-revert hover:bg-warn-hover active:scale-95 ",
        ghost:
          "  hover:bg-variant/80   active:bg-variant    ",
        none: "",
      },


    },

    defaultVariants: {
      variant: "fill",
    },
  }
);
export type variantsType = VariantProps<typeof variants>;

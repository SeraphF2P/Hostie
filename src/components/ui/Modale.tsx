"use client"
import { Btn, type BtnProps } from "~/ui";
import { cn } from "~/lib/cva";
import type { DialogContentProps } from "@radix-ui/react-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, RefAttributes } from "react";

export const Modale = (props: JSX.IntrinsicAttributes & Dialog.DialogProps) => (
  <Dialog.Root {...props}>{props.children}</Dialog.Root>
);
const Button = (props: BtnProps) => (
  <Dialog.Trigger asChild>
    <Btn {...props} />
  </Dialog.Trigger>
);
const Close = ({ children, ...props }: BtnProps) => (
  <Dialog.Close asChild>
    <Btn {...props}>{children}</Btn>
  </Dialog.Close>
);

const Overlayer = ({
  className,
  ...props
}: Dialog.DialogOverlayProps & ComponentPropsWithoutRef<"div">) => {
  return (
    <Dialog.Overlay
      {...props}
      className={cn(
        " fixed inset-0  z-40  bg-gray-700/30  backdrop-blur-sm ",
        className,
      )}
    />
  );
};
const Content = ({
  className,
  ...props
}: DialogContentProps & RefAttributes<HTMLDivElement>) => {
  return (
    <Dialog.Content
      {...props}
      className={cn(
        " z-50 ",
        className,
      )}
    />
  );
};
Modale.Close = Close;
Modale.Title = Dialog.Title;
Modale.Description = Dialog.Description;
Modale.Portal = Dialog.Portal;
Modale.Content = Content;
Modale.overlayer = Overlayer;
Modale.Btn = Button;


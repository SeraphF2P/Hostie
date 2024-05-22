import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { cn } from "../../lib/cva";

export  function Collapsible(props: RadixCollapsible.CollapsibleProps & React.RefAttributes<HTMLDivElement>) {
  return (
    <RadixCollapsible.Root {...props}/>
   
  );
}
const trigger = (props:RadixCollapsible.CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>) => {
  return <RadixCollapsible.Trigger  {...props}>
          {props.children}
      </RadixCollapsible.Trigger>
}
const content = ({className ,...props}:RadixCollapsible.CollapsibleContentProps & React.RefAttributes<HTMLDivElement>) => {
  return  <RadixCollapsible.Content asChild>
        <div {...props} className={cn("overflow-hidden data-[state='closed']:animate-slideUp data-[state='open']:animate-slideDown",className)}/>
      </RadixCollapsible.Content>
}
Collapsible.Btn = trigger
Collapsible.content = content
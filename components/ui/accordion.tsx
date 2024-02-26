import * as React from "react"
// UTILS
import { cn } from '@/utils/helpers';


interface IAccordionItem extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface IAccordion extends React.HTMLAttributes<HTMLDivElement>, IAccordionItem {
  question: string;
  answer: string;
}


export const Accordion = React.forwardRef<HTMLDivElement, IAccordion>(({ className, question, answer, ...props}, ref) => {
  // STATE & HOOKS
  const [isOpen, setIsOpen] = React.useState(false);

  // EVENTS
  const onClick = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-secondary text-primary shadow-sm",
        className
      )}
      {...props}
    >
      <AccordionTitle 
        onClick={onClick} 
        className={cn("border-solid border-primary")}
      >
        <h2>{question}</h2>
      </AccordionTitle>
      <AccordionContent 
        className={cn("bg-alternate text-secondary", isOpen ? "block" : "hidden")}
      >
        {answer}
      </AccordionContent>
    </div>
  );
})
Accordion.displayName = "Accordion";

export const AccordionTitle = React.forwardRef<HTMLDivElement, IAccordionItem>(({ className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-5 p-6",
        className
      )}
      {...props}
    />
  );
})
AccordionTitle.displayName = "AccordionTitle";

export const AccordionContent = React.forwardRef<HTMLHeadingElement, IAccordionItem>(({ className, ...props}, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "flex flex-col gap-5 p-6 text-sm text-primary font-bold",
        className
      )}
      {...props}
    />
  );
})
AccordionContent.displayName = "AccordionContent";
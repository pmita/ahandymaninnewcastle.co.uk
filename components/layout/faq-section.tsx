"use client"

// REACT
import { useCallback } from "react";
// COMPONENTS
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { bannerVariants } from "@/components/ui/banner";
// CONFIG
import { faq } from '@/config/faq';
// UTILS
import { cn } from "@/utils/helpers";

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value={question}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  </Accordion>
);


export const FaqSection = () => {
  // EARLY EXIT
  if(!faq) return null;

  // FUNCTIONS
  const renderContent = useCallback(() => (
    <>
      {faq.map((item) => (
        <FaqItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </>
  ), [faq]);

  return (
    <section className={cn(bannerVariants({ variant: "center", size: "half", className: "flex flex-col items-center justify-center p-5" }))}>
      <h2 className="font-font font-poppins font-bold text-2xl text-alternate">FAQs</h2>
      {renderContent()}
    </section>
  );
}
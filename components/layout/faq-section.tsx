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
// CONFIG
import { faq } from '@/config/faq';

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
    <>
      {renderContent()}
    </>
  );
}
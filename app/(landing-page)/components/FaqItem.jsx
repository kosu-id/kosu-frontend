import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FaqItem({ value, question, answer }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-4 bg-black text-white p-5 rounded-xl mb-3"
    >
      <AccordionItem value={value}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent className={"mt-3"}>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

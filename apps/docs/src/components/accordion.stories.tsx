import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@bitwyre/ui-kit";

const ComponentAccordion = () => (
  <Accordion type="single" className="w-full" collapsible>
    <AccordionItem value="item-1" className="dark:text-bw-primary-blue-50">
      <AccordionTrigger className="">Is it accessible?</AccordionTrigger>
      <AccordionContent className="flex items-center space-x-2">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="dark:text-bw-primary-blue-50">
      <AccordionTrigger className="">Is it accessible?</AccordionTrigger>
      <AccordionContent className="flex items-center space-x-2">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Main = () => <ComponentAccordion />;

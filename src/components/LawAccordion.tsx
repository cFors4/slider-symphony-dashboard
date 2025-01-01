import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Level } from "@/components/Level";

interface LawAccordionProps {
  levels: {
    [key: string]: {
      [key: string]: number;
    };
  };
  onValueChange: (level: string, key: string, value: number[]) => void;
}

export function LawAccordion({ levels, onValueChange }: LawAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      <AccordionItem value="level1">
        <AccordionTrigger className="text-primary hover:text-primary/80">
          Level 1: Law of Impermanence
        </AccordionTrigger>
        <AccordionContent>
          <Level
            title="Level 1: Law of Impermanence"
            essence="Lovingness"
            poweredBy="Mindset"
            internalTriangle={{
              archetype: "Forgiving Lover",
              state: "Open Heart",
              trait: "Compassionate Wisdom"
            }}
            externalTriangle={{
              practice: "Letting Go",
              mechanism: "Decaying Conditions",
              ideal: "Unconditional Love"
            }}
            values={levels.level1}
            onValueChange={(key, value) => onValueChange('level1', key, value)}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="level2">
        <AccordionTrigger className="text-primary hover:text-primary/80">
          Level 2: Law of Coherence
        </AccordionTrigger>
        <AccordionContent>
          <Level
            title="Level 2: Law of Coherence"
            essence="Oneness"
            poweredBy="Intelligence"
            internalTriangle={{
              archetype: "Accepting Magician",
              state: "Sharp Mind",
              trait: "Curious Clarity"
            }}
            externalTriangle={{
              practice: "Pattern Recognition",
              mechanism: "Iterating Organisation",
              ideal: "Future Building"
            }}
            values={levels.level2}
            onValueChange={(key, value) => onValueChange('level2', key, value)}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="level3">
        <AccordionTrigger className="text-primary hover:text-primary/80">
          Level 3: Law of Agency
        </AccordionTrigger>
        <AccordionContent>
          <Level
            title="Level 3: Law of Agency"
            essence="Sovereignty"
            poweredBy="Infrastructure"
            internalTriangle={{
              archetype: "Responsible King",
              state: "Present Awareness",
              trait: "Integral Peace"
            }}
            externalTriangle={{
              practice: "Decision Making",
              mechanism: "Conscious Choosing",
              ideal: "Meaningful Life"
            }}
            values={levels.level3}
            onValueChange={(key, value) => onValueChange('level3', key, value)}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="level4">
        <AccordionTrigger className="text-primary hover:text-primary/80">
          Level 4: Law of Competence
        </AccordionTrigger>
        <AccordionContent>
          <Level
            title="Level 4: Law of Competence"
            essence="Tenacity"
            poweredBy="Body"
            internalTriangle={{
              archetype: "Grateful Warrior",
              state: "Vital Body",
              trait: "Courageous Power"
            }}
            externalTriangle={{
              practice: "Energized Action",
              mechanism: "Learning Skills",
              ideal: "Impactful Activity"
            }}
            values={levels.level4}
            onValueChange={(key, value) => onValueChange('level4', key, value)}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
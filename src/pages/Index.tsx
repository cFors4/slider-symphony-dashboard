import { useState } from "react"
import { Level } from "@/components/Level"
import { LawQuestionnaire } from "@/components/LawQuestionnaire"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type Recommendation = {
  law: string;
  aspect: "being" | "doing";
  focus: string;
};

const Index = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [levels, setLevels] = useState({
    level1: {
      archetype: 5,
      state: 5,
      trait: 5,
      practice: 5,
      mechanism: 5,
      ideal: 5,
    },
    level2: {
      archetype: 5,
      state: 5,
      trait: 5,
      practice: 5,
      mechanism: 5,
      ideal: 5,
    },
    level3: {
      archetype: 5,
      state: 5,
      trait: 5,
      practice: 5,
      mechanism: 5,
      ideal: 5,
    },
    level4: {
      archetype: 5,
      state: 5,
      trait: 5,
      practice: 5,
      mechanism: 5,
      ideal: 5,
    },
  });

  const handleValueChange = (level: string, key: string, value: number[]) => {
    setLevels(prev => ({
      ...prev,
      [level]: {
        ...prev[level as keyof typeof prev],
        [key]: value[0]
      }
    }));
  };

  const handleQuestionnaireComplete = (result: Recommendation) => {
    setRecommendation(result);
    setShowQuestionnaire(false);
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {showQuestionnaire ? (
          <LawQuestionnaire onComplete={handleQuestionnaireComplete} />
        ) : (
          <>
            {recommendation && (
              <div className="mb-8 p-4 bg-muted rounded-lg">
                <h2 className="text-xl font-semibold mb-2 text-primary">Your Recommendation</h2>
                <p>Focus on: {recommendation.law}</p>
                <p>Approach: {recommendation.aspect === "being" ? "Internal Work (Being)" : "External Work (Doing)"}</p>
                <p>Development Area: {recommendation.focus}</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setShowQuestionnaire(true)}
                >
                  Retake Questionnaire
                </Button>
              </div>
            )}

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="level1">
                <AccordionTrigger className="text-primary hover:text-primary/80">
                  Level 1: Law of Impermanence
                </AccordionTrigger>
                <AccordionContent>
                  <Level
                    title="Level 1: Law of Impermanence"
                    essence="Lovingness"
                    poweredBy="Purify as circle spiral and dot"
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
                    onValueChange={(key, value) => handleValueChange('level1', key, value)}
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
                    poweredBy="Realise as spiral upward"
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
                    onValueChange={(key, value) => handleValueChange('level2', key, value)}
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
                    poweredBy="Observe as Eye"
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
                    onValueChange={(key, value) => handleValueChange('level3', key, value)}
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
                    poweredBy="Actualise as Star"
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
                    onValueChange={(key, value) => handleValueChange('level4', key, value)}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
import { useState } from "react"
import { LawQuestionnaire } from "@/components/LawQuestionnaire"
import { RecommendationPanel } from "@/components/RecommendationPanel"
import { LawAccordion } from "@/components/LawAccordion"

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
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Macro Compass</h1>
        
        {showQuestionnaire ? (
          <LawQuestionnaire onComplete={handleQuestionnaireComplete} />
        ) : (
          <>
            {recommendation && (
              <RecommendationPanel 
                recommendation={recommendation}
                onRetake={() => setShowQuestionnaire(true)}
              />
            )}
            <LawAccordion 
              levels={levels}
              onValueChange={handleValueChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";

type Recommendation = {
  law: string;
  aspect: "being" | "doing";
  focus: string;
};

interface RecommendationPanelProps {
  recommendation: Recommendation;
  onRetake: () => void;
}

export function RecommendationPanel({ recommendation, onRetake }: RecommendationPanelProps) {
  return (
    <div className="mb-8 p-4 bg-muted rounded-lg">
      <h2 className="text-xl font-semibold mb-2 text-primary">Your Recommendation</h2>
      <p>Focus on: {recommendation.law}</p>
      <p>Approach: {recommendation.aspect === "being" ? "Internal Work (Being)" : "External Work (Doing)"}</p>
      <p>Development Area: {recommendation.focus}</p>
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={onRetake}
      >
        Retake Questionnaire
      </Button>
    </div>
  );
}